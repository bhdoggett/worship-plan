"use client";
import Link from "next/link";
import { useState } from "react";
import { Service } from "@/types/Service";

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);

  const getServices = () => {
    // fetch function to get id's for the upcoming 5 services, or services in the next month, etc.  Once these services are retreaved, we can get the serviceId's to use for the links to populate the list of services listed
  };
  return (
    <div>
      <h1>My Worship Planning App</h1>
      <Link href={"/services/1"} className="block">
        Service 1
      </Link>
      <Link href={"/services/2"} className="block">
        Service 2
      </Link>
    </div>
  );
}
