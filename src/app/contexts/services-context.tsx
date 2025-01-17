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

interface Service {
  serviceId: string;
  date: string;
  title: string;
  items: Items[];
}

interface Items {
  itemId: string;
  type: string;
  props: object;
}

type ServicesContextType = {
  allServices: Service[];
  setAllServices: Dispatch<SetStateAction<Service[]>>;
  addService: (service: Service) => void;
};

const ServicesContext = createContext<ServicesContextType | undefined>(
  undefined
);

export const useServices = () => useContext(ServicesContext);

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
