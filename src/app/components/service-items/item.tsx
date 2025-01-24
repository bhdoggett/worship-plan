"use client";
import { DOMPurify } from "dompurify";
import Link from "next/link";

interface ItemProps {
  time: { minutes: string; seconds: string };
  title: string;
  content: string;
  person: string;
  citation: string;
  link: string;
}

const Item: React.FC<ItemProps> = ({
  time,
  title,
  content,
  person,
  link,
  citation,
}) => {
  return (
    <div className="flex items-start gap-8 max-w-full rounded-none border-b border-slate-500 items-center">
      <div className="duration flex flex-col w-20 justify-center text-sm text-gray-600 items-center">
        {time.minutes}:{time.seconds}
      </div>

      <div className="title-description flex flex-col w-2/3">
        <div className="title font-bold text-lg mb-1">{title}</div>
        <div
          className="content whitespace-pre-wrap text-gray-800"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {citation && (
          <div className="italic text-xs">
            <br />
            {citation}
          </div>
        )}
        {link && (
          <div className="text-sm">
            <br />
            <span className="font-semibold italic">Link: </span>
            <Link
              href={link}
              className="text-blue-600 underline hover:text-blue-800 italic"
            >
              {link}
            </Link>
          </div>
        )}
      </div>

      <div className="person text-sm text-gray-500 w-24 text-right">
        {person}
      </div>
    </div>
  );
};

export default Item;
