import React from "react";
import ProductDetailPage from "@/app/components/ProductDetaliPage";
import { ProductsProvider } from "@/app/context/ProductsContext";

const Page: React.FC = () => {
  return (
    <ProductsProvider>
      <ProductDetailPage />
    </ProductsProvider>
  );
};

export default Page;
