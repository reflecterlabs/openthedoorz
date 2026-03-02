import type { ChainId } from "@/types";

export type SpeiDepositStatus = "pending" | "funded" | "expired" | "settled";

export interface SpeiDepositIntent {
  id: string;
  userId: string;
  clabe: string;
  beneficiary: string;
  reference: string;
  amountMxn: number;
  targetAsset: "USDC" | "ETH";
  expectedAssetAmount: number;
  status: SpeiDepositStatus;
  expiresAt: Date;
  createdAt: Date;
}

export interface CreateSpeiDepositInput {
  userId: string;
  amountMxn: number;
  targetAsset: "USDC" | "ETH";
  beneficiary?: string;
  ttlMinutes?: number;
}

function generateDigits(seed: string, length: number): string {
  let state = 0;
  for (let index = 0; index < seed.length; index += 1) {
    state = (state * 33 + seed.charCodeAt(index)) % 1_000_000_007;
  }

  let output = "";
  while (output.length < length) {
    state = (state * 48271 + 1) % 2_147_483_647;
    output += String(Math.abs(state)).padStart(10, "0");
  }
  return output.slice(0, length);
}

export class SPEIProvider {
  private readonly chainId: ChainId;
  private readonly intents = new Map<string, SpeiDepositIntent>();

  constructor(params: { chainId: ChainId }) {
    this.chainId = params.chainId;
  }

  createDepositIntent(input: CreateSpeiDepositInput): SpeiDepositIntent {
    if (!Number.isFinite(input.amountMxn) || input.amountMxn <= 0) {
      throw new Error("amountMxn must be greater than zero");
    }

    const now = new Date();
    const seed = `${input.userId}:${input.amountMxn}:${now.toISOString()}:${this.chainId.toLiteral()}`;
    const id = `spei_${generateDigits(`${seed}:id`, 12)}`;
    const reference = `OTD${generateDigits(`${seed}:ref`, 10)}`;
    const clabe = generateDigits(`${seed}:clabe`, 18);
    const ttlMinutes = input.ttlMinutes ?? 30;

    const usdcFx = 17.0;
    const ethFx = 52_000.0;
    const expectedAssetAmount =
      input.targetAsset === "USDC"
        ? Number((input.amountMxn / usdcFx).toFixed(2))
        : Number((input.amountMxn / ethFx).toFixed(6));

    const intent: SpeiDepositIntent = {
      id,
      userId: input.userId,
      clabe,
      beneficiary: input.beneficiary ?? "Open The Doorz MXN On-Ramp",
      reference,
      amountMxn: input.amountMxn,
      targetAsset: input.targetAsset,
      expectedAssetAmount,
      status: "pending",
      createdAt: now,
      expiresAt: new Date(now.getTime() + ttlMinutes * 60_000),
    };

    this.intents.set(id, intent);
    return intent;
  }

  getIntent(intentId: string): SpeiDepositIntent | null {
    const intent = this.intents.get(intentId);
    if (!intent) return null;

    if (
      intent.status === "pending" &&
      intent.expiresAt.getTime() < Date.now()
    ) {
      intent.status = "expired";
    }

    return intent;
  }

  markFunded(intentId: string): SpeiDepositIntent {
    const intent = this.getIntent(intentId);
    if (!intent) {
      throw new Error(`Unknown SPEI deposit intent: ${intentId}`);
    }
    if (intent.status === "expired") {
      throw new Error("Cannot fund an expired SPEI intent");
    }

    intent.status = "funded";
    return intent;
  }

  markSettled(intentId: string): SpeiDepositIntent {
    const intent = this.getIntent(intentId);
    if (!intent) {
      throw new Error(`Unknown SPEI deposit intent: ${intentId}`);
    }
    if (intent.status !== "funded") {
      throw new Error("SPEI intent must be funded before settlement");
    }

    intent.status = "settled";
    return intent;
  }
}
