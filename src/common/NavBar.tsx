import { NavLink, Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import logo from "../assets/logo-Placeholder.jpg";
const NavBar = () => {
  const navigate = useNavigate();
  // const [isNavOpen, setIsNavOpen] = useState(false);
  const navData = [
    { navName: "About", navLink: "/about" },
    { navName: "Services", navLink: "/service" },
    { navName: "Insights", navLink: "/insights" },
  ];
  return (
    <nav className=" relative flex items-center justify-between py-6 px-[5rem] bg-black  max-laptop:py-5 max-laptop:px-[3rem]  max-tablet:px-[2rem] max-tablet:py-4">
      <div className=" w-[5rem] h-[2.5rem] text-center rounded-sm overflow-hidden  max-tablet:w-[4rem] max-tablet:h-[2rem]">
        <Link to="/">
          <img
            src={logo}
            alt="logo-placeholder"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <ul className="flex gap-5 font-semibold max-phoneL:hidden">
        {navData.map((nav, index) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#1b40c6] transition-all duration-300 text-lg"
                  : "text-white hover:text-[#0B2585] transition-all duration-300 text-lg max-tablet:text-base"
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
        <button className="text-white  bg-black py-2 px-4 text-base font-bold max-tablet:text-sm">
          <i className="fa-solid fa-earth-americas mr-1.5"></i>
          Location
        </button>
        <button
          onClick={() => navigate("/contactus")}
          className="text-lg font-bold rounded-md bg-[#0B2585] text-white    py-2 px-4 max-tablet:text-sm  "
        >
          Contact us
        </button>
      </div>
      <i className="fa-solid fa-bars !hidden max-phoneL:!block  text-white text-2xl max-phoneP:text-xl "></i>
    </nav>
  );
};

export default NavBar;
