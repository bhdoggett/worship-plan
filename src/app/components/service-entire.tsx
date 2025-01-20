"use client";
import { useParams } from "next/navigation";
import ItemForm from "./forms/ItemForm";
import HeaderForm from "./forms/HeaderForm";
import Header from "./service-items/header";
import Item from "./service-items/item";
import { JSXElementConstructor, useState } from "react";
import { useServices } from "../contexts/services-context";

interface ServiceProps {
  serviceId: string;
}

const Service: React.FC<ServiceProps> = ({ serviceId }) => {
  const context = useServices();

  console.log("service id", serviceId);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { allServices } = context;

  console.log("allservices from service-entire page", allServices);
  const [allItems, setAllItems] = useState(
    allServices.find((service) => service.serviceId === serviceId)?.items
  );

  console.log("allitems for this service", allItems);

  const getNextId = (): string => {
    const itemIds = allItems.map((item) => parseInt(item.itemId));
    return (Math.max(...itemIds, 0) + 1).toString();
  };

  const renderComponent = (component) => {
    switch (component.type) {
      case "header":
        return <Header key={component.itemId} {...component.props} />;
      case "item":
        return <Item key={component.itemId} {...component.props} />;
      default:
        return null;
    }
  };

  console.log(allItems);

  return (
    <div>
      <div className="border-2 border-slate-500 m-5 rounded overflow-hidden">
        {allItems.map(renderComponent)}
      </div>
      <ItemForm
        getNextId={getNextId}
        allItems={allItems}
        setAllItems={setAllItems}
      />
      <HeaderForm
        getNextId={getNextId}
        allItems={allItems}
        setAllItems={setAllItems}
      />
    </div>
  );
};

export default Service;
