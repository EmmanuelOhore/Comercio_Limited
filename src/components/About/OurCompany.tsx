import placeholder from "../../assets/placeholder.png";
import CompanyCards from "./companyCards";
const OurCompany = () => {
  const companydata = [
    {
      img: placeholder,
      title: "Server Room/ Datacentre Infrastructre",
      description:
        "One of our projects – we setup the Server room for a client",
    },
    {
      img: placeholder,
      title: "Hardware Repairs and Maintenance",
      description:
        "A short description of the service and how the visitor will benefit from it.",
    },
    {
      img: placeholder,
      title: "Rack Centre for client",
      description: "Our delivered project of a serverv rack for a client",
    },
    {
      img: placeholder,
      title: "Switch Configuration",
      description: "Switch configuration for one of our clients in Lagos",
    },
  ];
  return (
    <section className="p-4 h-[80vh] flex bg-[#E3E8FE] flex-col gap-5 max-laptop:h-[70vh] max-tablet:h-auto max-phoneL:p-2 ">
      <header className="flex flex-col gap-2 w-[90%] mx-auto max-tablet:w-full max-tablet:gap-1">
        <small className="text-base font-medium text-[#122A74] max-tablet:text-sm max-phoneP:text-xs">
          Our Solutions
        </small>
        <h1 className="text-4xl font-bold max-laptop:text-3xl max-tablet:text-2xl max-phoneP:text-xl ">
          Our Company
        </h1>
        <p className="text-base font-normal  w-[80%] mt-8 text-[#9CA7C3] max-laptop:mt-4 max-laptop:text-black/64 max-laptop:w-full max-tablet:mt-2.5 max-tablet:text-sm max-phoneP:text-xs">
          With over two decades of experience and a team of highly skilled
          personnel, we deploy key infrastructure solutions covering various
          spheres of the IT world such as cabling and network essentials,
          network security, network performance, systems management and
          troubleshooting, supply and maintenance of computer systems and
          accessories, software installations, prevention and intrusion software
          and equipment, internet solutions, AutoCAD and New media. Comercio
          aids major businesses and organisational plan, administrate and manage
          their IT needs by servicing their necessary and vital IT support,
          sales and services
        </p>
      </header>
      <article className="flex relative justify-center p-2 ">
        <div className=" flex absolute  justify-between gap-4 w-[95%] max-laptop:w-full  max-tablet:static max-tablet:grid max-tablet:grid-cols-2 max-tablet:gap-2 max-phoneL:grid-cols-1">
          {companydata.map((data) => {
            return <CompanyCards {...data} />;
          })}
        </div>
      </article>
    </section>
  );
};

export default OurCompany;
