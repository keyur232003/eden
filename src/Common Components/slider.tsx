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
  var setting = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
     cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <section className="pt-10 w-full bg-white overflow-hidden">
      <h1 className="text-[22px] md:text-4xl leading-7 md:leading-[54px] font-medium tracking-[0.22em]  md:tracking-[0.55em] noto__serif-font uppercase text-center !font-medium !text-2xl !leading-[32px] !tracking-[0.2em]">
        In The Press
      </h1>
      <div className="pt-10 pb-20 lg:pb-[112px]">
        <Slider {...setting} className=" w-full flex justify-center iteam-center ">
          {/* Duplicate logos to create seamless loop */}
          {logos?.map((logo, index) => (
          <div key={index} className="flex justify-center  items-center">
            <div key={index} className="">
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
