import { describe, expect, it } from "vitest";
import { SPEIProvider } from "@/onramp";
import { ChainId } from "@/types";

describe("SPEIProvider", () => {
  it("genera una instrucción SPEI con CLABE y referencia", () => {
    const provider = new SPEIProvider({ chainId: ChainId.SEPOLIA });

    const intent = provider.createDepositIntent({
      userId: "cliente-001",
      amountMxn: 2500,
      targetAsset: "USDC",
    });

    expect(intent.id.startsWith("spei_")).toBe(true);
    expect(intent.clabe).toMatch(/^\d{18}$/);
    expect(intent.reference).toMatch(/^OTD\d{10}$/);
    expect(intent.status).toBe("pending");
    expect(intent.expectedAssetAmount).toBeGreaterThan(0);
  });

  it("permite transición pending -> funded -> settled", () => {
    const provider = new SPEIProvider({ chainId: ChainId.SEPOLIA });
    const intent = provider.createDepositIntent({
      userId: "cliente-002",
      amountMxn: 1000,
      targetAsset: "ETH",
    });

    const funded = provider.markFunded(intent.id);
    expect(funded.status).toBe("funded");

    const settled = provider.markSettled(intent.id);
    expect(settled.status).toBe("settled");
  });
});
