import React, { useEffect, useRef, useState } from "react";
import { curator_picks } from "../json/curator_picks.ts";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Curator_picks = () => {
  const [likedCards, setLikedCards] = useState<{ [key: number]: boolean }>({});
  // const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  // const openModal = useBoolean();
  const imageRef = useRef<HTMLImageElement | null>(null);
  //card like handle

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true); // Mark as loaded when the image is visible in viewport
          } else {
            setIsLoaded(false); // Optionally reset when the image leaves the viewport
          }
        });
      },
      { threshold: 0.9 } // Trigger when 80% of the image is visible
    );
    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.disconnect(); // Cleanup observer
      }
    };
  }, []);

  const toggleLike = (cardId: number) => {
    setLikedCards((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId], // Toggle the liked state of this specific card
    }));
  };
  // card initial loader
  // useEffect(() => {
  //   // Set loading to false after 2 seconds
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);

  //   return () => clearTimeout(timer); // Cleanup the timer on unmount
  // }, []);

  return (
    <div className="w-full hide-navbar">
      <div className="flex justify-center items-center my-[69px] lg:my-[36px]">
        <h1 className="noto__serif-font leading-[32.69px] text-center text-[24px] font-medium tracking-[0.2em]">
          {curator_picks.title}
        </h1>
      </div>
      <div className="grid relative gap-4 grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 lg:mb-[80px]">
        {curator_picks.cards.map((iteam) => {
          const isLiked = likedCards[iteam.id] || false; // Default to false if not set
          return (
              <div
                key={iteam?.id}
                className="flex flex-col py-12 px-10 bg-gradient-to-b from-transparent to-[#f1f1f2]"
              >
                {/* Heart Icon Button */}
                <div className="w-full flex justify-end mb-[24px]">
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => toggleLike(iteam.id)}
                  >
                    {isLiked ? <FaHeart /> : <FaRegHeart />}
                  </div>
                </div>
                {/* Card Content */}
                <div className="relative w-full h-full grid flex justify-items-center items-center">
                  <a
                    href=""
                    className="max-w-[162px] sm:max-w-[200px] xl:max-w-[268px] sm:w-full min-h-[211px] max-h-[300px] inline-block flex justify-center items-center place-content-center relative"
                  >
                    {!isLoaded && (
                      <div
                        className={`loader h-[211px] sm:h-[300px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                      >
                        <div className={`spin-loader`}></div>
                      </div>
                    )}
                    {/* <div className="flex justify-center">
                      <div className="w-full  flex justify-center items-center h-full bg-gray-200  loader"></div>
                    </div> */}
                    <img
                      ref={imageRef}
                      src={iteam.img_url}
                      alt={iteam.card_title}
                      className={`object-contain opacity-0 min-w-full max-w-full sm:max-w-full max-h-[211px] sm:max-h-[300px] md:w-auto xl:w-full h-full ${
                        isLoaded
                          ? "opacity-100 transition-opacity duration-1000"
                          : "opacity-0"
                      }`}
                    />
                  </a>
                </div>
                {/* Card Text */}
                <div className="flex mt-8 flex-col gap-[30px]">
                  <div className="w-full text-center flex flex-col justify-center items-center gap-[20px] sm:gap-0">
                    <h6 className="text-sm sm:text-base text-[#000000] text-[20px] italic leading-5 tracking-[0.06em] font-normal noto__serif-font">
                      {iteam.card_title}
                    </h6>
                    <p className="text-[#868686] text-[18px] text-sm sm:text-base !leading-5 font-normal noto__serif-font">
                      {iteam.card_sub_title}
                    </p>
                  </div>
                  {/* Button */}
                  <div className="flex  flex-row gap-4 justify-center items-center">
                    <button
                      className={`button_border__bottom__9uMyC  !font-normal text-[16px] leading-4  border-b border-black 
                    }`}
                      // onClick={() => toggleLike(iteam.id)}
                    >
                      {iteam.btn_text}
                    </button>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Curator_picks;
