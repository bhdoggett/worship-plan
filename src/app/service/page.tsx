import Service from "../components/service-entire";
import ServiceProvider from "../contexts/service-context";

export default function Home() {
  return (
    <div>
      <ServiceProvider>
        <Service />
      </ServiceProvider>
    </div>
  );
}
