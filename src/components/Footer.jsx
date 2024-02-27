import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-600 w-[100%] lg:h-[100px] flex lg:flex-row flex-col items-center lg:justify-between px-20 text-white md:text-lg text-xs lg:py-0 py-8">
      <div>
      <i class="fa-solid fa-square-phone"></i>&nbsp;
      <span>Toll free <b>1800 200 1234</b></span>
      </div>
      <div><i class="fa-brands fa-facebook"></i>&nbsp;
      <span>www.facebook.com/cripumps</span></div>
      <div><i class="fa-solid fa-globe"></i>&nbsp;
      <span>www.crigroups.com</span></div>
    </div>
  );
};

export default Footer;
