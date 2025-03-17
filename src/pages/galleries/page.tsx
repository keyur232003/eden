import React, { useEffect } from "react";
import Navbar from "../../Common Components/navbar";
import { gallery_data } from "../../json/galleryPage";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import Path from "../../Common Components/path";
const Page = () => {
  const pathName = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      // left: 0,
      behavior: "smooth", // Optional: makes the scroll smooth
    });
    // console.log("test");
  }, [pathName]);
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="mt-[105px]  w-[95%] mx-auto my-0">
        {gallery_data.map((iteam) => (
          <div
            key={iteam?.id}
            className=" mt-9 flex flex-col items-center w-full mx-auto my-0"
          >
            {/* Title Section */}
            <div className="flex flex-col items-center">
              <h1 className="noto__serif-font order-1  text-2xl leading-[32px] md:text-[40px] font-medium lg:leading-[54px] tracking-[0.56em] text-center uppercase">
                {iteam?.title}
              </h1>
              <p className="mt-2 md:mt-[56px] max-w-[700px] mb-[40px] md:mb-0 order-3 md:order-2 font-normal leading-[19px] text-center">
                {iteam.des}
              </p>
              {/* Image Section */}
              <div className="max-w-[1250px] order-2 md:order-3 w-full my-0 mx-auto">
                <div className="my-[33px]">
                  <img src={iteam?.img_url} alt="" height={533} width={1285} />
                </div>
              </div>
            </div>
            {/* Links Section */}
            <div className="max-w-[1250px] w-full my-0 mx-auto">
              <div className="border-y border-[black] ">
                <div className="pt-[49px] pb-[33px] max-w-[856px] mx-auto my-0 text-center flex flex-wrap justify-center gap-3">
                  {iteam?.iteam.map((res, index) => (
                    <React.Fragment key={res?.id}>
                      <div className="hidden md:block">
                        <a
                          href={`#${res?.href}`}
                          className="border-btn-animation noto__serif-font text-2xl font-medium leading-[32px] tracking-[0.08em] uppercase button_border__bottom__9uMyC font-medium !text-[24px]"
                        >
                          {res?.iteam_title}
                          <sup>
                            {res?.img_gallery.length > 1
                              ? res?.img_gallery.length
                              : ""}
                          </sup>
                        </a>
                        {index !== iteam?.iteam.length - 1 ? (
                          <span className="text-2xl font-medium leading-[32px] tracking-[0.08em]">
                            /
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="md:hidden w-full">
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<GoArrowUpRight />} // Replace with your desired icon
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography component="span">
                              <div className="text-2xl">
                                {res?.iteam_title}
                                <sup>
                                  {res?.img_gallery.length > 1
                                    ? res?.img_gallery.length
                                    : ""}
                                </sup>
                              </div>
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {res?.img_gallery.map((des) => {
                              return (
                                <>
                                  <div className="flex ">
                                    <h1 className="text-2xl">{des?.title}</h1>
                                  </div>
                                </>
                              );
                            })}
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {/* Sub-items Section */}
              {iteam?.iteam?.map((res) => (
                <div
                  key={res?.id}
                  className="  pt-[37px] md:py-[100px] border-b border-[gray] scroll-mt-[100px]"
                >
                  <h1
                    id={`${res?.href}`}
                    className="scroll-mt-[180px] noto__serif-font text-center text-2xl font-medium leading-[32px] tracking-[0.08em] uppercase"
                  >
                    {res?.iteam_title}
                    <sup>
                      {res?.img_gallery.length > 1
                        ? res?.img_gallery.length
                        : ""}
                    </sup>
                  </h1>
                  <div
                    className={`grid grid-cols-1 
    ${res?.img_gallery.length > 1 ? "sm:grid-cols-2" : ""} 
    ${res?.img_gallery.length > 2 ? "lg:grid-cols-3" : ""} 
    ${res?.img_gallery.length === 2 ? "max-w-[900px] mx-auto my-0" : ""} 
    gap-[1.5rem] lg:gap-[2rem] xl:gap-[4rem] 
    !mt-[40px] md:!mt-[80px]`}
                  >
                    {res?.img_gallery.map((data, index) => (
                      <div key={index} className="scroll-mt-[100px]">
                        <a href={`/galleries/${data?.link}`}>
                          {" "}
                          <img
                            src={data?.img_url}
                            alt=""
                            className="w-full h-[327px] md:h-[385px] object-cover "
                          />
                        </a>
                        <a
                          href=""
                          className="noto__serif-font text-[22px] md:text-2xl block !mt-6 font-medium leading-[32px] uppercase tracking-[0.08em] text-center"
                        >
                          {data?.title}
                        </a>
                        <p className="noto__serif-font text-base font-normal leading-[21px] text-center mt-2  max-w-[380px] mx-auto">
                          {data?.card_description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full py-8 border-t-1 mt-[100px] ">
        <div className="flex flex-row flex-wrap gap-2 max-w-[1200px] w-[90%] mx-auto">
          <div className="text-sm flex items-center text-[#000000] leading-4 font-normal rund__text-font">
            <Link to={"/"} className="flex justify-center items-center gap-2">
              Eden Gallery{" "}
              <svg
                width="7px"
                height="15px"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#000000] stroke-current"
              >
                <path
                  d="M0.540695 7.18198L3.72266 4L0.540675 0.81802"
                  stroke="black"
                  className="text-[#000000] stroke-current"
                ></path>
              </svg>
            </Link>
          </div>
          <a className="capitalize text-sm text-[#000000] leading-4 font-normal rund__text-font">
            {" "}
            {pathName?.pathname?.slice(1)}
          </a>
        </div>
      </div> */}
      <Path pathname={pathName?.pathname} />
    </div>
  );
};

export default Page;
