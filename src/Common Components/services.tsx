import React from "react";
import { services } from "../json/services";

const Services = () => {
  return (
    <div className="pt-24 w-full md:pt-[106px] pb-24 md:pb-[136px]">
      {services.map((iteam) => {
        return (
          <div  key={iteam?.id} className="max-w-[1200px] mx-auto w-[90%] flex flex-col gap-11">
            <div className="flex w-full justify-center items-center">
              {/* // Services Title */}
              <h1 className="text-[22px] md:text-4xl leading-7 md:leading-[54px] font-medium tracking-[0.22em]  md:tracking-[0.55em] noto__serif-font uppercase text-center !text-xl">
                {iteam.title}
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-11 sm:gap-10">
            {iteam.detailes.map((res)=>{
                return(
                    <div key={res?.id} className="flex flex-col gap-4  items-center  sm:max-w-full lg:max-w-[167px]">
                      {/* Services icon */}
                      <img src={res.img_url} alt={iteam.title} />
                       {/* Services description? */}
                      <p className="italic text-wrap text-center text-base leading-5 tracking-[0.06em] font-normal max-w-[167px] sm:max-w-full">{res.label}</p>
                    </div>
                )
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
