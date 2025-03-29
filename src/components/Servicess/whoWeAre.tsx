import placeholder from "../../assets/placeholder.png";
import website from "../../assets/icon/website.png";
import ecom from "../../assets/icon/online-store.png";
import cloud from "../../assets/icon/server.png";
import paymet from "../../assets/icon/cashless-payment.png";
import email from "../../assets/icon/letter.png";
import WhoCards from "./whoCards";
const WhoWeAre = () => {
  const whoweareData = [
    {
      img: website,
      header: "Websites",
      text: "We build professional responsive websites optimized for the most popular search engines.",
    },
    {
      img: ecom,
      header: "E-Commerce",
      text: "Increase your sales with an incredible online store, full of features and functionality",
    },
    {
      img: cloud,
      header: "Cloud Hosting",
      text: "Need cloud hosting, we provide excellent hosting services with low latency and high data availability.",
    },
    {
      img: paymet,
      header: "Payment Integration",
      text: "Safe payment integration on your website to guarantee easy and flexible payment online via different gateways",
    },
    {
      img: email,
      header: "Emails",
      text: "You can be rest assured that your emails are readily available via different third party mail clients",
    },
  ];
  return (
    <section className="flex justify-center my-[5rem] max-phoneL:my-[3rem] max-phoneP:my-[2.5rem]">
      <div className="w-[90%] flex flex-col items-center gap-16 max-tablet:w-full max-tablet:px-4 max-phoneL:px-1 max-phoneL:gap-10 max-phoneP:gap-6 ">
        <header className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-bold text-[#202329] max-tablet:text-3xl max-phoneL:text-2xl max-phoneP:text-xl">
            Who we are
          </h2>
          <h3 className="text-lg  font-normal w-[80%] text-center max-laptop:w-full max-tablet:text-[15px] max-phoneL:text-sm max-phoneP:text-xs">
            We have designed and deployed varying Information Technology
            products for use by private organization, and government agencies.
            We have recorded Milestones in our provision of highly qualitative,
            timely delivered, cost-effective and Returned-On-Investment (ROI)
            assured website services globally.
          </h3>
        </header>

        <article className="flex h-[60vh] gap-6 max-tablet:flex-col max-tablet:h-auto ">
          <div className="  w-[55%] max-tablet:w-full max-tablet:h-[15rem] max-phoneL:h-[13rem] max-phoneP:h-[10rem]">
            <img
              src={placeholder}
              alt="placholderimg "
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-6 max-phoneL:grid-cols-2 max-phoneP:grid-cols-1">
            {whoweareData.map((data) => {
              return (
                <WhoCards
                  header={data.header}
                  text={data.text}
                  img={data.img}
                />
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhoWeAre;
