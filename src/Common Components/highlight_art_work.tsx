import React from "react";
import { highlight_art_work } from "../json/highlight_art_work";

const Highlight_art_work = () => {
  return (
    // Section container with gradient background
    <section className="bg-gradient-to-b w-full from-transparent to-[#f1f1f2]">
      <div className="max-w-[1200px] mx-auto w-[90%] py-10 md:py-20">
        {/* Mapping through highlight_art_work data */}
        {highlight_art_work.map((item) => {
          return (
            <div key={item?.id} className="flex flex-col justify-center items-center gap-10 md:gap-12">
              {/* Title, description, and button section */}
              <div className="w-full flex flex-col gap-3 sm:gap-6 justify-center items-center">
                <h1 className="text-[22px] md:text-4xl leading-7 md:leading-[54px] font-medium tracking-[0.22em] md:tracking-[0.55em] noto__serif-font uppercase text-center">
                  {item.title}
                </h1>
                <p className="w-full text-center font-normal leading-5 text-base text-black rund__text-font">
                  {item.des}
                </p>
                <a
                  href=""
                  className="w-max button_border__bottom__9uMyC text-center font-normal leading-5 text-sm transition-all duration-500 md:text-base hover:text-[#ec3a01] border-bottom-animation border-b border-black hover:border-none"
                >
                  {item.header_btn_txt}
                </a>
              </div>
              
              {/* Image section */}
              <div className="flex justify-center items-center w-full">
                <img src={item.img_url} alt={item.title} className="object-cover" />
              </div>
              
              {/* Label and button section */}
              <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6">
                <p className="italic w-full text-center font-normal leading-5 text-sm md:text-base text-black rund__text-font">
                  {item.label}
                </p>
                <a
                  href=""
                  className="button_border__bottom__9uMyC w-max text-center cursor-pointer font-normal border-b border-black transition-all duration-500 border-bottom-animation leading-5 text-sm md:text-base rund__text-font"
                >
                  {item.btn_text}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Highlight_art_work;