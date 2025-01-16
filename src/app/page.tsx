import Header from "./components/service-items/header";
import Item from "./components/service-items/item";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My Worship Planning App</h1>
      <Link href={"/service"}>Service</Link>
    </div>
  );
}
