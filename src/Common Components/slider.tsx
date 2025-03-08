import Slider from "react-slick";
import React from "react";

// Sample logos (Replace with actual URLs)
const logos = [
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage1.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage6.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage14.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage7.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage12.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage1.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage6.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage14.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage14.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage7.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage12.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage12.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage1.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage6.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage14.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage7.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage12.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage1.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage6.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage14.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage7.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage12.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage1.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage6.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage14.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage14.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage7.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage12.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage12.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage1.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage6.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage14.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage7.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage9.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
  "https://eden-gallery-venture-motions-projects.vercel.app/_next/image?url=%2Fimages%2Fimage12.png&w=96&q=100&dpl=dpl_GbkT5TXDpzwGSGXknELqgpCdjb7J",
];

const InfiniteSlider = () => {
  // Slider settings
  var setting = {
    dots: false, // Disable navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 4000, // Animation speed in milliseconds
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 0, // Continuous scrolling effect
    slidesToShow: 8, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll per transition
    arrows: false, // Hide navigation arrows
    cssEase: 'linear', // Smooth linear transition for seamless effect
    responsive: [
      {
        breakpoint: 1024, // Tablet screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false, // Disable infinite scrolling for better UX
          dots: false, // Keep dots hidden
        },
      },
      {
        breakpoint: 600, // Smaller tablets and large mobile screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small mobile screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // To disable slider at a breakpoint, use:
      // settings: "unslick"
    ],
  };

  return (
    <section className="pt-10 w-full bg-white overflow-hidden">
      {/* Section Title */}
      <h1 className="text-[22px] md:text-4xl leading-7 md:leading-[54px] font-medium tracking-[0.22em] md:tracking-[0.55em] noto__serif-font uppercase text-center !font-medium !text-2xl !leading-[32px] !tracking-[0.2em]">
        In The Press
      </h1>

      <div className="pt-10 pb-20 lg:pb-[112px]">
        {/* Slider Component */}
        <Slider {...setting} className="w-full flex justify-center items-center">
          {/* Render logos dynamically */}
          {logos?.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <div>
                <img
                  src={logo}
                  alt={`Press logo ${index}`}
                  className="w-[45px] h-[45px] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InfiniteSlider;
