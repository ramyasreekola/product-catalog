"use client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Product } from "@/app/types/product";
import { getData } from "../api";

interface ProductContextState {
  products: Product[];
  setProducts: (products: Product[]) => void;
  error: string | null;
  isLoading: boolean;
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext<ProductContextState | undefined>(
  undefined
);

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getData();
        setProducts(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, error, isLoading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
