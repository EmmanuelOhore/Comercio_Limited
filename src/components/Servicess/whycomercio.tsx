import placeholder from "../../assets/placeholder.png";
import WhoCards from "./whoCards";
const WhyComercio = () => {
  return (
    <section className="flex justify-center my-[5rem]">
      <div className="w-[90%] flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-bold text-[#202329] ">Why Comercio</h2>
          <h3 className="text-base text-[#98A6BF] font-normal">
            The Imaginary great way of serving clients of different classs.
          </h3>
        </header>

        <article className="flex flex-row-reverse h-[60vh] gap-6">
          <div className="  w-[40%]">
            <img
              src={placeholder}
              alt="placholderimg "
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <WhoCards />
            <WhoCards />
            <WhoCards />
            <WhoCards />
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhyComercio;
