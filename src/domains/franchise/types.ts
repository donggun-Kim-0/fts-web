export type FranchiseStatus = "PENDING" | "ACTIVE" | "SUSPENDED" | "CLOSED";

export interface Franchise {
  id: string;
  code: string;
  name: string;
  status: FranchiseStatus;
  ownerName?: string;
  openedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface FranchiseSummary {
  totalFranchises: number;
  activeFranchises: number;
  pendingFranchises: number;
}
