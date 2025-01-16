"use client";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header text-lg font-bold bg-gray-300">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
