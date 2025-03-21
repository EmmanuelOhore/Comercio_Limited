import placeholder from "../../assets/images.png";
const ServicesCard = () => {
  return (
    <article className=" bg-white shadow-[0px_5px_20px_#0B258580] flex rounded-lg flex-col !h-auto  gap-4 p-4 w-[24%] hover:-translate-y-[2rem] origin-top  transition-all duration-300">
      <div className="w-[5rem]">
        <img
          src={placeholder}
          className="w-full h-full"
          alt="placeholdericon"
        />
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-2xl font-semibold text-black">
          Information Systems Protection
        </h2>
        <ul className="flex flex-col gap-1.5 ">
          <li className="text-base font-light flex text-black/64 gap-1.5">
            <i className="fa-solid fa-square text-[10px] text-black/30  mt-2"></i>
            Ensure DNS resolution at the edge for uninterrupted operations
          </li>
          <li className="text-base font-light flex text-black/64 gap-1.5">
            <i className="fa-solid fa-square text-[10px] text-black/30  mt-2"></i>
            Ensure DNS resolution at the edge for uninterrupted operations
          </li>
        </ul>
      </div>
      <a className="border-b-1 self-start ">Learn more </a>
    </article>
  );
};

export default ServicesCard;
