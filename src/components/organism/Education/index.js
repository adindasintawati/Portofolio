import React from "react";

const Education = () => {
  return (
    <div id="education" className="py-10 px-[18px]">
      <p className="text-[22px] lg:text-[30px] text-[#21243D] pb-5 text-center font-semibold">
        Education
      </p>
      <div className="flex flex-col gap-5 lg:items-center">
        <div className="flex flex-col gap-5">
          <img
            className="rounded-md lg:w-[500px] lg:h-[300px]"
            src="https://static.republika.co.id/uploads/images/inpicture_slide/gedung-smkn-1-kota-tangsel-di-jalan-ciater-serpong_231027183537-821.jpg"
            alt=""
          />
          <h2 className="text-2xl text-[#21243D] font-semibold">
            Vocational High School 1 Tangerang Selatan
          </h2>
          <p className="text-base text-[#21243D]">
            Gg. Waru No.59, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten
            15310
          </p>
          <div className="border-t border-grey-200 pb-5 mx-[18px]]"></div>
        </div>
        <div className="flex flex-col gap-5 lg:items-center">
          <img
            className="rounded-md lg:w-[500px] lg:h-[300px]"
            src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/358/2024/02/29/unpam-viktor3-2401270854.jpeg"
            alt=""
          />
          <h2 className="text-2xl text-[#21243D] font-semibold">
            Pamulang University
          </h2>
          <p className="text-base text-[#21243D]">
            Jl. Suryakencana No.1, Pamulang Bar., Kec. Pamulang, Kota Tangerang
            Selatan, Banten 15417
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
