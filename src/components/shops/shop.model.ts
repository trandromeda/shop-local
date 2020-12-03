export interface IShop {
  id: string;
  name: string;
  tags: string[];
  url?: string;
  instagram?: string;
  desc?: string;
  address?: string;
  neighbourhood?: string;
  hasDelivery?: boolean | "local";
  hasPickup?: boolean;
  hasGiftCards?: boolean;
}
