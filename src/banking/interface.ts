export type VirtualAccountRail = "SPEI" | "PIX" | "CVU";

export type VirtualAccountCountry = "MX" | "BR" | "AR";

export interface VirtualAccount {
  userId: string;
  country: VirtualAccountCountry;
  rails: VirtualAccountRail[];
  clabe?: string;
  pixKey?: string;
  cvu?: string;
  alias: string;
  createdAt: Date;
}

export interface CreateVirtualAccountInput {
  userId: string;
  country: VirtualAccountCountry;
}
