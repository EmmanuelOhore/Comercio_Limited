import placeholder from "../../assets/placeholder.png";

const CompanyLogosSection = () => {
  const arraydata = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <section className="flex justify-center my-[4rem] py-10">
      <div className=" w-[90%] justify-center flex  items-center flex-col  gap-10 p-4 ">
        <h2 className="text-4xl font-bold text-black/80 ">
          We protect 100+ enterprises and businesses
        </h2>
        <article className="flex justify-between w-[80%]">
          {arraydata.map((_, index) => {
            return (
              <div className="w-[10rem]" key={index}>
                <img
                  src={placeholder}
                  alt="holder"
                  className="w-full  h-full"
                />
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
