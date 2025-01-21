"use client";
import { useParams } from "next/navigation";
import ItemForm from "./forms/ItemForm";
import HeaderForm from "./forms/HeaderForm";
import Header from "./service-items/header";
import Item from "./service-items/item";
import { JSXElementConstructor, useState } from "react";
import { useServices } from "../contexts/services-context";
import { Service } from "@/types/Service";

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

  const thisService: Service = allServices.find(
    (service) => service.serviceId === serviceId
  );

  const date = new Date(thisService.date);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

  console.log(formattedDate);

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
      <div className="title mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        <h1 className="">
          {formattedDate} - {thisService.title}
        </h1>
      </div>
      <div className="inline-grid grid-cols-4">
        <div className="border-2 border-slate-500 mx-5 rounded overflow-hidden col-span-3">
          {allItems.map(renderComponent)}
        </div>
        <div className="block mb-3 mr-3">
          <HeaderForm
            getNextId={getNextId}
            allItems={allItems}
            setAllItems={setAllItems}
          />
          <ItemForm
            getNextId={getNextId}
            allItems={allItems}
            setAllItems={setAllItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
