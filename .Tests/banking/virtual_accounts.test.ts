import { describe, expect, it } from "vitest";
import { VirtualAccountsService } from "@/banking";

describe("VirtualAccountsService", () => {
  it("asigna cuenta virtual por país", () => {
    const service = new VirtualAccountsService();

    const mx = service.assign({ userId: "corp-a", country: "MX" });
    const br = service.assign({ userId: "corp-a", country: "BR" });
    const ar = service.assign({ userId: "corp-a", country: "AR" });

    expect(mx.clabe).toMatch(/^\d{18}$/);
    expect(br.pixKey?.endsWith("@openthedoorz.pay")).toBe(true);
    expect(ar.cvu).toMatch(/^\d{22}$/);
  });

  it("reutiliza la misma cuenta para usuario+país", () => {
    const service = new VirtualAccountsService();

    const first = service.assign({ userId: "corp-b", country: "MX" });
    const second = service.assign({ userId: "corp-b", country: "MX" });

    expect(second.clabe).toBe(first.clabe);
    expect(service.getByUser("corp-b")).toHaveLength(1);
  });
});
