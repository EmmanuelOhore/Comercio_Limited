import ServicesCard from "./servicesCard";

const ServicesSection = () => {
  return (
    <section className=" relative justify-center h-[60vh]  flex p-4">
      <div className=" w-[90%] flex top-[-1.5rem]  gap-5 absolute ">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </section>
  );
};

export default ServicesSection;
