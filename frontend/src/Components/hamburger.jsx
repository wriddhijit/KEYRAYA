import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Click } from "./Click";
import { useUser } from "./user";

function Hamburger() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const { user } = useUser();

  Click(node, () => setOpen(false));

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <div
        className={`${
          open
            ? "left-0 bg-black/50 absolute top-22 w-screen h-screen z-20 "
            : " left-0"
        } `}
      ></div>

      <div ref={node} className="absolute left-4 top-3 rounded-full">
        <button
          className={`text-[38px] font-semibold transition-transform duration-500 ${
            open ? "rotate-90" : ""
          }`}
          onClick={toggleMenu}
        >
          {open ? <span className="text-6xl">×</span> : "☰"}
        </button>
      </div>

      <div
        className={`transition-transform duration-700 ${
          open ? "translate-x-0" : "-translate-x-full"
        } absolute z-20 text-xl uppercase font-semibold tracking-wider w-[320px] text-black bg-slate-200 h-screen pl-3 top-22 left-0`}
      >
        { user ? <Link to="/logout">
            <div className="flex items-center mt-16 h-[50px] px-[10px] cursor-pointer hover:bg-slate-300 hover:scale-105   ">
              Log out
            </div>
          </Link> : 
          <Link to="/signuplogin">
            <div className="flex items-center mt-16 h-[50px] px-[10px] cursor-pointer hover:bg-slate-300 hover:scale-105   ">
              Log in/Sign UP
            </div>
          </Link>
        }
        <div className="border-b border-y-zinc-300"></div>
        <Link to="/Account">
          <div className="flex items-center  h-[50px] px-[10px] cursor-pointer hover:bg-slate-300 hover:scale-105">
            My Account
          </div>
        </Link>
        <div className="border-b border-y-zinc-300"></div>
        <Link to="/Inventory_">
          <div className="flex items-center  h-[50px] px-[10px] cursor-pointer hover:bg-slate-300 hover:scale-105">
            Inventory
          </div>
        </Link>
        <div className="border-b border-y-zinc-300"></div>
        {/* <Link to="/">
          <div className="flex items-center  h-[50px] px-[10px]  cursor-pointer hover:bg-slate-300 hover:scale-105">
            Blogs
          </div>
        </Link>
        <div className="border-b border-y-zinc-300"></div> */}
        <Link to="/About_Us">
          <div className="flex items-center  h-[50px] px-[10px] cursor-pointer  hover:bg-slate-300 hover:scale-105">
            About Us
          </div>
        </Link>

        <div className="border-b border-y-zinc-300"></div>
        <Link to="/Privacy_Policy">
          <div className="flex items-center h-[50px] px-[10px] cursor-pointer  hover:bg-slate-300 hover:scale-105">
            Privacy Policy
          </div>
        </Link>
        <div className="border-b border-y-zinc-300"></div>
      </div>
    </>
  );
}

export default Hamburger;
