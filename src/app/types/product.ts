export interface ProductList {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  type: string;
  uri: string;
  colorLinks: ColorLink[];
  productVariants: ProductVariant[];
}

export interface ColorLink {
  colorId: string;
  colorName: string;
  displayId: number;
  uri: string;
  retailImage: RetailImage;
  inStock: boolean;
}

export interface RetailImage {
  mediaKey: string;
  source: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: number;
  articleNumber: string;
  bodyfitId: string;
  bodyfitName: string;
  priceGroup: string;
  isAvailableCustomMade: boolean;
  retailImages: RetailImages;
  price: Price;
}

export interface RetailImages {
  thumbnail: RetailImage;
  hover?: RetailImage;
  flatlay?: RetailImage;
  detail?: RetailImage;
  collar?: RetailImage;
  cuff?: RetailImage;
  gallery?: RetailImage[];
}

interface Price {
  priceListId: number;
  price: number;
  formattedPrice: string;
  priceBeforeDiscount: number;
  formattedPriceBeforeDiscount: string;
  discountPercent: number;
  showAsOnSale: boolean;
  showAsNew: boolean;
}
