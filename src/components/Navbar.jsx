import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Alert = (props) => {
  const { title = "Hii this alert!" } = props;
  return Swal.fire({
    title: title,
    showClass: {
      popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
    },
    hideClass: {
      popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
    },
  });
};

const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const location = useLocation();

  const changeIcon = () => {
    setIcon(!icon);
  };

  useEffect(() => {
    const list = document.querySelector("ul");
    if (icon == true) {
      list.classList.add("top-[50px]"), list.classList.add("opacity-100");
    } else {
      list.classList.remove("top-[50px]"), list.classList.remove("opacity-100");
    }
  }, [icon]);

  return (
    <nav className="lg:flex justify-between items-center px-[6%] py-5 lg:py-0 bg-white z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <img src="img/cda.png" alt="cda" className="h-10 mb-2 lg:h-14 lg:mb-4" />
          <h1 className="text-xl md:text-2xl pl-3 lg:text-3xl font-bold border-l-2 border-black text-secondary cursor-pointer">
            Code<span className="text-primary">authentic</span>
          </h1>
        </div>
        <span className="lg:hidden text-2xl mt-3 cursor-pointer">
          <ion-icon
            name={icon == true ? "close-outline" : "menu"}
            onClick={changeIcon}
          ></ion-icon>
        </span>
      </div>
      <ul className="lg:flex lg:items-center z-[5] lg:z-auto lg:static absolute bg-white w-full left-0 px-5 mt-5 lg:w-auto lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 pb-5">
        <Link to={"/"}>
          <li
            className={`${
              location.pathname === "/" ? "text-primary" : " "
            } font-semibold hover:text-primary cursor-pointer mb-2 lg:mb-0 lg:px-4`}
          >
            Home
          </li>
        </Link>
        <Link to={"/products"}>
          <li
            className={`${
              location.pathname === "/products" ? "text-primary" : " "
            } font-semibold hover:text-primary cursor-pointer mb-2 lg:mb-0 lg:px-4`}
          >
            Product
          </li>
        </Link>
        <Link to={"/learns"}>
          <li
            className={`${
              location.pathname === "/learns" ? "text-primary" : " "
            } font-semibold hover:text-primary cursor-pointer mb-2 lg:mb-0 lg:px-4`}
          >
            Learn
          </li>
        </Link>
        <li
          onClick={() => Alert({ title: "Maaf fitur ini belum tersedia :(" })}
          className={`${
            location.pathname === "/contact" ? "text-primary" : " "
          } font-semibold hover:text-primary cursor-pointer mb-2 lg:mb-0 lg:px-4`}
        >
          Contact
        </li>
        <li
          onClick={() => Alert({ title: "Maaf fitur ini belum tersedia :(" })}
          className={`${
            location.pathname === "/blogs" ? "text-primary" : " "
          } font-semibold hover:text-primary cursor-pointer mb-2 lg:mb-0 lg:px-4`}
        >
          Blog's
        </li>
        <li>
          <button className="bg-for mr-2 border border-for px-5 py-2 rounded-lg text-tree font-semibold text-sm hover:scale-105 hover:bg-[#0A2B64]">
            Sign In
          </button>
          <button className="border border-for px-5 py-2 rounded-lg text-primary font-semibold text-sm hover:scale-105 hover:bg-slate-100">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
