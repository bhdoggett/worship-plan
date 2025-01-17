"use client";
import Service from "@/app/components/service-entire";
import ServicesProvider from "@/app/contexts/services-context";
import { useParams } from "next/navigation";

export default function Home() {
  const { serviceId } = useParams();

  return (
    <div>
      <ServicesProvider>
        <Service serviceId={serviceId} />
      </ServicesProvider>
    </div>
  );
}
