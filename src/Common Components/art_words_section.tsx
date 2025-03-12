import React from "react";
import { iteam_section } from "../json/iteam_section";

const Art_words_section = () => {
  return (
    <div className="relative mt-4 h-auto w-full flex flex-col items-center">
      {iteam_section.map((iteam) => (
        <div key={iteam.id} className="relative h-[632px] w-full flex justify-center items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <img src={iteam.img_url} alt={iteam.title} className="w-full h-full object-cover opacity-50" />
          </div>

          {/* Content Section */}
          <div className="relative flex flex-col justify-center items-center gap-[10px] sm:gap-[30px] z-10  max-w-[600px]">
            <div className="flex items-center justify-center flex-col gap-[30px] ">
              <h1 className="text-white text-[30px] md:text-[40px] text-center tracking-[8px] sm:tracking-[20px] xl:text-[40px] xl:leading-[54px] font-medium uppercase xl:tracking-[0.58em]">
                {iteam.title}
              </h1>
            </div>

            {/* Links */}
            <div className="flex min-w-[700px] max-w-[100px] flex-row flex-wrap gap-2 p-2 sm:gap-4 justify-center ">
              {iteam.description.map((res) => (
                <div key={res.id}>
                  <a href={res.path} className="font-light button_border__bottom__9uMyC  
                  text-[24px] md:text-[40px] border-b border-white leading-[30px] xl:leading-[54px] noto__serif-font text-white">
                    {res.label}
                  </a>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="text-center">
              <button className="common-btn cursor-pointer">{iteam.btn_text}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Art_words_section;
