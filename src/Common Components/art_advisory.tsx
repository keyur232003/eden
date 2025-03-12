import React from "react";
import { art_advisory } from "../json/art_advisory";

const ArtAdvisory = () => {
  return (  // ✅ Add return statement
    <>
      <div className="relative h-auto w-full flex flex-col items-center">
           {art_advisory.map((iteam) => (
             <div key={iteam.id} className="relative h-[632px] w-full flex justify-center items-center">
               {/* Background Image with Overlay */}
               <div className="absolute inset-0 bg-black bg-opacity-50">
                 <img src={iteam.img_url} alt={iteam.title} className="w-full h-full object-cover opacity-50" />
               </div>
     
               {/* Content Section */}
               <div className="relative flex flex-col justify-center items-center gap-[30px] z-10  max-w-[600px]">
                 <div className="flex items-center justify-center flex-col gap-[30px] ">
                   <h1 className="text-white text-[24px] md:text-[40px] text-center tracking-[8px] sm:tracking-[20px] xl:text-[40px] xl:leading-[54px] font-medium uppercase xl:tracking-[0.58em]">
                     {iteam.title}
                   </h1>
                 </div>
     
                 {/* Links */}
                  <div className="flex flex-row flex-wrap gap-4 justify-center ">
                  <p className="font-medium text-2xl leading-[32px] text-[24px]  text-center noto__serif-font text-white">{iteam.description}</p>
                 </div> 
     
                 {/* Button */}
                 <div className="text-center">
                   <button className="common-btn cursor-pointer">{iteam.btn_text}</button>
                 </div>
               </div>
             </div>
           ))}
         </div>
    </>
  );
};

export default ArtAdvisory;
