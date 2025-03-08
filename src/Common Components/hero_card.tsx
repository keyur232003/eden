import React, { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { hero_section } from "../json/hero_section";
import { IoIosArrowRoundDown } from "react-icons/io";

const Hero_card = () => {
  const [playing, setPlaying] = useState(false);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setPlaying(true);
    setAnimate(true);
  }, []);
  const [padding, setPadding] = useState(0); // Initial padding
  const [buttonPosition, setButtonPosition] = useState({ bottom: 5, left: 6 }); 
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust padding with a max of 40
      const newPadding = Math.min(scrollY / 10, 40); // Set a maximum padding of 40
      setPadding(newPadding);

      // Adjust button's bottom position and left position with linear increase
      const newBottom = Math.min(scrollY / 10, 50); // Linear increase in bottom position based on scroll
      const newLeft = Math.min(15 + scrollY / 20, 40); // Linear increase in left position based on scroll
      setButtonPosition({ bottom: newBottom, left: newLeft });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      {hero_section.map((iteam) => {
        return (
          <div key={iteam.id}  style={{ padding: `${padding}px` }} className="relative max-w-full max-h-screen h-[732px] bg-[#6a7282ad] sm:bg-white lg:h-[1024px] w-full overflow-hidden ">
            {/* Video Player */}
            <img
            src="https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=https%3A%2F%2Fs3-alpha-sig.figma.com%2Fimg%2F8344%2Fc28b%2F5da83c9ae21202cc9bc047da96b2bb03%3FExpires%3D1741564800%26Key-Pair-Id%3DAPKAQ4GOSFWCW27IBOMQ%26Signature%3Dp6BkuZIHrADScjjnM5ghfDLCxU3UV0PHv2J3LuJKMhfbPAHn0W2FmLW97egGkBr~OWGSto4GTQcrz5Czagg0YBiniB4ZuHOL6bq2WqH3Mwm5aiS20F42TJYEKY1uD83NeyzTVtLgLMcEC6wF6jO9yF7HsPPfklslwJ9jk1KGLVqgkeDJCRWTnMA8xPnh-g-Yu814EIsDARaG3VJmtmVBj3bHWQurhdY06cIDo4bvtzcy0lMNYYy~sGEzdamiPKJwIfvmYVFxmv1BZVkkp88Sza0dKWSDA8ZO-sb2uGZYHFpIfhBjaxCvI~uab~uBlFwbBQHeONHUw1d6uHRi9RdO1A__&w=3840&q=75&dpl=dpl_F4UeAMBuKa6b9MDqcDSt9Y2YUvri"
            alt="Mobile Banner"
            className="block sm:hidden  opacity-40 h-full object-cover"
          />

       
            <ReactPlayer
              url={iteam.video_url}
              playing={playing}
              loop // This ensures the video loops when it finishes
              muted
              width="100%"
              height="100%"
              controls={false}
              className="hidden sm:block"
             // Hide default controls
            />
          
            <div className={`absolute ${animate? "animate" : ""}  inset-0 flex  flex-col items-center justify-center`}>
              <div className="flex items-center justify-center flex-col gap-[30px] ">
                <h1 className="text-white text-[24px] text-center tracking-[0.14em] xl:text-[40px] xl:leading-[54px] font-medium uppercase xl:tracking-[0.58em] ">
                  {iteam.title}
                </h1>
                <p className="font-medium text-2xl leading-[32px] text-center  text-white">
                  {iteam.description}
                </p>
                <button className="common-btn cursor-pointer ">{iteam.btn_text}</button>
              </div>
              <div className="absolute bottom-0 left-[47%] transform -translate-x-1/2">
                <a href="#">
                <IoIosArrowRoundDown className="text-white font-light size-10 down-arrow absolute" />
                </a>
              </div>
            </div>
            {/* Play/Pause Button (Always Visible at Bottom-Left) */}
            <button
              className="absolute hidden sm:block  cursor-pointer  bg-opacity-50 text-white p-3 rounded-full"
              style={{
                bottom: `${buttonPosition.bottom}px`,
                left: `${buttonPosition.left}px`,
                // backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                padding: "10px",
              }}
              onClick={() => setPlaying(!playing)} // Toggle play/pause state
            >
              {playing ? <FaPause size={16} /> : <FaPlay size={16} />}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Hero_card;
