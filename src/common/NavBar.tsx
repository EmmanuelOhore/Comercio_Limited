import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/Comercio Logo.png";
import { useState } from "react";
const NavBar = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const navData = [
    { navName: "About", navLink: "/about" },
    { navName: "Services", navLink: "/service" },
    { navName: "Insights", navLink: "/insights" },
  ];
  return (
    <nav className=" sticky top-0  backdrop-blur-sm z-40  flex items-center justify-between py-6 px-[5rem] bg-black/60  flex-wrap  max-laptop:py-5 max-laptop:px-[3rem]  max-tablet:px-[2rem] max-tablet:py-4">
      <div className=" w-[5.5rem] h-[2.5rem] text-center rounded-sm overflow-hidden  max-tablet:w-[4rem] max-tablet:h-[2rem] max-phoneP:w-[3rem] max-phoneP:h-[1.5rem]">
        <Link to="/">
          <img src={logo} alt="logo-placeholder" className="w-full h-full " />
        </Link>
      </div>
      <ul className="flex gap-5 font-semibold max-phoneL:hidden">
        {navData.map((nav, index) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#1b40c6] transition-all duration-300 text-lg"
                  : "text-white hover:text-[#0B2585] transition-all duration-300 text-lg max-tablet:text-sm"
              }
              to={nav.navLink}
              key={index}
            >
              {nav.navName}
            </NavLink>
          );
        })}
      </ul>
      <div className="flex gap-2 max-phoneL:hidden">
        <button className="text-white rounded-md  bg-black py-2 px-4 text-base font-bold max-tablet:text-[13px] max-tablet:py-1.5 max-tablet:px-3 ">
          <i className="fa-solid fa-earth-americas mr-1.5"></i>
          Location
        </button>
        <button
          onClick={() => navigate("/contactus")}
          className="text-lg font-bold rounded-md bg-[#0B2585] text-white    py-2 px-4 max-tablet:text-[13px] max-tablet:py-1.5 max-tablet:px-3 "
        >
          Contact us
        </button>
      </div>
      <i
        onClick={handleNav}
        className="fa-solid fa-bars !hidden max-phoneL:!block  text-white text-2xl max-phoneP:text-xl "
      ></i>
      {isNavOpen && (
        <div className="basis-full flex flex-col items-center gap-4 ">
          <ul className="gap-5 font-semibold hidden max-phoneL:flex max-phoneL:flex-col max-phoneL:items-center max-phoneL:mt-3 ">
            {navData.map((nav, index) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1b40c6] transition-all duration-300 text-lg  max-tablet:text-base max-phoneL:text-sm max-phoneP:text-xs"
                      : "text-white hover:text-[#0B2585] transition-all duration-300 text-lg max-tablet:text-base max-phoneL:text-sm max-phoneP:text-xs"
                  }
                  to={nav.navLink}
                  key={index}
                >
                  {nav.navName}
                </NavLink>
              );
            })}
          </ul>
          <div className="flex gap-2   ">
            <button className="text-white outline rounded-md  py-2 px-4 text-base font-bold max-tablet:text-sm max-phoneP:text-xs max-phoneP:py-1.5 max-phoneP:font-medium ">
              <i className="fa-solid fa-earth-americas mr-1.5 "></i>
              Location
            </button>
            <button
              onClick={() => navigate("/contactus")}
              className="text-lg font-bold rounded-md bg-[#0B2585] text-white    py-2 px-4 max-tablet:text-sm max-phoneP:text-xs max-phoneP:py-2 max-phoneP:font-medium "
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
