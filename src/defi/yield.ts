import type { ChainId } from "@/types";

export interface YieldVault {
  id: string;
  name: string;
  asset: "USDC" | "ETH" | "STRK";
  apyBps: number;
  riskTier: "conservative" | "balanced" | "aggressive";
}

export interface YieldPosition {
  id: string;
  userId: string;
  vaultId: string;
  amount: number;
  createdAt: Date;
}

function defaultVaultsForChain(chainId: ChainId): YieldVault[] {
  const isMainnet = chainId.isMainnet();
  return [
    {
      id: "stable-reserve",
      name: "Stable Reserve",
      asset: "USDC",
      apyBps: isMainnet ? 820 : 950,
      riskTier: "conservative",
    },
    {
      id: "stark-growth",
      name: "Stark Growth",
      asset: "ETH",
      apyBps: isMainnet ? 1240 : 1400,
      riskTier: "balanced",
    },
    {
      id: "liquidity-plus",
      name: "Liquidity Plus",
      asset: "STRK",
      apyBps: isMainnet ? 1820 : 2100,
      riskTier: "aggressive",
    },
  ];
}

export class DeFiYieldService {
  private readonly vaults: YieldVault[];
  private readonly positions = new Map<string, YieldPosition>();

  constructor(params: { chainId: ChainId }) {
    this.vaults = defaultVaultsForChain(params.chainId);
  }

  listVaults(): YieldVault[] {
    return [...this.vaults];
  }

  estimateYearlyReturn(vaultId: string, amount: number): number {
    const vault = this.vaults.find((item) => item.id === vaultId);
    if (!vault) {
      throw new Error(`Unknown vault: ${vaultId}`);
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("amount must be greater than zero");
    }

    const apy = vault.apyBps / 10_000;
    return Number((amount * apy).toFixed(2));
  }

  openPosition(params: {
    userId: string;
    vaultId: string;
    amount: number;
  }): YieldPosition {
    const vault = this.vaults.find((item) => item.id === params.vaultId);
    if (!vault) {
      throw new Error(`Unknown vault: ${params.vaultId}`);
    }
    if (!Number.isFinite(params.amount) || params.amount <= 0) {
      throw new Error("amount must be greater than zero");
    }

    const id = `${params.userId}:${vault.id}:${Date.now()}`;
    const position: YieldPosition = {
      id,
      userId: params.userId,
      vaultId: vault.id,
      amount: params.amount,
      createdAt: new Date(),
    };
    this.positions.set(id, position);
    return position;
  }

  getPositionsByUser(userId: string): YieldPosition[] {
    const response: YieldPosition[] = [];
    for (const position of this.positions.values()) {
      if (position.userId === userId) {
        response.push(position);
      }
    }
    return response;
  }
}
