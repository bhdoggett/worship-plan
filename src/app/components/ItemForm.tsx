"use client";
import { useState } from "react";
import { useService } from "../contexts/service-context";
import { isNumberObject } from "util/types";

const ItemForm = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");
  const [person, setPerson] = useState<string>("");
  const { allItems, setAllItems, getNextId } = useService();

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      id: getNextId(),
      type: "item",
      props: {
        time: { minutes: minutes, seconds: seconds },
        title: title,
        description: description,
        person: person,
      },
    };

    setAllItems([...allItems, newItem]);

    setTitle("");
    setDescription("");
    setMinutes("");
    setSeconds("");
    setPerson("");
  };

  return (
    <div className="service-form">
      <form onSubmit={addItem}>
        <label htmlFor="title" className="font-semibold">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 rounded m-1"
          required
        />
        <label htmlFor="description" className="font-semibold">
          Description:
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 rounded m-1"
          required
        />
        <label htmlFor="person" className="font-semibold">
          Person:
        </label>
        <input
          type="text"
          id="person"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          className="border-2 rounded m-1"
          required
        />
        <label htmlFor="minutes" className="font-semibold">
          Minutes:
        </label>
        <input
          type="text"
          id="minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="border-2 rounded m-1"
          required
        />
        <label htmlFor="seconds" className="font-semibold">
          Seconds:
        </label>
        <input
          type="text"
          id="minutes"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="border-2 rounded m-1"
          required
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-1 border border-blue-700 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
