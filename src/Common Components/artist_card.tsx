import React from "react";
import ReactPlayer from "react-player";
import { artist_card } from "../json/artist_card";

const ArtistCard = () => {
  return (
    <div className="mt-14 md:mt-[132px] mb-6 md:mb-10 lg:mb-[84px] max-w-[1200px] mx-auto w-[90%]">
      <div>
        {/* Looping through artist_card data */}
        {artist_card.map((iteam) => {
          return (
            <>
              {/* Section Title */}
              <div
                key={iteam.id}
                className="flex w-full justify-center items-center"
              >
                <h1 className="text-[22px] md:text-4xl leading-7 md:leading-[54px] font-medium tracking-[0.22em] md:tracking-[0.55em] noto__serif-font uppercase text-center">
                  {iteam.title}
                </h1>
              </div>
              
              {/* Artist Details Grid */}
              <div className="grid grid-cols-1 p-10 md:grid-cols-2 gap-10 mt-6 sm:mt-10 md:mt-[106px]">
                {iteam.detailes.map((res) => {
                  return (
                    <div key={res.id}>
                      {/* Video Player Section */}
                      <div className="relative max-h-[494px] h-[494px] lg:max-h-[800px] lg:h-[800px]">
                        <ReactPlayer
                          url={res.video_url}
                          playing={true} // Autoplay enabled
                          loop // Ensures the video loops when it finishes
                          muted // Video starts muted
                          width="100%"
                          height="100%"
                          controls={false} // Hide default controls
                          className="w-full h-full object-cover"
                        />
                        {/* Artist Information Overlay */}
                        <div className="absolute top-1/2 left-1/2 bg-white p-12" style={{ transform: "translate(-50%, -50%)" }}>
                          <div className="flex flex-col justify-center items-center w-full">
                            {/* Artist Slogan */}
                            <p className="font-light text-sm w-full text-center leading-5 mb-2 italic">
                              {res.slogen}
                            </p>
                            {/* Artist Name */}
                            <p className="text-2xl lg:text-4xl leading-8 lg:leading-[54px] tracking-[0.04em] font-light lg:font-normal w-full text-center mb-0 lg:mb-6">
                              {res.artist_name}
                            </p>
                            {/* More Details Button */}
                            <a className="button_border__bottom__9uMyC mt-8 lg:mt-6 border-b border-black list-none decoration-0 text-black text-sm font-normal leading-5 underline-none border-bottom-animation cursor-pointer">
                              {res.artist_detailes_btn_txt}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistCard;
