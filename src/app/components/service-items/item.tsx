"use client";
import { DOMPurify } from "dompurify";

interface ItemProps {
  time: { minutes: string; seconds: string };
  title: string;
  content: string;
  person: string;
}

const Item: React.FC<ItemProps> = ({ time, title, content, person }) => {
  return (
    <div className="flex items-start gap-32 items-center max-w-full rounded-none">
      <div className="duration flex flex-col w-20 justify-center text-sm text-gray-600  justify-center items-center">
        {time.minutes}:{time.seconds}
      </div>
      <div className="title-description flex flex-col w-2/3">
        <div className="title font-bold text-lg">{title}</div>
        <div
          className="content whitespace-pre-wrap text-gray-800"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      <div className="person text-sm text-gray-500 w-24">{person}</div>
    </div>
  );
};

export default Item;
