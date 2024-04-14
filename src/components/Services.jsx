import { useFetchServices } from "./FetchData";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { loading, services } = useFetchServices();

  if (loading) {
    return (
      <section
        id="services"
        className="align-element py-20 flex flex-col items-center"
      >
        <SectionTitle text="Services" textColor="slate-700" />
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section
      id="services"
      className="align-element py-20 flex flex-col items-center"
    >
      <SectionTitle text="Services" textColor="slate-700" />
      {loading}
      <div className="py-16 grid md:grid-cols-2 xl:grid-cols-2 gap-y-8 gap-x-24">
        {services.map((item) => {
          const { id, image, serviceName } = item;
          return <ServiceCard key={id} img={image} text={serviceName} />;
        })}
      </div>
    </section>
  );
};

export default Services;
