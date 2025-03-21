import placeholder from "../../assets/images.png";
const arraydata = Array.from({ length: 6 }, (_, i) => i + 1);

const AboutLogos = () => {
  return (
    <section className="flex justify-center  my-[6rem]  py-10">
      <div className=" w-[90%] justify-center flex  items-center flex-col  gap-10 p-4 ">
        <header className="gap-3 flex flex-col">
          <h2 className="text-4xl font-bold text-black/80 w-[70%] ">
            Leading and Value-Driven Companies Trust their Businesses with
            Comercio Limited
          </h2>
          <h3 className="text-base font-light text-black/64">
            This is just a few of our partners
          </h3>
        </header>

        <article className="flex justify-between w-full ">
          {arraydata.map((_, index) => {
            return (
              <div className="w-[10rem] h-[8rem]" key={index}>
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

export default AboutLogos;
