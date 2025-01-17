"use client";

interface ItemProps {
  time: string;
  title: string;
  description: string;
  person: string;
}

const Item: React.FC<ItemProps> = ({ time, title, description, person }) => {
  return (
    <div className="flex items-start gap-32 items-center max-w-full rounded-none">
      <div className="duration flex flex-col w-20 justify-center text-sm text-gray-600  justify-center items-center">
        {time.minutes}:{time.seconds}
      </div>
      <div className="title-description flex flex-col w-96">
        <div className="title font-bold text-lg">{title}</div>
        <div className="description whitespace-pre-wrap text-gray-800">
          {description}
        </div>
      </div>
      <div className="person text-sm text-gray-500 w-10">{person}</div>
    </div>
  );
};

export default Item;
