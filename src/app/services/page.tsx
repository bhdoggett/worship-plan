import Service from "../components/service-entire";
import ServicesProvider from "../contexts/services-context";

export default function Home() {
  return (
    <div>
      <ServicesProvider>
        <Service />
      </ServiceProvider>
    </div>
  );
}
