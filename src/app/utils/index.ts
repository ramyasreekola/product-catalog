import { ProductVariant, RetailImage } from "@/app/types/product";
import { API_URL } from "@/app/utils/const";

export const imageData = (variant: ProductVariant) =>
  variant.retailImages.thumbnail;

export const galleryImageData = (variant: ProductVariant) =>
  variant.retailImages.gallery;

export const formatImageUrl = (imageData: RetailImage | null, uri: string) => {
  return imageData
    ? `${API_URL}/v1/retail/image/1080/${imageData.source}/${imageData.mediaKey}/${uri}.webp`
    : "";
};
