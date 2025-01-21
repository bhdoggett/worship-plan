"use client";
import { useState } from "react";
import { useServices } from "../../contexts/services-context";

const HeaderForm = ({ getNextId, allItems, setAllItems }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      itemId: getNextId(),
      type: "header",
      props: {
        title: title,
        description: description,
      },
    };

    setAllItems([...allItems, newItem]);

    setTitle("");
  };

  return (
    <div className="service-form border-2 border-slate-500 rounded mx-3 px-3">
      {/* Header Section */}
      <h1 className="text-2xl font-bold mb-2 text-center p-3">Add Header</h1>

      {/* Form Section */}
      <form
        onSubmit={addItem}
        className="flex flex-col space-y-2 items-center p-3"
      >
        <div className="w-full">
          <label htmlFor="header" className="font-semibold block">
            Header:
          </label>
          <input
            type="text"
            id="header"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 rounded w-full p-2"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="description" className="font-semibold block">
            Description:
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 rounded w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HeaderForm;
