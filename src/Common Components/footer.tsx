import React from "react";
import {
  footer,
  footer_iteam1,
  footer_iteam2,
  footer_iteam3,
  footer_iteam4,
} from "../json/footer";
import { TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black md:p-[24px] lg:p-0 w-full text-white">
      <div className="footer_container">
        <div className="flex flex-col md:flex-row pt-[60px] justify-between gap-10 xl:gap-0 w-full ">
          {footer.map((iteam) => {
            return (
              <div
                key={iteam.id}
                className="flex flex-col gap-5 md:gap-6 w-full xl:w-max  border-b-[0.5px] border-opacity-50 md:border-none border-[#FFFFFF] pb-6 md:pb-0 px-6 md:px-0"
              >
                <h1 className="text-white  text-[22px] md:text-2xl leading-7 md:leading-8 text-center md:text-left font-medium tracking-widest">
                  {iteam.label}
                </h1>
                <p className="text-base leading-5 font-normal text-white  text-center md:text-left  max-w-full md:max-w-[450px] rund__text-font">
                  {iteam.des}
                </p>
                <div className="flex md:hidden justify-center  items-center font-medium w-full mt-1 rund__text-font">
                  <button className="button_border__APW1D !px-5 !sm:px-14  hover:!bg-white hover:!text-black cursor-pointer">
                    {iteam?.res_btn_txt}
                  </button>
                </div>
              </div>
            );
          })}
          {/* mobile menu Accordion */}
          <div className=" md:hidden flex flex-col gap-4">
            <Accordion
              sx={{
                backgroundColor: "black", // Set background color
                color: "white", // Set text color
                // borderBottom: "px solid white", // Default border bottom white
                "&.Mui-expanded": {
                  borderBottom: "none", // Remove border-bottom when open
                },
                "& .MuiAccordionSummary-root": {
                  borderBottom: "1px solid white", // Border bottom for summary
                },
                "& .MuiAccordionSummary-root.Mui-expanded": {
                  borderBottom: "none", // Remove border-bottom when expanded
                },
                "& .MuiTypography-root": {
                  color: "white", // Ensure text inside Typography is white
                },
                "& .MuiSvgIcon-root": {
                  color: "white", // Set expand icon color to white
                },
                "& .MuiAccordionDetails-root": {
                  borderBottom: "1px solid white", // Add border-bottom to details
                  paddingBottom: "10px", // Optional: Adjust padding
                },
                "& .MuiButtonBase-root ": {
                  margin: " 0px",
                  padding: "0px", // Optional: Adjust padding
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" className=" ">
                  EDEN Gallery
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {footer_iteam1.map((iteam) => {
                  return (
                    <ul
                      key={iteam?.id}
                      className="list-none flex flex-col gap-4 rund__text-font"
                    >
                      {iteam.data.map((res) => {
                        return (
                          <>
                            <li className="text-[#FFFFFF] cursor-pointer border-b w-max text-sm  leading-4 font-medium footer__link-animation">
                              <Link to="#">{res}</Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "black", // Set background color
                color: "white", // Set text color
                // borderBottom: "1px solid white", // Default border bottom white
                "&.Mui-expanded": {
                  borderBottom: "none", // Remove border-bottom when open
                },
                "& .MuiAccordionSummary-root": {
                  borderBottom: "1px solid white", // Border bottom for summary
                },
                "& .MuiAccordionSummary-root.Mui-expanded": {
                  borderBottom: "none", // Remove border-bottom when expanded
                },
                "& .MuiTypography-root": {
                  color: "white", // Ensure text inside Typography is white
                },
                "& .MuiSvgIcon-root": {
                  color: "white", // Set expand icon color to white
                },
                "& .MuiAccordionDetails-root": {
                  borderBottom: "1px solid white", // Add border-bottom to details
                  paddingBottom: "10px", // Optional: Adjust padding
                },
                "& .MuiButtonBase-root ": {
                  margin: " 0px",
                  padding: "0px", // Optional: Adjust padding
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">Social Media</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {footer_iteam2.map((iteam) => {
                  return (
                    <ul
                      key={iteam?.id}
                      className="list-none flex flex-col gap-4 rund__text-font"
                    >
                      {iteam.data.map((res) => {
                        return (
                          <>
                            <li className="text-[#FFFFFF] cursor-pointer border-b w-max text-sm  leading-4 font-medium footer__link-animation">
                              <Link to="#">{res}</Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "black", // Set background color
                color: "white", // Set text color
                // borderBottom: "1px solid white", // Default border bottom white
                "&.Mui-expanded": {
                  borderBottom: "none", // Remove border-bottom when open
                },
                "& .MuiAccordionSummary-root": {
                  borderBottom: "1px solid white", // Border bottom for summary
                },
                "& .MuiAccordionSummary-root.Mui-expanded": {
                  borderBottom: "none", // Remove border-bottom when expanded
                },
                "& .MuiTypography-root": {
                  color: "white", // Ensure text inside Typography is white
                },
                "& .MuiSvgIcon-root": {
                  color: "white", // Set expand icon color to white
                },
                "& .MuiAccordionDetails-root": {
                  borderBottom: "1px solid white", // Add border-bottom to details
                  paddingBottom: "10px", // Optional: Adjust padding
                },
                "& .MuiButtonBase-root ": {
                  margin: " 0px",
                  padding: "0px", // Optional: Adjust padding
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span">Locations</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {footer_iteam3.map((iteam) => {
                  return (
                    <ul
                      key={iteam?.id}
                      className="list-none flex flex-col gap-4 rund__text-font"
                    >
                      {iteam.data.map((res) => {
                        return (
                          <>
                            <li className="text-[#FFFFFF] cursor-pointer border-b w-max text-sm  leading-4 font-medium footer__link-animation">
                              <Link to="#">{res}</Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </div>

          {/* user Form  */}
          <div className="hidden md:flex  flex-col gap-10 lg:gap-[72px] max-w-[650px] xl:max-w-full xl:w-[595px] w-full">
            <form>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 xl:gap-x-24 gap-y-8 pl-6 pr-10 md:pl-0 md:pr-0">
                  <TextField
                    id="standard-basic"
                    label="First Name *"
                    variant="standard"
                    className="text-white w-[]"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "white", // Label remains white when input is focused
                      },
                      "& .Mui-focused .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .Mui-focused .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "white  !important",
                      },
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name *"
                    variant="standard"
                    className="text-white w-[]"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "white", // Label remains white when input is focused
                      },
                      "& .Mui-focused .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .Mui-focused .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "white  !important",
                      },
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Phone *"
                    variant="standard"
                    className="text-white w-[]"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "white", // Label remains white when input is focused
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .Mui-focused .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .Mui-focused .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "white  !important",
                      },
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Email *"
                    variant="standard"
                    className="text-white w-[]"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "white", // Label remains white when input is focused
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .Mui-focused .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .Mui-focused .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "&:hover .MuiInput-underline:before": {
                        borderBottomColor: "white !important",
                      },
                    }}
                  />
                </div>
                <div className="flex flex-col lg:flex-row w-full mt-[47px] justify-between gap-10 lg:gap-0  ">
                  <div className="flex flex-row justify-start items-start gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="custom-checkbox hook-form_input__4skZs !w-[16px] !h-[16px] !rounded-[2px] !bg-white "
                    />
                    <div className="flex flex-col justify-center items-start max-w-[286px]">
                      <p className="text-sm leading-4 font-normal text-[#FFFFFF] rund__text-font">
                        Sign Up For Updates
                      </p>
                      <p className="text-xs leading-4 font-light text-[#FFFFFF] mt-2 rund__text-font">
                        By signing up you agree to our privacy policy. You can
                        unsubscribe or change your preferences at any time by
                        clicking the link in any emails.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-max">
                    <button
                      className="button_border__APW1D w-full cursor-pointer rund__text-font hover:!bg-white hover:!text-black transition-all ease duration-500"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* footer detailes  */}
        <div className="pt-9 md:pt-[52px] pb-7  flex flex-col gap-9 w-full">
          <div className="flex flex-col md:grid grid-cols-3 gap-y-0 md:gap-y-10  lg:gap-y-0 lg:grid-cols-5">
            <a href="">
              <svg
                width="53px"
                height="64px"
                viewBox="0 0 54 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block"
              >
                <path
                  d="M51.5848 30.1467H53.5664C53.4007 33.7313 53.2349 37.2789 53.0692 40.8659H14.9145V38.9219C15.3375 38.9219 15.7556 38.949 16.1688 38.917C17.1756 38.8355 18.1973 38.8084 19.1795 38.6036C20.3373 38.3643 20.7652 37.7303 20.7677 36.556C20.7727 31.775 20.7727 26.9964 20.7727 22.2178C20.7727 22.0722 20.7553 21.9291 20.7405 21.6849C20.5228 21.7762 20.3447 21.8378 20.1789 21.9217C16.9307 23.5524 14.7908 26.1798 13.3955 29.4658C12.2576 32.1475 11.7158 34.9623 11.5179 37.8586C11.2705 41.4925 11.4412 45.0919 12.3145 48.6394C12.9948 51.3975 14.0981 53.9583 15.9882 56.1317C18.1306 58.5963 20.8617 60.0123 24.053 60.5427C26.5615 60.9597 29.0898 60.9375 31.5835 60.4391C33.1272 60.1308 34.5596 59.4869 35.8237 58.5173C36.6104 57.9129 37.0335 57.1753 37.026 56.1243C37.0112 53.4254 37.0755 50.7241 37.1374 48.0251C37.1497 47.4651 36.9395 47.0827 36.5238 46.7571C35.4972 45.9529 34.3147 45.531 33.0431 45.3238C32.6077 45.2522 32.1698 45.2177 31.6454 45.156C31.6454 44.6552 31.6181 44.1322 31.6701 43.6141C31.68 43.5179 32.0016 43.3872 32.1797 43.3847C33.8743 43.3674 35.5714 43.3748 37.2685 43.3748C39.0002 43.3748 40.7344 43.3748 42.4661 43.3748H43.1835V44.0237C43.1835 49.3919 43.1786 54.7601 43.1934 60.1283C43.1934 60.5674 43.0821 60.8067 42.6591 61.0041C39.6508 62.4029 36.4991 63.2762 33.2163 63.7548C30.7968 64.1051 28.3699 64.1668 25.9455 64.0558C20.8098 63.8189 15.8694 62.7754 11.409 60.0888C5.71415 56.6547 2.28041 51.6072 1.04594 45.1141C-0.275111 38.162 1.13253 31.7503 5.27875 26.0071C8.43295 21.6405 12.7919 19.0032 17.9747 17.6563C18.42 17.5403 18.8678 17.4367 19.318 17.3405C19.7683 17.2443 20.221 17.1653 20.738 17.0666C20.7479 16.8866 20.7677 16.6917 20.7677 16.4968C20.7677 12.5076 20.7677 8.51846 20.7628 4.5293C20.7628 3.29087 20.3397 2.67411 19.1251 2.41261C18.2345 2.22018 17.3043 2.18565 16.3914 2.11164C15.9164 2.07463 15.439 2.10423 14.917 2.10423V0.115825H15.481C27.7985 0.115825 40.1134 0.120759 52.4284 0.105957C52.9504 0.105957 53.1112 0.239176 53.131 0.77205C53.2522 3.92735 53.413 7.08266 53.559 10.238C53.5689 10.4353 53.559 10.6352 53.559 10.872H51.5477C51.3473 10.0677 51.1618 9.23389 50.9317 8.41238C50.573 7.132 50.1228 5.90343 49.0837 4.9709C47.9655 3.96683 46.6148 3.55977 45.175 3.5351C40.9001 3.46356 36.6228 3.45862 32.3479 3.43149C32.2589 3.43149 32.1698 3.45122 32.0387 3.46602V17.1851C32.5656 17.3232 33.1198 17.4416 33.6566 17.6168C35.3859 18.1793 37.1027 18.7837 38.8369 19.3264C40.4227 19.8223 41.2366 19.2549 41.4296 17.5971C41.4642 17.3059 41.5236 17.0198 41.5755 16.6966H42.7407C43.1316 21.9069 43.52 27.1172 43.9158 32.4164C43.4037 32.4164 42.8966 32.4509 42.3968 32.3942C42.2534 32.3794 42.0851 32.1253 42.0208 31.9476C41.432 30.3293 40.9125 28.6863 40.2817 27.0852C38.8518 23.4562 35.9771 21.5887 32.3108 20.7277C32.2416 20.7104 32.1673 20.7277 32.0437 20.7277V37.5675C32.1921 37.5798 32.3504 37.607 32.5087 37.607C36.0662 37.607 39.6236 37.6193 43.1811 37.5897C44.2275 37.5798 45.2839 37.5157 46.3155 37.3479C48.4974 36.9951 49.9298 35.7049 50.6027 33.6129C50.9664 32.483 51.2484 31.3284 51.5774 30.1467"
                  fill="white"
                  className="hidden md:block"
                ></path>
              </svg>
            </a>
            <div className="hidden md:flex md:flex-col">
              {footer_iteam1.map((iteam) => {
                return (
                  <>
                    <h1
                      key={iteam.id}
                      className="text-[#FFFFFF] mb-6 text-sm  leading-5 font-medium"
                    >
                      {iteam.title}
                    </h1>
                    <ul className="list-none flex flex-col gap-4 rund__text-font">
                      {iteam.data.map((res) => {
                        return (
                          <>
                            <li className="text-[#FFFFFF] border-b w-max text-sm  leading-4 font-medium footer__link-animation">
                              <Link to={iteam?.path}>{res}</Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="hidden md:flex md:flex-col">
              {" "}
              {footer_iteam2.map((iteam) => {
                return (
                  <>
                    <h1
                      key={iteam.id}
                      className="text-[#FFFFFF] mb-6 text-sm  leading-5 font-medium"
                    >
                      {iteam.title}
                    </h1>
                    <ul className="list-none flex flex-col gap-4 rund__text-font">
                      {iteam.data.map((res) => {
                        return (
                          <>
                            <li className="text-[#FFFFFF] border-b w-max text-sm  leading-4 font-medium footer__link-animation">
                              <Link to={iteam?.path}>{res}</Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="hidden md:flex md:flex-col">
              {footer_iteam3.map((iteam) => {
                return (
                  <>
                    <h1
                      key={iteam.id}
                      className="text-[#FFFFFF] mb-6 text-sm  leading-5 font-medium"
                    >
                      {iteam.title}
                    </h1>
                    <ul className="list-none flex flex-col gap-4 rund__text-font">
                      {iteam.data.map((res) => {
                        return (
                          <>
                            <li className="text-[#FFFFFF] border-b w-max text-sm  leading-4 font-medium footer__link-animation">
                              <Link to={iteam?.path}>{res}</Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              })}
            </div>
            <div>
              {footer_iteam4.map((iteam) => {
                return (
                  <>
                    <h1
                      key={iteam.id}
                      className="text-[#FFFFFF] hidden md:flex md:flex-col mb-6 text-sm  leading-5 font-medium"
                    >
                      {iteam.title}
                    </h1>
                    <ul className="list-none flex flex-row md:flex-col flex-wrap justify-center md:justify-start gap-4 px-6 md:px-0 rund__text-font">
                      {iteam.data.map((res) => {
                        return (
                          <>
                            <li className="text-[#FFFFFF] border-b w-max text-sm  leading-4 font-normal footer__link-animation">
                              <Link to={iteam?.path}>{res}</Link>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* copy rights  */}
        <div className="text-[#FFFFFF] w-full text-center text-xs sm:text-sm md:text-base leading-4 md:leading-5 font-normal rund__text-font mb-6">
          <p>Copyright © 2025 EDEN Gallery. All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
