import React from "react";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { menu } from "../../utils/constant";

const Navbar = () => {
  return (
    <div className="flex justify-around p-[16px] shadow-[0px_1px_3px_-2px_rgba(0,0,0)] ">
      {/* <h1 className='text-[5rem] text-red-600 capitalize bg-black'>hello world</h1> */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="" />
        <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center  list-none cursor-pointer gap-[50px] text-[#626262] text-[20px] font-medium ">
        {menu?.map((element, index) => {
          return (
            <li key={index} className="capitalize text-center">
              {element?.item}
              <hr className="w-[120%] h-[5px] rounded-[10px] bg-[#ff4141] " />
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-[45px] relative">
        <button
          className="w-[125px] h-[3.5rem] border-solid border-2 border-[#7a7a7a] rounded-[75px]
         text-[#515151] text-[20px] font-medium bg-white cursor-pointer"
        >
          Login
        </button>
        <img src={cart_icon} alt="" />
        <div
          className=" absolute flex w-[22px] h-[22px] justify-center items-center 
        rounded-full text-[14px] bg-red-500 text-white top-2 -right-2"
        >
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
