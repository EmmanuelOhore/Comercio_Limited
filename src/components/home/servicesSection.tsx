import ServicesCard from "./servicesCard";

const ServicesSection = () => {
  return (
    <section className=" relative justify-center h-[60vh] z-30  flex p-4 max-tablet:h-auto">
      <div className=" w-[90%] flex top-[-1.5rem]  gap-5 absolute  max-laptop:w-[98%] max-laptop:gap-3 max-tablet:grid max-tablet:grid-cols-2 max-tablet:static max-tablet:w-[90%] max-tablet:gap-4 max-phoneL:grid-cols-1 max-phoneL:w-[95%] max-phoneP:w-[98%]">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </section>
  );
};

export default ServicesSection;
