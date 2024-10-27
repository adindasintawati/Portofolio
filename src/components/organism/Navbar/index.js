import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Hamburger from "@/components/atoms/Icons/Hamburger";
import Button from "@/components/atoms/Button";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const router = useRouter();

  const navbarItems = [
    {
      text: "Summary",
      href: "#summary",
    },
    {
      text: "Experience",
      href: "#experience",
    },
    {
      text: "Skill",
      href: "#skill",
    },
    {
      text: "Featured works",
      href: "#featured",
    },
    {
      text: "Education",
      href: "#education",
    },
  ];

  const handleOnHamburgerClick = () => setIsNavbarVisible(true);
  const handleOnCloseClick = () => setIsNavbarVisible(false);

  //   useEffect(() => {
  //     console.log("berubah");
  //   }, []);

  return (
    <div className="bg-white flex justify-end p-5 md:px-[60px] md:pt-[27px] shadow-lg sticky top-0 z-50">
      <div
        className="cursor-pointer md:hidden"
        onClick={handleOnHamburgerClick}
      >
        <Hamburger />
      </div>
      <div className="hidden md:flex gap-[33px]">
        {navbarItems.map((item, index) => {
          return (
            <a
              key={index}
              className="font-medium text-xl cursor-pointer"
              href={item.href}
            >
              {item.text}
            </a>
          );
        })}
      </div>
      <div
        className={`fixed inset-x-0 inset-y-0 z-10 bg-black bg-opacity-60 transform transition-all duration-500 ease-in-out ${
          isNavbarVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        } flex flex-col justify-between items-center`}
      >
        <div className="p-5">
          <Button
            className="!h-7 !w-7 !p-0 !rounded-full flex items-center justify-center border border-white !bg-transparent"
            onClick={handleOnCloseClick}
          >
            <span className="text-white">X</span>
          </Button>
        </div>
        <div className="flex flex-col gap-5 text-center">
          {navbarItems.map((item, index) => {
            return (
              <p
                key={index}
                className="font-medium text-xl cursor-pointer text-white"
                onClick={item.onClick}
              >
                {item.text}
              </p>
            );
          })}
        </div>
        <div />
      </div>
    </div>
  );
};

export default Navbar;
