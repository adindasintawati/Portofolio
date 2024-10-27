import Button from "@/components/atoms/Button";

import avatar from "@/assets/images/avatar.png";

const Introduction = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      id="summary"
      className="flex flex-col items-center gap-[34px] pt-[33px] pb-[58px] px-6 md:px-[130px] md:flex-row md:justify-between md:items-start md:pt-[150px] lg:px-[150px]"
    >
      <div className="order-1 md:order-2 md:w-[40%] md:flex md:justify-end">
        {/* <img
          src={avatar.src}
          className="md:w-full md:h-full lg:w-[80%] lg:h-[80%] xl:w-[50%] xl:h-[50%]"
        /> */}
        <img
          src="/image/foto.png"
          className="rounded-full md:w-full md:h-full lg:w-[80%] lg:h-[80%] xl:w-[50%] xl:h-[50%]"
        />
      </div>
      <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-[21px] text-center md:text-left md:w-[60%] lg:gap-10">
        <h1 className="font-bold w-[70%] text-[32px] leading-[40px] text-[#21243D] lg:text-[44px]">
          Hi, I am Adinda, Frontend Development
        </h1>
        <p className="text-[#21243D] text-justify">
          I’m a graduate of Vocational High School of Accounting in Tangerang
          Selatan and have interest in finance and techlogy development.
          Currently, I’m studying Management at Pamulang University. I have
          internship experience in the finance field, where I gained key skills
          like business communication, office administration, and data
          processing. I’m also interested in frontend development field.
          Currently learning fullstack development in Aigen bootcamp focused on
          web development. Building skills in HTML, CSS, JavaScript, and React
          to create dynamic and responsive web applications. For the next 5
          years i want to be a senior web developer with focusing in frontend
          development as my goal.
        </p>
        {/* <Button>
          <p className="text-white text-xl font-medium">Download Resume</p>
        </Button> */}
      </div>
    </div>
  );
};

export default Introduction;
