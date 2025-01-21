"use client";

import {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import services from "../../data/services.json";
import { Service } from "@/types/Service";
import { Items } from "@/types/ItemType";

type ServicesContextType = {
  allServices: Service[];
  setAllServices: Dispatch<SetStateAction<Service[]>>;
  addService: (service: Service) => void;
};

const ServicesContext = createContext<ServicesContextType | undefined>(
  undefined
);

export const useServices = (): ServicesContextType => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useServices must be used within a ServicesProvider");
  }
  return context;
};

interface ServicesProviderProps {
  children: ReactNode;
}

const ServicesProvider: React.FC<ServicesProviderProps> = ({ children }) => {
  const [allServices, setAllServices] = useState<Service[]>(services);

  const addService = (service: Service): void => {
    setAllServices([...allServices, service]);
  };
  return (
    <ServicesContext.Provider
      value={{ allServices, setAllServices, addService }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
