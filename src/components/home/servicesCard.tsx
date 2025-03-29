import placeholder from "../../assets/images.png";
const ServicesCard = () => {
  return (
    <article className=" bg-white shadow-[0px_5px_20px_#0B258580] flex rounded-lg flex-col !h-auto  gap-4 p-4 w-[24%] hover:-translate-y-[2rem] origin-top  transition-all duration-300 max-laptop:py-4 max-laptop:px-2 max-tablet:w-full max-tablet:p-4">
      <div className="w-[5rem]">
        <img
          src={placeholder}
          className="w-full h-full"
          alt="placeholdericon"
        />
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-2xl font-semibold text-black max-laptop:text-xl max-phoneP:text-lg">
          Information Systems Protection
        </h2>
        <ul className="flex flex-col gap-1.5 ">
          <li className="text-base font-normal flex text-text-color gap-1.5 max-laptop:font-normal  max-laptop:text-sm max-phoneL:text-xs  max-phoneP:font-normal ">
            <i className="fa-solid fa-square text-[10px] text-text-color  mt-2  max-laptop:text-[8px] max-phoneP:text-[7px] "></i>
            Ensure DNS resolution at the edge for uninterrupted operations
          </li>
          <li className="text-base font-normal flex text-text-color gap-1.5 max-laptop:font-normal  max-laptop:text-sm max-phoneL:text-xs max-phoneP:font-normal">
            <i className="fa-solid fa-square text-[10px] text-text-color  mt-2 max-laptop:text-[8px] max-phoneP:text-[7px]"></i>
            Ensure DNS resolution at the edge for uninterrupted operations
          </li>
        </ul>
      </div>
      <a className="border-b-1 text-large-text self-start  max-laptop:text-sm max-phoneL:text-xs">
        Learn more
      </a>
    </article>
  );
};

export default ServicesCard;
