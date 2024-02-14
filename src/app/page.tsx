import React from "react";
import HomePage from "./components/Home";
import { ProductsProvider } from './context/ProductsContext'; 

const Page: React.FC = () => {
  return (
    <ProductsProvider>
      <HomePage />
    </ProductsProvider>
  );
};

export default Page;