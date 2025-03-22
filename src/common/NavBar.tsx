import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-Placeholder.jpg";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" outline flex items-center justify-between py-6 px-[5rem] bg-black ">
      <div className=" w-[5rem] h-[2.5rem] text-center rounded-sm overflow-hidden">
        <Link to="/">
          <img
            src={logo}
            alt="logo-placeholder"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <ul className="flex gap-5 font-semibold">
        <Link to="/about">
          <li className="text-lg text-white  hover:text-[rgb(112,112,112)] transition-all duration-300 ">
            About Us
          </li>
        </Link>
        <Link to={"/service"}>
          <li className="text-lg text-white  hover:text-[#707070] transition-all duration-300 ">
            Service
          </li>
        </Link>

        <Link to="/insights">
          <li className="text-lg text-white  hover:text-[#707070] transition-all duration-300 ">
            Insights
          </li>
        </Link>
      </ul>
      <div className="flex gap-2">
        <button className="text-white  bg-black py-2 px-4 text-base font-light">
          <i className="fa-solid fa-earth-americas mr-1.5"></i>
          Location
        </button>
        <button
          onClick={() => navigate("/contactus")}
          className="text-lg font-bold rounded-md bg-[#0B2585] text-white   py-2 px-4"
        >
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
