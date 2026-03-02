import { describe, expect, it } from "vitest";
import { DeFiYieldService } from "@/defi";
import { ChainId } from "@/types";

describe("DeFiYieldService", () => {
  it("lista bóvedas con APY y perfil de riesgo", () => {
    const service = new DeFiYieldService({ chainId: ChainId.SEPOLIA });
    const vaults = service.listVaults();

    expect(vaults.length).toBeGreaterThan(0);
    expect(vaults[0]).toHaveProperty("apyBps");
    expect(vaults[0]).toHaveProperty("riskTier");
  });

  it("estima rendimiento y crea posición", () => {
    const service = new DeFiYieldService({ chainId: ChainId.SEPOLIA });
    const vault = service.listVaults()[0];
    if (!vault) {
      throw new Error("No vaults available");
    }

    const estimate = service.estimateYearlyReturn(vault.id, 1000);
    expect(estimate).toBeGreaterThan(0);

    const position = service.openPosition({
      userId: "corp-yield",
      vaultId: vault.id,
      amount: 1000,
    });

    expect(position.userId).toBe("corp-yield");
    expect(service.getPositionsByUser("corp-yield")).toHaveLength(1);
  });
});
