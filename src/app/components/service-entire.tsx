"use client";
import { useParams } from "next/navigation";
import ItemForm from "./ItemForm";
import Header from "./service-items/header";
import Item from "./service-items/item";
import { useState } from "react";
// import { useService } from "../contexts/service-context";

export default function Service() {
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
  const { serviceId } = useParams();

  const idNum = Number(serviceId);

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
    const itemIds = allItems.map((item) => parseInt(item.id));
    return Math.max(...itemIds, 0) + 1;
  };

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
      <ItemForm
        getNextId={getNextId}
        allItems={allItems}
        setAllItems={setAllItems}
      />
    </div>
  );
}
