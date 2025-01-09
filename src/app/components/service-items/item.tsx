"use client";

const Item = ({ time, title, description, person }) => {
  return (
    <div
      className="flex items-start gap-32
     items-center border"
    >
      <div className="duration text-sm text-gray-600">
        {time.minutes}:{time.seconds}
      </div>
      <div className="title-description flex flex-col">
        <div className="title font-bold text-lg">{title}</div>
        <div className="description whitespace-pre-wrap text-gray-800">
          {description}
        </div>
      </div>
      <div className="person text-sm text-gray-500">{person}</div>
    </div>
  );
};

export default Item;
