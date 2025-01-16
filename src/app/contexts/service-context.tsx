"use client";

import { useState, createContext, useContext } from "react";

type ServiceContextType = {
  allItems: [];
  setAllItems: () => {};
  getNextId: () => {};
};

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const useService = () => useContext(ServiceContext);

const ServiceProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([
    {
      id: 1,
      type: "header",
      props: { title: "Call to Worship" },
    },
    {
      id: 2,
      type: "item",
      props: {
        time: { minutes: "2", seconds: "30" },
        title: "Psalm 100",
        description: `Shout for joy to the Lord, all the earth.
            Worship the Lord with gladness;
            come before him with joyful songs.
        Know that the Lord is God.
            It is he who made us, and we are his[a];
            we are his people, the sheep of his pasture.

        Enter his gates with thanksgiving
            and his courts with praise;
            give thanks to him and praise his name.
        For the Lord is good and his love endures forever;
            his faithfulness continues through all generations.`,
        person: "Joe Palekas",
      },
    },
  ]);

  const getNextId = () => {
    const itemIds = allItems.map((item) => parseInt(item.id));
    return Math.max(...itemIds, 0) + 1;
  };

  return (
    <ServiceContext.Provider value={{ allItems, setAllItems, getNextId }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
