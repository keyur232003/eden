import React from "react";
import { Link } from "react-router-dom";

interface PathProps {
  pathname: string;
}

const Path: React.FC<PathProps> = ({ pathname }) => {
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div className="w-full py-8 border-t mt-[100px]">
      <div className="flex flex-row flex-wrap gap-2 max-w-[1200px] w-[90%] mx-auto">
        {/* Home Link */}
        <div className="text-sm flex items-center text-[#000000] leading-4 font-normal rund__text-font">
          <Link to="/" className="flex justify-center items-center gap-2">
            Eden Gallery
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
              ></path>
            </svg>
          </Link>
        </div>

        {/* Dynamic Breadcrumb Links */}
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <div
              key={path}
              className="text-sm flex items-center text-[#000000] leading-4 font-normal rund__text-font"
            >
              {!isLast ? (
                <Link
                  to={path}
                  className="flex justify-center items-center gap-2 capitalize"
                >
                  {segment.replace(/-/g, " ")}
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
                    ></path>
                  </svg>
                </Link>
              ) : (
                <span className="capitalize">{segment.replace(/-/g, " ")}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Path;
