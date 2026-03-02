import type {
  CreateVirtualAccountInput,
  VirtualAccount,
  VirtualAccountCountry,
} from "@/banking/interface";

function numericSeed(input: string, length: number): string {
  let seed = 0;
  for (let index = 0; index < input.length; index += 1) {
    seed = (seed * 31 + input.charCodeAt(index)) % 1_000_000_007;
  }

  let result = "";
  while (result.length < length) {
    seed = (seed * 1103515245 + 12345) % 2_147_483_647;
    result += Math.abs(seed).toString().padStart(10, "0");
  }
  return result.slice(0, length);
}

function countryAlias(country: VirtualAccountCountry, userId: string): string {
  const clean = userId
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase()
    .slice(0, 10);
  return `OTD-${country}-${clean || "USER"}`;
}

function buildVirtualAccount(input: CreateVirtualAccountInput): VirtualAccount {
  const base = `${input.userId}:${input.country}`;
  const clabe =
    input.country === "MX" ? numericSeed(`${base}:clabe`, 18) : undefined;
  const pixKey =
    input.country === "BR"
      ? `${numericSeed(`${base}:pix`, 11)}@openthedoorz.pay`
      : undefined;
  const cvu =
    input.country === "AR" ? `${numericSeed(`${base}:cvu`, 22)}` : undefined;

  const railsByCountry: Record<VirtualAccountCountry, VirtualAccount["rails"]> =
    {
      MX: ["SPEI"],
      BR: ["PIX"],
      AR: ["CVU"],
    };

  return {
    userId: input.userId,
    country: input.country,
    rails: railsByCountry[input.country],
    alias: countryAlias(input.country, input.userId),
    createdAt: new Date(),
    ...(clabe && { clabe }),
    ...(pixKey && { pixKey }),
    ...(cvu && { cvu }),
  };
}

export class VirtualAccountsService {
  private readonly accounts = new Map<string, VirtualAccount>();

  assign(input: CreateVirtualAccountInput): VirtualAccount {
    const key = `${input.userId}:${input.country}`;
    const existing = this.accounts.get(key);
    if (existing) {
      return existing;
    }

    const account = buildVirtualAccount(input);
    this.accounts.set(key, account);
    return account;
  }

  getByUser(userId: string): VirtualAccount[] {
    const response: VirtualAccount[] = [];
    for (const account of this.accounts.values()) {
      if (account.userId === userId) {
        response.push(account);
      }
    }
    return response;
  }

  getByUserAndCountry(
    userId: string,
    country: VirtualAccountCountry
  ): VirtualAccount | null {
    return this.accounts.get(`${userId}:${country}`) ?? null;
  }
}
