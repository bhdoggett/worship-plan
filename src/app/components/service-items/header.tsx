"use client";

interface HeaderProps {
  title: string;
  description: string | undefined;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="header bg-gray-300 pl-3 py-2 flex items-center w-full">
      <h1 className="text-lg font-bold">{title.toUpperCase()}</h1>
      {description && (
        <span className="text-md text-gray-800 pl-4">{description}</span>
      )}
    </div>
  );
};

export default Header;
