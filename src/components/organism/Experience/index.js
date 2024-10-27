import React, { useState, useEffect } from "react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      title: "CV. Indoprima Mandiri Utama",
      date: "October 2021 – October 2021",
      position: "Finance - Internship",
      tasks: [
        "Data entry using Microsoft Excel",
        "Handling document photocopying to support administrative tasks",
        "Organizing documents by priority to make supervision easier and filing them into folders",
      ],
    },
    {
      title: "PT. Aplikanusa Lintasarta (Kopkarla)",
      date: "August 2023 – November 2023",
      position: "Finance - Internship",
      tasks: [
        "Data entry using Odoo ERP and Microsoft Excel",
        "Scanning documents monthly",
        "Managing document filing activities",
      ],
    },
    {
      title: "PT Aigen Global Teknologi",
      date: "Agustus 2024 - October 2024",
      position: "Bootcamp - Fullstack",
      tasks: [
        "Learn the basics of web page structure with HTML, such as creating important elements (headers, paragraphs, lists, links, images, etc.)",
        "Learn how to beautify the appearance of web pages with CSS, including setting colors, layout, size, margins, padding, and animation.",
        "Learn JavaScript frameworks that allow you to build more complex and dynamic web applications.",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [experiences.length]);

  // console.log(activeIndex * 50);

  return (
    <div
      id="experience"
      className="bg-[#EDF7FA] py-5 flex flex-col gap-5 text-sm lg:text-base px-10"
    >
      <div className="lg:text-center lg:w-full lg:px-40">
        <p className="text-lg text-[#21243D] text-center lg:text-[30px] font-semibold">
          Experience
        </p>
      </div>
      {/* <div className="flex justify-center overflow-hidden w-full"> */}
      <div className="flex justify-center w-full">
        <div
          // className="transition-transform duration-1000 ease-in-out flex"
          className="flex overflow-hidden gap-5"
          // style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {experiences.map((experience, index) => (
            <div
              key={index}
              // className="bg-white h-[285px] rounded-md lg:h-auto w-screen inline-block mx-4"
              className="bg-white h-[285px] rounded-md lg:h-auto w-screen transition-transform duration-1000 ease-in-out shadow-lg"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {/* <div className="pl-[19px] py-5 flex flex-col gap-[19px] mx-20"> */}
              <div className="flex flex-col gap-[19px]">
                <h2 className="text-[22px] font-bold text-[#21243D] lg:text-[25px]">
                  {experience.title}
                </h2>
                <div className="flex gap-5">
                  <p>{experience.date}</p>
                  <div className="border border-[#000000]" />
                  <div>{experience.position}</div>
                </div>
                <ul className="list-disc px-5">
                  {experience.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
