import placeholder from "../../assets/placeholder.png";
import WhoCards from "./whoCards";
const WhoWeAre = () => {
  return (
    <section className="flex justify-center my-[5rem]">
      <div className="w-[90%] flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-bold text-[#202329] ">Who we are</h2>
          <h3 className="text-lg text-[#98A6BF] font-normal w-[80%] text-center">
            We have designed and deployed varying Information Technology
            products for use by private organization, and government agencies.
            We have recorded Milestones in our provision of highly qualitative,
            timely delivered, cost-effective and Returned-On-Investment (ROI)
            assured website services globally.
          </h3>
        </header>

        <article className="flex h-[60vh] gap-6">
          <div className="  w-[40%]">
            <img
              src={placeholder}
              alt="placholderimg "
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-6">
            <WhoCards />
            <WhoCards />
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

export default WhoWeAre;
