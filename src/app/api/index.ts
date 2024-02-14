import { API_URL } from "@/app/utils/const";

export const getData = async () => {
    const params = {
      MarketId: "9",
      PriceListId: "19",
      LanguageCode: "en",
      Skip: "0",
      "Where.IncludeFacets": "false",
      Take: "10",
      CategorySlug: "all",
    };
  
    try {
      const url = new URL(`${API_URL}/V1/Retail/Catalog/Category`);
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`Failed to fetch, status: ${response.status}`);
      }
      const data = await response.json();
      return data.displays || [];
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };