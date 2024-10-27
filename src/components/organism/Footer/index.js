import React from "react";

const Footer = () => {
  return (
    <div className="py-[50px] flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2 pb-5">
        <a href="https://www.linkedin.com/in/adinda-sintawati-402486259/">
          <img src="/image/linkedin.png" alt="" />
        </a>
        <a href="https://github.com/adindasintawati">
          <img className="w-[60px] h-[38px]" src="/image/github.png" alt="" />
        </a>
        <a href="https://www.instagram.com/sintaadnda">
          <img src="/image/instagram.png" alt="" />
        </a>
      </div>
      <div>
        <p className="text-[#21243D] text-sm text-center">
          Copyright ©2024 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
