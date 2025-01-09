"use client";
import ItemForm from "./ItemForm";
import Header from "./service-items/header";
import Item from "./service-items/item";
import { useState } from "react";
import { useService } from "../contexts/service-context";

export default function Service() {
  const { allItems } = useService();

  const renderComponent = (component) => {
    switch (component.type) {
      case "header":
        return <Header key={component.id} {...component.props} />;
      case "item":
        return <Item key={component.id} {...component.props} />;
      default:
        return null;
    }
  };

  console.log(allItems);
  return (
    <div>
      {allItems.map(renderComponent)}
      <ItemForm />
    </div>
  );
}
