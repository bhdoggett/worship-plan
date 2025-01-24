"use client";
import { useState } from "react";
// import { useServices } from "../../contexts/services-context";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface ItemFormProps {
  getNextId: () => string;
  allItems: [];
  setAllItems: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({
  getNextId,
  allItems,
  setAllItems,
}) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");
  const [person, setPerson] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [citation, setCitation] = useState<string>("");

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      itemId: getNextId(),
      type: "item",
      props: {
        time: {
          minutes: minutes,
          seconds: seconds.length === 2 ? seconds : `0${seconds}`,
        },
        title,
        content,
        person,
        citation,
        link,
      },
    };

    setAllItems([...allItems, newItem]);

    console.log(JSON.stringify(content));
    setTitle("");
    setContent("");
    setMinutes("");
    setSeconds("");
    setPerson("");
  };

  return (
    <div className="service-form border-2 border-slate-500 rounded p-3">
      {/* Header Section */}
      <h1 className="text-2xl font-bold mb-2 text-center">Add Item</h1>

      {/* Form Section */}
      <form onSubmit={addItem} className="flex flex-col space-y-4 items-center">
        {/* Title Field */}
        <div className="w-full">
          <label htmlFor="title" className="font-semibold block">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 rounded w-full p-2"
            required
          />
        </div>

        {/* Content Field (ReactQuill) */}
        <div className="w-full">
          <label htmlFor="content" className="font-semibold block">
            Content:
          </label>
          <ReactQuill
            value={content}
            onChange={(content) => setContent(content)}
            className="border-2 rounded"
          />
        </div>

        {/* Person Field */}
        <div className="w-full">
          <label htmlFor="person" className="font-semibold block">
            Person:
          </label>
          <input
            type="text"
            id="person"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            className="border-2 rounded w-full p-2"
            required
          />
        </div>

        {/* Time Fields */}
        <div className="flex w-full justify-between space-x-4">
          <div className="w-1/2">
            <label htmlFor="minutes" className="font-semibold block">
              Minutes:
            </label>
            <input
              type="text"
              id="minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="border-2 rounded w-full p-2"
              required
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="seconds" className="font-semibold block">
              Seconds:
            </label>
            <input
              type="text"
              id="seconds"
              value={seconds}
              onChange={(e) => {
                setSeconds(e.target.value);
              }}
              className="border-2 rounded w-full p-2"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="citation" className="font-semibold block">
            Citation:
          </label>
          <input
            type="text"
            id="citation"
            value={citation}
            onChange={(e) => setCitation(e.target.value)}
            className="border-2 rounded w-full p-2"
          />
        </div>

        <div className="w-full">
          <label htmlFor="link" className="font-semibold block">
            Link:
          </label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border-2 rounded w-full p-2"
          />
        </div>

        {/* Submit Button */}
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

export default ItemForm;
