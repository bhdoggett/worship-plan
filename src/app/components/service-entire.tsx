"use client";
import { useParams } from "next/navigation";
import ItemForm from "./forms/ItemForm";
import Header from "./service-items/header";
import Item from "./service-items/item";
import { useState } from "react";
import { useServices } from "../contexts/services-context";

export default function Service({ serviceId }) {
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

  const serviceIdNum = Number(serviceId);

  // if (!allItems.find((contact) => contact.id === idNum)) {
  //   return (
  //     <div>
  //       <h2>No contact matches ID: {id}</h2>
  //       <Link href="/contacts">
  //         <button>Back to Contacts</button>
  //       </Link>
  //     </div>
  //   );
  // }

  const getNextId = () => {
    const itemIds = allItems.map((item) => parseInt(item.itemId));
    return Math.max(...itemIds, 0) + 1;
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
    </div>
  );
}
