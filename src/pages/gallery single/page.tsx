import React, { useEffect, useRef, useState } from "react";
import { gallery_single_data } from "../../json/gallery_single";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Path from "../../Common Components/path";
import SliderTimeline from './sliderTimeline'
import Timeline from "./sliderTimeline";
const page = () => {
 
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1.5, // Show half of the next slide
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderSettings = {
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3.5, // Default for large screens
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // Screens smaller than 1200px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Screens smaller than 992px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Screens smaller than 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Screens smaller than 576px (mobile)
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 420, // Extra small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  const settings2 = {
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1, // Show half of the next slide
    slidesToScroll: 1,
    arrows: false,
  };
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const pathName = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional: makes the scroll smooth
    });
    // console.log("test");
  }, [pathName]);
  // console.log('selectedYear', selectedYear)

  const eventRefs = useRef({});
  const years = gallery_single_data?.section5.map((event) => Number(event?.date?.y)) || [];

  const minYear = Math.min(...years);
  console.log("minYear", minYear);

  const maxYear = Math.max(...years);
  console.log("maxYear", maxYear);

  // Adjust selectedYear if it's not available
  const adjustedYear = years.includes(selectedYear)
    ? selectedYear
    : selectedYear > maxYear
    ? maxYear // If selectedYear is greater than max, set to last year
    : selectedYear < minYear
    ? minYear // If selectedYear is less than min, set to first year
    : selectedYear;
  console.log("adjustedYear", adjustedYear);
  useEffect(() => {
    if (eventRefs.current[adjustedYear]) {
      eventRefs.current[adjustedYear].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedYear, adjustedYear]);

  return (
    <div className="mt-[110px]">
      <section>
        {gallery_single_data.section1.map((prev, i) => {
          return (
            <>
              <div
                key={i}
                className="max-w-[987px] mx-auto my-0 !mt-[50px] p-20 pb-0"
              >
                <h1 className="noto__serif-font text-[24px] leading-[32px] lg:text-[40px] font-medium lg:leading-[54px] uppercase tracking-[0.56em] text-center">
                  {prev.title}
                </h1>
                <p className="mt-4 noto__serif-font text-lg lg:text-2xl font-medium leading-[24px] lg:leading-[32px] italic uppercase text-center">
                  {prev.city[0]},{prev.city[1]}
                </p>
              </div>
              <div className="mt-[40px] lg:mt-[52px]">
                <img src={prev?.img_url} alt="" height={81} width={1443} />
              </div>
              <div className="max-w-[1200px] w-[90%] my-0 mx-auto">
                <div className="hidden md:grid-cols-2 lg:grid-cols-5  md:grid md:mt-[50px] lg:mt-[86px] mb-[48px] md:gap-6 lg:gap-[46px]">
                  {prev?.data.map((iteam, i) => {
                    return (
                      <div key={i} className="flex flex-col gap-4">
                        <h2 className="rund__text-font text-lg font-medium leading-[22px]">
                          {prev.title}
                        </h2>
                        <p className="rund__text-font text-lg font-light leading-6">
                          {iteam?.des}
                        </p>
                      </div>
                    );
                  })}
                  <div className="flex flex-col gap-4">
                    <Link
                      to={prev?.virtual_tour_url}
                      className="rund__text-font text-base font-normal leading-[19px] border-btn-animation hover:!text-current underline"
                    >
                      {prev?.virtual_tour_txt}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4 md:mt-0 pb-[60px]">
                <button className="subscribe_btn">{prev?.btn_txt}</button>
              </div>
            </>
          );
        })}
      </section>
      <section
        style={{ background: "linear-gradient(rgb(241, 241, 242), white)" }}
      >
        <div className="pt-[60px] pb-[41px] lg:pb-[170px]">
          <div className="maganize-container">
            {gallery_single_data.section2.map((iteam) => {
              return (
                <>
                  <div
                    key={iteam?.id}
                    className="noto__serif-font text-center font-medium text-[22px] leading-[29px] lg:text-2xl lg:leading-[32px] tracking-[0.2em] uppercase"
                  >
                    {iteam?.title}
                  </div>
                  <p className="mt-6 text-base leading-[24px]  gallery_overview  lg:mt-[32px] lg:text-[40px] lg:font-light lg:leading-[54px] lg:tracking-[-0.04em] text-left">
                    {iteam?.des}
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-full pb-20">
          <Slider {...settings} className="flex gap-4">
            {gallery_single_data.section2.map((iteam) => {
              return iteam.slider_img.map((img) => {
                return (
                  <img
                    key={img.id}
                    src={img.url}
                    alt=""
                    height={600}
                    width={786}
                    className="h-[350px] lg:max-h-[600px] p lg:h-[600px]"
                  />
                );
              });
            })}
          </Slider>
        </div>
      </section>
      <section>
        <div className="maganize-container">
          <div className="border-t border-b border-solid border-black mt-[41px] lg:mt-[80px]">
            {gallery_single_data.section3.map((res) => {
              return (
                <>
                  <div className="noto__serif-font text-[22px] leading-[29px] lg:text-2xl font-medium lg:leading-[32px] tracking-[0.2em] uppercase text-center pt-[34px] lg:pt-[106px]">
                    {res?.title}
                  </div>
                  <div className="max-w-[828px] mx-auto my-0 grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[80px] mt-[43px] lg:!mt-[80px] !mb-[106px]">
                    {res?.img_section.map((img) => {
                      return (
                        <div key={img?.id}>
                          <a href="">
                            <img
                              src={img?.url}
                              alt=""
                              className="w-full h-[385px]"
                            />
                          </a>
                          <a
                            href=""
                            className="noto__serif-font text-[22px] md:text-2xl block !mt-6 font-medium leading-[32px] uppercase tracking-[0.08em] text-center"
                          >
                            {img?.title}
                          </a>
                          <p className="noto__serif-font text-sm md:text-base font-normal leading-[21px] text-center mt-2">
                            {img?.des}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        {gallery_single_data.section4.map((data) => {
          return (
            <>
              <div className=" !mb-[80px] md:!mb-[112px]">
                <div className="mt-[112px] mb-[80px]">
                  <div className="noto__serif-font text-2xl font-medium leading-[32px] tracking-[0.2em] text-center uppercase">
                    {data?.title}
                  </div>
                </div>
                <div className="w-full pb-20">
                  <Slider {...settings2} className="">
                    {data?.slider.map((iteam) => {
                      return (
                        <>
                          <div key={iteam.id} className="relative w-full">
                            <img
                              src={iteam?.img_url}
                              alt=""
                              height={600}
                              width={1500}
                              className="w-full object-cover  h-[372px] md:max-h-[310px] lg:max-h-[250px]"
                            />
                            <div className="absolute inset-0 flex justify-end bg-opacity-50">
                              <div className="pt-2 px-4 space-x-4">
                                <button className="bg-[#F2F2F3] hover:bg-[#f63d01] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md cursor-pointer">
                                  Artist 1
                                </button>
                                <button className="bg-[#FBC9C9] hover:!bg-[#D61818] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md">
                                  Gallery 1
                                </button>
                                <button className="bg-[#FBDDC9] hover:!bg-[#D61818] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md">
                                  Exhibition
                                </button>
                              </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                              <div className="bg-white mt-2 pt-[22px] md:pt-[24px] pb-[22px] md:pb-[50px] shadow-lg text-center w-[70%] md:w-[50%] lg:w-[35%]">
                                <h2 className="noto__serif-font text-lg md:text-2xl italic font-medium md:leading-[32px] leading-[24px] ">
                                  {iteam?.exibitons_name}
                                </h2>
                                <p className="rund__text-font text-sm md:text-base !font-light leading-[19px] text-center mt-2">
                                  {iteam?.date}
                                </p>
                                <p className="rund__text-font mt-2 text-sm md:text-base !font-light leading-[19px] text-center ">
                                  {iteam?.location}
                                </p>
                                <a className="button_border__bottom__9uMyC mt-2 rund__text-font uppercase !font-normal text-[16px] leading-4 border-b border-black hover:border-transparent-font text-sm md:text-base !font-light leading-[19px] text-center ">
                                  {iteam?.link_txt}
                                </a>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </>
          );
        })}
      </section>

      {/* <section>
        <div className="mt-7 border-t w-full">
          <div className="grid grid-cols-7 mt-[2px]">
          
            {Array.from({ length: 7 }, (_, index) => {
              const year = selectedYear - 3 + index; // Generate years dynamically
              return (
                <div
                  key={year}
                  className={`text-center cursor-pointer transition-all duration-  ${
                    year === selectedYear
                      ? "text-[#D61818] font-bold"
                      : "text-gray-600"
                  }`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year === selectedYear ? (
                    <a className="border-t-4 border-[#D61818] text-[#D61818] px-2">
                      {year}
                    </a>
                  ) : (
                    year
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-5">
          <Slider {...sliderSettings}>
            {gallery_single_data?.section5.map((event) => (
              <div
                key={event.id}
                className=" "
                ref={(el) => (eventRefs.current[event?.date?.y] = el)}
              >
                <div
                  className={`relative w-[350px] h-[350px] shadow-lg transition-all duration-3000 ${
                    selectedYear === Number(event?.date?.y) ? "" : " opacity-80"
                  } 
                  ${adjustedYear == minYear ? "ml-[810px]" :""}
                   ${adjustedYear == maxYear ? "ml-[-470px]" :""}
`}
                >
                
                  <div className="absolute top-0 right-0 2xl:right-[15%] flex justify-end flex-wrap p-4 z-10 space-x-2">
                    <span className="bg-[#F2F2F3] hover:bg-[#D61818] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md cursor-pointer">
                      {event?.artist_btn}
                    </span>
                    <span className="bg-[#FBC9C9] hover:bg-[#D61818] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md">
                      {event?.creative_Gallery}
                    </span>
                    <span className="bg-[#FBDDC9] hover:bg-[#D61818] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md">
                      {event?.opening}
                    </span>
                  </div>

                 
                  <img
                    src={event?.img_url}
                    alt={event.title}
                    className="max-h-[210px] w-full max-w-[400px] max-w-[373px]"
                  />

                 
                  <div className="pt-[22px] md:pt-[24px] pb-[22px] md:pb-[50px] text-center">
                    <h3 className="noto__serif-font text-lg md:text-2xl italic font-medium md:leading-[32px] leading-[24px]">
                      {event?.title}
                    </h3>
                    <p className="rund__text-font text-sm md:text-base font-light leading-[19px] mt-2">
                      {event?.date.d} {event?.date.m} {event?.date.y}{" "}
                      {event?.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>  */}

<section>
  <Timeline eve/>
</section>
       <Path pathname={pathName?.pathname} />
    </div>
  );
};

export default page;
