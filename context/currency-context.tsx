import { Currency } from "@/types/types";
import React, { createContext, useContext, useState } from "react";

interface Props {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<Props | undefined>(undefined);

export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error(
      "useCurrencyContext must be used within a CurrencyProvider"
    );
  }
  return context;
};

export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
