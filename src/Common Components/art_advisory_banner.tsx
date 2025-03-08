import React from "react";
import { art_advisory_banner } from "../json/art_advisory_banner";

const Art_advisory_banner = () => {
  return (
    <section className="pt-[52px] lg:pt-[60px] w-full">
      {art_advisory_banner.map((iteam) => {
        return (
          <div key={iteam?.id} className="relative video-card max-w-full max-h-screen h-[732px] lg:h-[1024px] w-full overflow-hidden ">
            <div className="w-full h-full bg-black bg-opacity-50">
              <img src={iteam.img_url} alt={iteam.title} className=" w-full object-cover h-full" />
            </div>
            <div
              className="absolute top-1/2 left-1/2 text-white  "
              style={{ transform: " translate(-50%, -50%)" }}
            >
              <div className="flex items-center justify-center flex-col gap-[30px]">
                <h1 className="text-[40px] tracking-[20px] uppercasetext-white text-[24px] text-center tracking-[0.14em] xl:text-[40px] xl:leading-[54px] font-medium uppercase xl:tracking-[0.58em]">
                  {iteam.title}
                </h1>
                <p className="font-medium text-2xl leading-[32px] text-center noto__serif-font text-white">
                  {iteam.des}
                </p>
                <div>
                  <button className="cursor-pointer   common-btn  !font-medium">
                    {iteam.btn_txt}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Art_advisory_banner;
