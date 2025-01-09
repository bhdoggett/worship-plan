"use client";
import { useState } from "react";
import { useService } from "../contexts/service-context";

const ItemForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [person, setPerson] = useState("");
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
    setMinutes(0);
    setSeconds(0);
    setPerson("");
  };

  return (
    <div className="service-form">
      <form onSubmit={addItem}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="person">Person:</label>
        <input
          type="text"
          id="person"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <label htmlFor="minutes">Minutes:</label>
        <input
          type="text"
          id="minutes"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
        <label htmlFor="seconds">Seconds:</label>
        <input
          type="text"
          id="minutes"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ItemForm;
