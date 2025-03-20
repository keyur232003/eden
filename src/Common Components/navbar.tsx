import React, { useEffect, useState } from "react";
import { navbar_data } from "../json/navbar";
import { FaRegHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, Links, Outlet, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nav_hide, setNav_hide] = useState(true);
  const location = useLocation();

  // scroll Hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".fixed-navbar") as HTMLElement; // Cast to HTMLElement
      if (navbar) {
        // Check if navbar is not null
        if (window.scrollY > 400) {
          setNav_hide(false); // Hide the navbar by moving it above the screen
        } else {
          setNav_hide(true); // Show the navbar when the scroll is above 800px
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // mobile navbar open then background scroll off
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [menuOpen]);

  const navTextColor = location.pathname === "/";

  return (
    <>
      {navbar_data?.map((iteam, idx) => {
        return (
          <div
            key={idx}
            className={`flex ${
              navTextColor ? "fixed-navbar" : "fixed top-0 "
            } ${
              nav_hide ? "block" : "hidden"
            } flex-col w-full justify-center  text-${
              navTextColor ? "white" : "black"
            } justify-center  items-center z-[99999] ${
              navTextColor ? "" : " bg-white "
            }   pt-5 px-8 w-[95%] lg:w-full bg-tr p-2`}
          >
            {/* Navbar Header */}
            <div className="flex max-w-[1332px] justify-between xl:justify-center items-center w-full">
              {/* Hamburger Icon */}
              <button
                className={`xl:hidden text-[20px] cursor-pointer text-${
                  navTextColor ? "white" : "black"
                } text-2xl`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>

              {/* Navbar Title */}
              <Link to={iteam?.path} className="text-[20px] cursor-pointer">{iteam?.title}</Link>
              <div
                className={`xl:hidden text-${
                  navTextColor ? "white" : "black"
                } text-2xl`}
              >
                <a href="">
                  <FaRegHeart className="size-6" />
                </a>
              </div>
              {/* Search Button (Hidden on Mobile) */}
            </div>

            {/* Desktop Navbar Menu */}
            <div className="hidden max-w-[1332px] xl:flex w-full justify-between items-end gap-20 pt-[10px]">
              <div className="hover:underline">
                <button className="flex items-center gap-2 cursor-pointer ">
                  <FaSearch />
                  <span className="">Search</span>
                </button>
              </div>
              <div className="w-full">
                <ul className="flex justify-between w-full items-end gap-10">
                  {iteam?.navbar_item.map((res) => {
                    const isActive = location?.pathname === res?.path;
                   
                    return (
                      <li key={res?.id}>
                        <Link
                          to={res?.path}
                          style={{
                            color: isActive ? "#d61818" : "",
                            textDecoration: isActive ? "underline" : "none",
                            textDecorationColor: isActive ? "#d61818" : "transparent",
                            textUnderlineOffset: "4px", // Adjust the gap between text and underline
                          }}
                          className={`cursor-pointer button_border__bottom__9uMyC `}
                        >
                          {res?.label}
                        </Link>
                      </li>
                    );
                  })}
                  <button
                    className={`button_background__white__3rYfs ${
                      navTextColor ? "!bg-white" : "!bg-black !text-white"
                    }  hover:bg-[#080605] hover:text-white transition-all ease-in-out duration-500`}
                  >
                    {iteam.btn_text}
                  </button>
                  <a href="">
                    <FaRegHeart className="size-6" />
                  </a>
                </ul>
              </div>
            </div>

            {/* Mobile Menu - Sliding from Left */}
            <div
              className={` fixed top-0 left-0 h-full w-full overflow-auto bg-black text-white shadow-md transition-transform transform ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
              } xl:hidden z-50`}
            >
              <div className="p-5 flex flex-col items-center gap-5 w-full">
                {/* Close Button */}
                <button
                  className={`text-white cursor-pointer text-2xl self-end`}
                  onClick={() => setMenuOpen(false)}
                >
                  {/* <FaTimes /> */}
                  <IoClose />
                </button>
                {/* Menu Items */}
                <div className="flex justify-between p-5 items-center">
                  <Link
                    to={iteam?.path}
                    className="text-center w-full noto__serif-font text-[22px] text-white font-semibold"
                  >
                    {iteam?.title}
                  </Link>
                </div>
                <div className="font-normal text-2xl leading-5 noto__serif-font mb-2 text-white">
                  <Link
                    to={iteam?.path}
                    className=" font-normal text-2xl leading-5 noto__serif-font text-white"
                  >
                    Search
                  </Link>
                </div>
                <div className="font-normal text-2xl leading-5 noto__serif-font mb-2 text-white">
                  <Link
                    to={iteam?.path}
                    className=" font-normal text-2xl leading-5 noto__serif-font text-white"
                  >
                    Saved
                  </Link>
                </div>
                <hr className="my-5 text-white w-full"></hr>
                <ul className="flex flex-col items-center gap-3">
                  {iteam?.navbar_item.map((res) => (
                    <li key={res.id}>
                      <Link
                        to={res?.path}
                        className="cursor-pointer font-normal text-2xl leading-6 noto__serif-font text-white"
                        onClick={() => setMenuOpen(false)} // Close menu on click
                      >
                        {res?.label}
                      </Link>
                    </li>
                  ))}
                  <button className="common-btn cursor-pointer hover:bg-[#080605] hover:text-white transition-all ease-in-out duration-500">
                    {iteam.btn_text}
                  </button>
                </ul>
                {/* Button & Heart Icon */}
              </div>
            </div>
          </div>
        );
      })}
      <Outlet />
    </>
  );
};

export default Navbar;
