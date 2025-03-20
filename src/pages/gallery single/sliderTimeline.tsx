// import React, { useEffect, useRef } from "react";
// import './slider.css'

// const SliderTimeline = () => {

//   return (
//     <div>
//       <div style={{ position: "relative" }}>
//         <div className="timeline_slider ">
//           <div className="timeline_years_nav_block">
//             <ul>
//               <li className="current" data-year="2020"></li>
//               <li data-year="2019"></li>
//             </ul>
//           </div>
//           <div className="timeline_slider_slides_block">
//             <div className="timeline_slider_slides">
//               <div
//                 className="timeline_slide"
//                 date-sort="20210330"
//                 data-year="2021"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>March 30th, 2021</h5>

//                     <p>
//                       United Nations Global Compact and Sustainable Station
//                       Concept
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20210309"
//                 data-year="2021"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>March 9th, 2021</h5>

//                     <p>
//                       World’s first full-scale powergrade isolation valves
//                       unveiled
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20210126"
//                 data-year="2021"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>January 26th, 2021</h5>

//                     <p>
//                       PowergradeTT connects with Icomera for wireless
//                       communications
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20201215"
//                 data-year="2020"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>December 15th, 2020</h5>

//                     <p>
//                       Ferrovial, PowergradeTT Sign Framework Agreement to
//                       Analyze US Projects
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20201208"
//                 data-year="2020"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>December 8th, 2020</h5>

//                     <p>
//                       Hitachi Rail Invests in Power Grade, Signs as Technology
//                       Provider
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20201203"
//                 data-year="2020"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>December 3rd, 2020</h5>

//                     <p>
//                       Power Grade Accelerates with 100 Engineers from World
//                       Leading Firm Altran
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20200723"
//                 data-year="2020"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>July 23rd, 2020</h5>

//                     <p>
//                       Power Grade Receives Official classNameification Under
//                       United States Department of Transportation
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20200714"
//                 data-year="2020"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>July 14th, 2020</h5>

//                     <p>
//                       Power Grade and TÜV SÜD Announce Publication of Industry
//                       First Complete Safety Guidelines
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20200205"
//                 data-year="2020"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>February 5th, 2020</h5>

//                     <p>
//                       ZREALITY and PowergradeTT present Augmented Reality Mobile
//                       Application visualizing the first Full-scale Powergrade
//                       system
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20200121"
//                 data-year="2020"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>January 21st, 2020</h5>

//                     <p>Disrupting cargo transport with Powergrade technology</p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20191217"
//                 data-year="2019"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>December 17th, 2019</h5>

//                     <p>
//                       PowergradeTT Uses Magic Leap to Show How Elon Musk’s
//                       Futuristic Vision of Transport Will Work in the US
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20191217"
//                 data-year="2019"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>December 17th, 2019</h5>

//                     <p>PowergradeTT launches a new global brand</p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20191216"
//                 data-year="2019"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>December 16th, 2019</h5>

//                     <p>
//                       Power Grade Releases Great Lakes Feasibility Study, Moves
//                       to Next Phase
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20191118"
//                 data-year="2019"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>November 18th, 2019</h5>

//                     <p>
//                       Power Grade’ Great Lakes Study Preview: Feasible and
//                       Highly Profitable
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20190911"
//                 data-year="2019"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>September 11th, 2019</h5>

//                     <p>
//                       MAD Partners with PowergradeTT on Sustainable
//                       Transportation Infrastructure
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20190625"
//                 data-year="2019"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>June 25th, 2019</h5>

//                     <p>
//                       Power Grade Provides USDOT with Exclusive First-Look at
//                       Full-Scale System and Presents Certification Guidelines
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20190523"
//                 data-year="2019"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>May 23rd, 2019</h5>

//                     <p>
//                       European Commission Moves Ahead in Assessing Powergrade
//                       Regulatory Needs
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20181205"
//                 data-year="2018"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>December 5th, 2018</h5>

//                     <p>
//                       Power Grade and HHLA Form New Joint Venture to Solve
//                       Shipping Industry Challenges
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20181024"
//                 data-year="2018"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>October 24th, 2018</h5>

//                     <p>
//                       Power Grade Announces Partners and Construction Start for
//                       Commercial System in Abu Dhabi
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20181002"
//                 data-year="2018"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>October 2nd, 2018</h5>

//                     <p>Power Grade Reveals Full-Scale Passenger Capsule</p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20180917"
//                 data-year="2018"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>September 17th, 2018</h5>

//                     <p>
//                       Power Grade, Partners, and Government Stakeholders Move
//                       Forward with Regulatory Framework
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20180719"
//                 data-year="2018"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>July 19th, 2018</h5>

//                     <p>Power Grade to Build China’s First Powergrade System</p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20180614"
//                 data-year="2018"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>June 14th, 2018</h5>

//                     <p>
//                       Power Grade Signs Agreement for Commercial System in
//                       Ukraine
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20180418"
//                 data-year="2018"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>April 18th, 2018</h5>

//                     <p>
//                       Power Grade Moves Forward with First Commercial Powergrade
//                       System in the UAE
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20180215"
//                 data-year="2018"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>February 15th, 2018</h5>

//                     <p>
//                       Power Grade and NOACA Expand Cleveland to Chicago Project
//                       with Top Regional Organizations
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20171017"
//                 data-year="2017"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>October 17th, 2017</h5>

//                     <p>
//                       Power Grade Collaborates with Munich Re to Insure
//                       Powergrade
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20170906"
//                 data-year="2017"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>September 6th, 2017</h5>

//                     <p>Power Grade to Launch India’s First Powergrade</p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20170620"
//                 data-year="2017"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>June 20th, 2017</h5>

//                     <p>
//                       Power Grade Signs Agreement to License Technology in South
//                       Korea
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20170321"
//                 data-year="2017"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>March 21st, 2017</h5>

//                     <p>
//                       The First Full Scale Passenger Powergrade Capsule Is Being
//                       Built
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20170308"
//                 data-year="2017"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>March 8th, 2017</h5>

//                     <p>
//                       Indonesia Embraces HTT with $2.5 Million Powergrade
//                       Feasibility Study
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20170124"
//                 data-year="2017"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>January 24th, 2017</h5>

//                     <p>
//                       Toulouse Welcomes Power Grade to Europe’s Aerospace Valley
//                       With New Facilities
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20170122"
//                 data-year="2017"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>January 22nd, 2017</h5>

//                     <p>
//                       Strategic partnership with the office of His Highness
//                       Sheikh Falah Bin Zayed Al Nahyan in Abu Dhabi
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20170118"
//                 data-year="2017"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>January 18th, 2017</h5>

//                     <p>
//                       Brno, Czech Republic Takes First Step to Create European
//                       Powergrade Connecting to Slovakia
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20161201"
//                 data-year="2016"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>December 1st, 2016</h5>

//                     <p>
//                       Power Grade Surpasses $100 Million in Total Investment
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20160525"
//                 data-year="2016"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>May 25th, 2016</h5>

//                     <p>
//                       Power Grade, Inc. Reveals Vibranium™ Skin Material for
//                       Capsule Safety and Announces Digital Innovation Challenge
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20160509"
//                 data-year="2016"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>May 9th, 2016</h5>

//                     <p>
//                       Power Grade, Inc. Reveals Powergrade™ Levitation System
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20160311"
//                 data-year="2016"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>March 11th, 2016</h5>

//                     <p>Power Grade Reaches Agreement with Slovakia</p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20141219"
//                 data-year="2014"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>December 19th, 2014</h5>

//                     <p>
//                       Power Grade, Inc. Announces New Designs, Crowdstorming
//                       Document and Core Team
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20131031"
//                 data-year="2013"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>October 31st, 2013</h5>

//                     <p>
//                       JumpStartFund-Backed ‘Power Grade Inc.’ to Publish Next
//                       Powergrade Development Milestones
//                     </p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20130821"
//                 data-year="2013"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>August 21st, 2013</h5>

//                     <p>Power Grade on JumpStartFund</p>
//                   </div>
//                 </a>
//               </div>

//               <div
//                 className="timeline_slide"
//                 date-sort="20130812"
//                 data-year="2013"
//                 style={{ display: "none" }}
//               >
//                 <a href="https://www.powergradeinc.com/" target="_blank">
//                   <div className="timeline_slide-h">
//                     <div className="feat_image">
//                       <div className="feat_image_h">
//                         <img
//                           className="feat_image_img"
//                           data-lazy="https://via.placeholder.com/300/0000FF/808080%20?Text=300x300"
//                         />
//                       </div>
//                     </div>

//                     <h5>August 12th, 2013</h5>

//                     <p>
//                       Elon Musk releases whitepaper, outlining vision for
//                       powergrade technology
//                     </p>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <div className="timeline_border_fade timeline_border_fade-left"></div>
//             <div className="timeline_border_fade timeline_border_fade-right"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SliderTimeline;



import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.css"; // Ensure to style accordingly
import { gallery_single_data } from "../../json/gallery_single";

const TimelineSlider = () => {
  const [slides, setSlides] = useState([]);
  const sliderRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [displayYear, setDisplayYear] = useState(""); // The year that is actually displayed in the slider
  const eventRefs = useRef({});

  useEffect(() => {
    // Sorting slides by year in ascending order
    const sortedSlides = [...gallery_single_data?.section5].sort(
      (a, b) => a.date.y - b.date?.y
    );
    setSlides(sortedSlides);
  }, []);

  // Find the closest available year if the selected year isn't in the dataset
  const findClosestYear = (year) => {
    if (slides.length === 0) return year;
    const years = slides.map((slide) => slide.date.y);
    if (years.includes(year)) return year;

    return years.reduce((prev, curr) =>
      Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
    );
  };

  useEffect(() => {
    const closestYear = findClosestYear(selectedYear);
    setDisplayYear(closestYear); // Set the displayed year to the closest one

    const index = slides.findIndex((slide) => slide.date.y === closestYear);
    if (index !== -1 && sliderRef.current) {
      console.log('index', index)
      sliderRef.current.slickGoTo(index);
    }
  }, [selectedYear, slides]);

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3.6,
    slidesToScroll: 1.5,
    speed: 500,
    infinite: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200, // For laptops & large screens
        settings: { slidesToShow: 3.5, slidesToScroll: 1.5, centerMode: true },
      },
      {
        breakpoint: 1024, // For tablets (landscape)
        settings: { slidesToShow: 2.5, slidesToScroll: 1, centerMode: true },
      },
      {
        breakpoint: 900, // For small tablets
        settings: { slidesToShow: 2.5, slidesToScroll: 1 ,  centerMode: false },
      },
      {
        breakpoint: 768, // For tablets (portrait)
        settings: { slidesToShow: 2.2, slidesToScroll: 1 , centerMode: false },
      },
      {
        breakpoint: 600, // For mobile (large)
        settings: { slidesToShow: 1.1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // For mobile (small)
        settings: { slidesToShow: 1.2, slidesToScroll: 1, centerMode: false, },
      },
    ],
  };
  

  const years = slides.map((event) => Number(event?.date?.y)) || [];
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  return (
    <div className="timelineSlider">
      <div className="timelineYearsNav border-t-1">
        <div className="grid grid-cols-7 ">
          {Array.from({ length: 7 }, (_, index) => {
            const year = selectedYear - 3 + index;
            return (
              <div
                key={year}
                className={`text-center cursor-pointer transition-all  ${
                  year === selectedYear
                    ? "text-red-600 font-bold"
                    : "text-gray-600"
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year === selectedYear ? (
                  <span className="border-t-4 border-red-600 px-2">{year}</span>
                ) : (
                  year
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className=" !flex !justify-center  !text-center mt-4 overflow-hidden">
        {slides.map((event) => (
          <div
            key={event?.id}
            className={` gap-4 !justify-center   max-w-[300px]  ${
              displayYear === event?.date?.y ? "" : "opacity-80"
            }`}
            ref={(el) => (eventRefs.current[event?.date?.y] = el)}
          >
            <div
              className={`relative w-80 h-80 shadow-lg transition-all ${
                displayYear === Number(event?.date?.y) ? "" : "opacity-80"
              }
              ${displayYear === minYear ? "mr-[810px]" : ""}
              ${displayYear === maxYear ? "ml-[-470px]" : ""}`}
            >
              <div className="absolute top-0 right-0 flex justify-end flex-wrap p-4 z-10 space-x-2">
                <span className="bg-gray-200 hover:bg-red-600 hover:text-white px-2 py-1 text-sm italic font-light rounded-md cursor-pointer">
                  {event?.artist_btn}
                </span>
                <span className="bg-pink-200 hover:bg-red-600 hover:text-white px-2 py-1 text-sm italic font-light rounded-md">
                  {event?.creative_Gallery}
                </span>
                <span className="bg-orange-200 hover:bg-red-600 hover:text-white px-2 py-1 text-sm italic font-light rounded-md">
                  {event?.opening}
                </span>
              </div>
              <img
                src={event?.img_url}
                alt={event?.title}
                width={390}
                className="max-h-52 max-w-[320px] w-full object-cover"
              />
              <div className="pt-6 pb-6 text-center">
                <h3 className="text-lg md:text-2xl italic font-medium">
                  {event?.title}
                </h3>
                <p className="text-sm md:text-base font-light mt-2">
                  {event?.date.d} {event?.date.m} {event?.date.y}{" "}
                  {event?.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TimelineSlider;







// import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// import Slider from 'react-slick';
// import ReactPlayer from 'react-player';

 
// interface Props {
//   events: {
//     id: string;
//     name: string;
//     date: {
//       d: string;
//       m: string;
//       y: string;
//     };
//     city: string;
//     country: string;
//     slug: string;
//     type: string;
//     artists: {
//       id: string;
//       name: string;
//     }[];
//     galleries: {
//       id: string;
//       name: string;
//     }[];
//     rsvp: string;
//     imageVideo: {
//       url: string;
//       id: string;
//       type: string;
//     };
//   }[];
//   className?: string;
// }
 
// const Timeline = ({ events, className }: any) => {
//   const currentYear = new Date().getFullYear();
//   // const openRSVPForm = useBoolean();
//   // const scrollRef = useRef<HTMLDivElement | null>(null);
//   // const sliderRef = useRef<Slider | null>(null); // Ref for the slider
//   const [selectedYear, setSelectedYear] = useState<number>(currentYear);
//   const sliderRef = useRef<Slider | null>(null);
//   // const containerRef = useRef<HTMLDivElement | null>(null);
//   const [openGroupId, setOpenGroupId] = useState<number | null>(null);
 
//   const [slides, setSlides] = useState<any[]>([]);
//   const [displayYear, setDisplayYear] = useState(""); // The year that is actually displayed in the slider
//   const eventRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
 
//   const years: number[] = Array.from(
//     { length: 7 },
//     (_, i) => selectedYear - 3 + i
//   );
 
//  const data =[
//   {
//     "id": "1",
//     "name": "Art Opening 1",
//     "date": {
//       "d": "10",
//       "m": "02",
//       "y": "2021"
//     },
//     "city": "Creative City",
//     "country": "Country B",
//     "slug": "art-opening-1",
//     "type": "Opening",
//     "artists": [
//       {
//         "id": "1",
//         "name": "Artist 1"
//       },
//       {
//         "id": "2",
//         "name": "Artist 2"
//       },
//       {
//         "id": "3",
//         "name": "Artist 3"
//       }
//     ],
//     "galleries": [
//       {
//         "id": "2",
//         "name": "Creative Gallery"
//       }
//     ],
//     "rsvp": "Rsvp",
//     "imageVideo": {
//       "url": "https://s3-alpha-sig.figma.com/img/084b/c3a6/2c035cfac5df1c547429641e2fc7c9b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qh29Ze93gXrVof0ma9N8axjUu2ZbPix8Z5sA1tE2lSVJrEf8PGJ0qT3XqPrADlTlv8TX29GU1y~8ZSwC20SE~teCdoOchmBL7Z1MmAds8a3k~ZfStTfK9Y4nq-XPI9Eesy06MW4BLzk6unNUr3gsuuf9OahpPnolw9htQdESZpHDtcdW~cAMCUav8pcHF2zG5MgakdNac1jcPK0uDQz7qGupetyc2zcoe1VlfsQ6225VPftGgRxbfyzunCbl21XZ1x-z8iZgVvGicf50Jr0wpx7MsDBsr9x6QELGo7iCQDnWnYhfeBNa-IDodu1YmarQJo16xpkUqOOeJzLhQJrSiA__",
//       "id": "2",
//       "type": "image"
//     }
//   }
//   ,
//   {
//     "id": "1",
//     "name": "Art Opening 1",
//     "date": {
//       "d": "10",
//       "m": "02",
//       "y": "2022"
//     },
//     "city": "Creative City",
//     "country": "Country B",
//     "slug": "art-opening-1",
//     "type": "Opening",
//     "artists": [
//       {
//         "id": "1",
//         "name": "Artist 1"
//       },
//       {
//         "id": "2",
//         "name": "Artist 2"
//       },
//       {
//         "id": "3",
//         "name": "Artist 3"
//       }
//     ],
//     "galleries": [
//       {
//         "id": "2",
//         "name": "Creative Gallery"
//       }
//     ],
//     "rsvp": "Rsvp",
//     "imageVideo": {
//       "url": "https://s3-alpha-sig.figma.com/img/084b/c3a6/2c035cfac5df1c547429641e2fc7c9b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qh29Ze93gXrVof0ma9N8axjUu2ZbPix8Z5sA1tE2lSVJrEf8PGJ0qT3XqPrADlTlv8TX29GU1y~8ZSwC20SE~teCdoOchmBL7Z1MmAds8a3k~ZfStTfK9Y4nq-XPI9Eesy06MW4BLzk6unNUr3gsuuf9OahpPnolw9htQdESZpHDtcdW~cAMCUav8pcHF2zG5MgakdNac1jcPK0uDQz7qGupetyc2zcoe1VlfsQ6225VPftGgRxbfyzunCbl21XZ1x-z8iZgVvGicf50Jr0wpx7MsDBsr9x6QELGo7iCQDnWnYhfeBNa-IDodu1YmarQJo16xpkUqOOeJzLhQJrSiA__",
//       "id": "2",
//       "type": "image"
//     }
//   }
//   ,
//   {
//     "id": "1",
//     "name": "Art Opening 1",
//     "date": {
//       "d": "10",
//       "m": "02",
//       "y": "2023"
//     },
//     "city": "Creative City",
//     "country": "Country B",
//     "slug": "art-opening-1",
//     "type": "Opening",
//     "artists": [
//       {
//         "id": "1",
//         "name": "Artist 1"
//       },
//       {
//         "id": "2",
//         "name": "Artist 2"
//       },
//       {
//         "id": "3",
//         "name": "Artist 3"
//       }
//     ],
//     "galleries": [
//       {
//         "id": "2",
//         "name": "Creative Gallery"
//       }
//     ],
//     "rsvp": "Rsvp",
//     "imageVideo": {
//       "url": "https://s3-alpha-sig.figma.com/img/084b/c3a6/2c035cfac5df1c547429641e2fc7c9b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qh29Ze93gXrVof0ma9N8axjUu2ZbPix8Z5sA1tE2lSVJrEf8PGJ0qT3XqPrADlTlv8TX29GU1y~8ZSwC20SE~teCdoOchmBL7Z1MmAds8a3k~ZfStTfK9Y4nq-XPI9Eesy06MW4BLzk6unNUr3gsuuf9OahpPnolw9htQdESZpHDtcdW~cAMCUav8pcHF2zG5MgakdNac1jcPK0uDQz7qGupetyc2zcoe1VlfsQ6225VPftGgRxbfyzunCbl21XZ1x-z8iZgVvGicf50Jr0wpx7MsDBsr9x6QELGo7iCQDnWnYhfeBNa-IDodu1YmarQJo16xpkUqOOeJzLhQJrSiA__",
//       "id": "2",
//       "type": "image"
//     }
//   }
//   ,
//   {
//     "id": "1",
//     "name": "Art Opening 1",
//     "date": {
//       "d": "10",
//       "m": "02",
//       "y": "2023"
//     },
//     "city": "Creative City",
//     "country": "Country B",
//     "slug": "art-opening-1",
//     "type": "Opening",
//     "artists": [
//       {
//         "id": "1",
//         "name": "Artist 1"
//       },
//       {
//         "id": "2",
//         "name": "Artist 2"
//       },
//       {
//         "id": "3",
//         "name": "Artist 3"
//       }
//     ],
//     "galleries": [
//       {
//         "id": "2",
//         "name": "Creative Gallery"
//       }
//     ],
//     "rsvp": "Rsvp",
//     "imageVideo": {
//       "url": "https://s3-alpha-sig.figma.com/img/084b/c3a6/2c035cfac5df1c547429641e2fc7c9b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qh29Ze93gXrVof0ma9N8axjUu2ZbPix8Z5sA1tE2lSVJrEf8PGJ0qT3XqPrADlTlv8TX29GU1y~8ZSwC20SE~teCdoOchmBL7Z1MmAds8a3k~ZfStTfK9Y4nq-XPI9Eesy06MW4BLzk6unNUr3gsuuf9OahpPnolw9htQdESZpHDtcdW~cAMCUav8pcHF2zG5MgakdNac1jcPK0uDQz7qGupetyc2zcoe1VlfsQ6225VPftGgRxbfyzunCbl21XZ1x-z8iZgVvGicf50Jr0wpx7MsDBsr9x6QELGo7iCQDnWnYhfeBNa-IDodu1YmarQJo16xpkUqOOeJzLhQJrSiA__",
//       "id": "2",
//       "type": "image"
//     }
//   }
//   ,
//   {
//     "id": "1",
//     "name": "Art Opening 1",
//     "date": {
//       "d": "10",
//       "m": "02",
//       "y": "2025"
//     },
//     "city": "Creative City",
//     "country": "Country B",
//     "slug": "art-opening-1",
//     "type": "Opening",
//     "artists": [
//       {
//         "id": "1",
//         "name": "Artist 1"
//       },
//       {
//         "id": "2",
//         "name": "Artist 2"
//       },
//       {
//         "id": "3",
//         "name": "Artist 3"
//       }
//     ],
//     "galleries": [
//       {
//         "id": "2",
//         "name": "Creative Gallery"
//       }
//     ],
//     "rsvp": "Rsvp",
//     "imageVideo": {
//       "url": "https://s3-alpha-sig.figma.com/img/084b/c3a6/2c035cfac5df1c547429641e2fc7c9b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qh29Ze93gXrVof0ma9N8axjUu2ZbPix8Z5sA1tE2lSVJrEf8PGJ0qT3XqPrADlTlv8TX29GU1y~8ZSwC20SE~teCdoOchmBL7Z1MmAds8a3k~ZfStTfK9Y4nq-XPI9Eesy06MW4BLzk6unNUr3gsuuf9OahpPnolw9htQdESZpHDtcdW~cAMCUav8pcHF2zG5MgakdNac1jcPK0uDQz7qGupetyc2zcoe1VlfsQ6225VPftGgRxbfyzunCbl21XZ1x-z8iZgVvGicf50Jr0wpx7MsDBsr9x6QELGo7iCQDnWnYhfeBNa-IDodu1YmarQJo16xpkUqOOeJzLhQJrSiA__",
//       "id": "2",
//       "type": "image"
//     }
//   }
//   ,
//   {
//     "id": "1",
//     "name": "Art Opening 1",
//     "date": {
//       "d": "10",
//       "m": "02",
//       "y": "2019"
//     },
//     "city": "Creative City",
//     "country": "Country B",
//     "slug": "art-opening-1",
//     "type": "Opening",
//     "artists": [
//       {
//         "id": "1",
//         "name": "Artist 1"
//       },
//       {
//         "id": "2",
//         "name": "Artist 2"
//       },
//       {
//         "id": "3",
//         "name": "Artist 3"
//       }
//     ],
//     "galleries": [
//       {
//         "id": "2",
//         "name": "Creative Gallery"
//       }
//     ],
//     "rsvp": "Rsvp",
//     "imageVideo": {
//       "url": "https://s3-alpha-sig.figma.com/img/084b/c3a6/2c035cfac5df1c547429641e2fc7c9b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qh29Ze93gXrVof0ma9N8axjUu2ZbPix8Z5sA1tE2lSVJrEf8PGJ0qT3XqPrADlTlv8TX29GU1y~8ZSwC20SE~teCdoOchmBL7Z1MmAds8a3k~ZfStTfK9Y4nq-XPI9Eesy06MW4BLzk6unNUr3gsuuf9OahpPnolw9htQdESZpHDtcdW~cAMCUav8pcHF2zG5MgakdNac1jcPK0uDQz7qGupetyc2zcoe1VlfsQ6225VPftGgRxbfyzunCbl21XZ1x-z8iZgVvGicf50Jr0wpx7MsDBsr9x6QELGo7iCQDnWnYhfeBNa-IDodu1YmarQJo16xpkUqOOeJzLhQJrSiA__",
//       "id": "2",
//       "type": "image"
//     }
//   }
//   ,
//   {
//     "id": "1",
//     "name": "Art Opening 1",
//     "date": {
//       "d": "10",
//       "m": "02",
//       "y": "2020"
//     },
//     "city": "Creative City",
//     "country": "Country B",
//     "slug": "art-opening-1",
//     "type": "Opening",
//     "artists": [
//       {
//         "id": "1",
//         "name": "Artist 1"
//       },
//       {
//         "id": "2",
//         "name": "Artist 2"
//       },
//       {
//         "id": "3",
//         "name": "Artist 3"
//       }
//     ],
//     "galleries": [
//       {
//         "id": "2",
//         "name": "Creative Gallery"
//       }
//     ],
//     "rsvp": "Rsvp",
//     "imageVideo": {
//       "url": "https://s3-alpha-sig.figma.com/img/084b/c3a6/2c035cfac5df1c547429641e2fc7c9b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qh29Ze93gXrVof0ma9N8axjUu2ZbPix8Z5sA1tE2lSVJrEf8PGJ0qT3XqPrADlTlv8TX29GU1y~8ZSwC20SE~teCdoOchmBL7Z1MmAds8a3k~ZfStTfK9Y4nq-XPI9Eesy06MW4BLzk6unNUr3gsuuf9OahpPnolw9htQdESZpHDtcdW~cAMCUav8pcHF2zG5MgakdNac1jcPK0uDQz7qGupetyc2zcoe1VlfsQ6225VPftGgRxbfyzunCbl21XZ1x-z8iZgVvGicf50Jr0wpx7MsDBsr9x6QELGo7iCQDnWnYhfeBNa-IDodu1YmarQJo16xpkUqOOeJzLhQJrSiA__",
//       "id": "2",
//       "type": "image"
//     }
//   }
//   ,
//   {
//     "id": "1",
//     "name": "Art Opening 1",
//     "date": {
//       "d": "10",
//       "m": "02",
//       "y": "2019"
//     },
//     "city": "Creative City",
//     "country": "Country B",
//     "slug": "art-opening-1",
//     "type": "Opening",
//     "artists": [
//       {
//         "id": "1",
//         "name": "Artist 1"
//       },
//       {
//         "id": "2",
//         "name": "Artist 2"
//       },
//       {
//         "id": "3",
//         "name": "Artist 3"
//       }
//     ],
//     "galleries": [
//       {
//         "id": "2",
//         "name": "Creative Gallery"
//       }
//     ],
//     "rsvp": "Rsvp",
//     "imageVideo": {
//       "url": "https://s3-alpha-sig.figma.com/img/084b/c3a6/2c035cfac5df1c547429641e2fc7c9b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qh29Ze93gXrVof0ma9N8axjUu2ZbPix8Z5sA1tE2lSVJrEf8PGJ0qT3XqPrADlTlv8TX29GU1y~8ZSwC20SE~teCdoOchmBL7Z1MmAds8a3k~ZfStTfK9Y4nq-XPI9Eesy06MW4BLzk6unNUr3gsuuf9OahpPnolw9htQdESZpHDtcdW~cAMCUav8pcHF2zG5MgakdNac1jcPK0uDQz7qGupetyc2zcoe1VlfsQ6225VPftGgRxbfyzunCbl21XZ1x-z8iZgVvGicf50Jr0wpx7MsDBsr9x6QELGo7iCQDnWnYhfeBNa-IDodu1YmarQJo16xpkUqOOeJzLhQJrSiA__",
//       "id": "2",
//       "type": "image"
//     }
//   }
//   ,
//   {
//     "id": "1",
//     "name": "Art Opening 1",
//     "date": {
//       "d": "10",
//       "m": "02",
//       "y": "2020"
//     },
//     "city": "Creative City",
//     "country": "Country B",
//     "slug": "art-opening-1",
//     "type": "Opening",
//     "artists": [
//       {
//         "id": "1",
//         "name": "Artist 1"
//       },
//       {
//         "id": "2",
//         "name": "Artist 2"
//       },
//       {
//         "id": "3",
//         "name": "Artist 3"
//       }
//     ],
//     "galleries": [
//       {
//         "id": "2",
//         "name": "Creative Gallery"
//       }
//     ],
//     "rsvp": "Rsvp",
//     "imageVideo": {
//       "url": "https://s3-alpha-sig.figma.com/img/084b/c3a6/2c035cfac5df1c547429641e2fc7c9b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qh29Ze93gXrVof0ma9N8axjUu2ZbPix8Z5sA1tE2lSVJrEf8PGJ0qT3XqPrADlTlv8TX29GU1y~8ZSwC20SE~teCdoOchmBL7Z1MmAds8a3k~ZfStTfK9Y4nq-XPI9Eesy06MW4BLzk6unNUr3gsuuf9OahpPnolw9htQdESZpHDtcdW~cAMCUav8pcHF2zG5MgakdNac1jcPK0uDQz7qGupetyc2zcoe1VlfsQ6225VPftGgRxbfyzunCbl21XZ1x-z8iZgVvGicf50Jr0wpx7MsDBsr9x6QELGo7iCQDnWnYhfeBNa-IDodu1YmarQJo16xpkUqOOeJzLhQJrSiA__",
//       "id": "2",
//       "type": "image"
//     }
//   }
//  ]
 
 
 
//   // const handleOpenGroup = (item: any) => {
//   //   console.log('item', item);
//   //   if (item) {
//   //     setShowArtists(!showArtists);
//   //   }
//   // };
 
//   useEffect(() => {
//     // Sorting slides by year in ascending order
//     const sortedSlides = [...data].sort(
//       (a, b) => a.date.y - b.date?.y
//     );
//     setSlides(sortedSlides);
//   }, []);
 
//   // Find the closest available year if the selected year isn't in the dataset
//   const findClosestYear = (year: any) => {
//     if (slides.length === 0) return year;
//     const years = slides.map((slide) => slide.date.y);
//     if (years.includes(year)) return year;
 
//     return years.reduce((prev, curr) =>
//       Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
//     );
//   };
 
//   useEffect(() => {
//     const closestYear = findClosestYear(selectedYear);
//     setDisplayYear(closestYear); // Set the displayed year to the closest one
 
//     const index = slides.findIndex((slide) => slide.date.y === closestYear);
//     if (index !== -1 && sliderRef.current) {
//       sliderRef.current.slickGoTo(index);
//     }
//   }, [selectedYear, slides]);
 
//   const handleOpenGroup = (itemId: any) => {
//     if (openGroupId === itemId) {
//       setOpenGroupId(null);
//     } else {
//       setOpenGroupId(itemId);
//     }
//   };
 
//   // Memorized the slider setting
//   const setting = useMemo(() => ({
//     dots: false,
//     infinite: false,
//     speed: 1000,
//     slidesToShow: 4.5,
//     autoplaySpeed: 0,
//     autoplay: false,
//     arrows: false,
//     cssEase: 'linear',
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 1200, // Medium-large screens
//         settings: {
//           slidesToShow: 3.2,
//           slidesToScroll: 3,
//         }
//       },
//       {
//         breakpoint: 1024, // Large screens
//         settings: {
//           slidesToShow: 2.8,
//           slidesToScroll: 3,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1.4,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1.05,
//           slidesToScroll: 1,
//         },
//       },
//     ]
//   }), [])
//   const years1 = slides.map((event) => Number(event?.date?.y)) || [];
//   const minYear: any = Math.min(...years1);
//   const maxYear: any = Math.max(...years1);
//   return (
//     <div className="relative w-full border-t border-[#868686]">
//       <div
//         // ref={containerRef}
//         className={`relative overflow-x-hidden ${className}`}
//         style={{ whiteSpace: 'nowrap', scrollBehavior: 'smooth' }}
//       // onMouseDown={handleMouseDown}
//       // onMouseLeave={handleMouseLeave}
//       // onMouseUp={handleMouseUp}
//       // onMouseMove={handleMouseMove}
//       // onWheel={handleWheel}
//       >
//         <div className="flex space-x-2 px-4 gap-[60px] lg:gap-[148px] w-full justify-center overflow-x-auto hide-scrollbar">
//           {years?.map((year) => (
//             <div key={year}>
//               <button
//                 className={`noto__serif-font font-normal leading-[21px] text-center  ${selectedYear === year ? 'text-[#D61818] italic tracking-[0.06em] border-t-2 border-[#D61818]' : 'text-base border-t-2 border-transparent'}`}
//                 onClick={() => setSelectedYear(year)}
//               >
//                 {year}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
 
//       {/* Pass the sliderRef to CommanSlider */}
//       <div className="mt-[23px]">
//         <Slider {...setting} ref={sliderRef}>
//           {slides?.map((item, index) => {
//             const isLastInYear =
//               index === slides.length - 1 ||
//               parseInt(slides[index + 1]?.date.y) !==
//               parseInt(item.date.y);
//             return (
//               <div
//                 ref={(ref) => {
//                   eventRefs.current[item.id] = ref;
//                 }}
//                 key={item.id}
//                 className={`relative transition-all  max-w-[390px] ${displayYear === minYear ? "mr-[810px]" : ""}
//                 ${displayYear === maxYear ? "ml-[-470px]" : ""}
//               `}
 
//               >
//                 {item?.imageVideo?.type === 'image' ? (
//                   <img
//                     src={item?.imageVideo?.url}
//                     alt="timeline-img"
//                     width={390}
//                     height={200}
//                     className={`max-h-[210px] w-full max-w-[390}px] max-w-[373px]`}
//                   />
//                 ) : (
//                   <div
//                     className={`h-[210px] w-[${390}px] md:max-w-[390px]`}
//                   >
//                     <ReactPlayer
//                       url={item.imageVideo.url}
//                       playing
//                       loop
//                       muted
//                       width={`${390}px`}
//                       height="100%"
//                       className={`!w-full  max-w-[390px]`}
//                     />
//                   </div>
//                 )}
 
//                 <div className="absolute top-0 right-0 2xl:right-[15%] flex justify-end flex-wrap p-4 z-10 space-x-2">
//                   {item.artists.length > 1 ? (
//                     <>
//                       <span
//                         className="bg-[#F2F2F3] hover:bg-[#f63d01] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md cursor-pointer"
//                         onClick={() => handleOpenGroup(item.id)}
//                       >
//                         Group Exhibition
//                       </span>
//                       {/*openGroupId == item.id  */}
//                       {openGroupId !== null &&
//                         openGroupId.toString() === item.id.toString() && (
//                           <div className="absolute z-50 top-full left-0  mt-1 bg-white  rounded-lg p-3 flex flex-wrap gap-2 w-[250px] justify-start">
//                             {item.artists.map((artist: any) => (
//                               <>
//                                 <div
//                                   className={`absolute top-0 left-1/2 lg:left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white  border-t border-l border-[#fff] rotate-45`}
//                                 ></div>
//                                 <span
//                                   key={artist.id}
//                                   className="bg-[#F2F2F3] hover:bg-[#f63d01] hover:text-white transition-all text-black noto__serif-font px-2 py-[3.5px] text-sm italic font-light leading-[19px] rounded-md cursor-pointer"
//                                 >
//                                   {artist.name}
//                                 </span>
//                               </>
//                             ))}
//                           </div>
//                         )}
//                     </>
//                   ) : (
//                     item.artists.map((artist: any) => (
//                       <span
//                         key={artist.id}
//                         className="bg-[#F2F2F3] hover:bg-[#D61818] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md cursor-pointer"
//                       >
//                         {artist.name}
//                       </span>
//                     ))
//                   )}
//                   {item.galleries.map((gallery: any) => (
//                     <span
//                       key={gallery.id}
//                       className="bg-[#FBC9C9] hover:bg-[#D61818] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md"
//                     >
//                       {gallery.name}
//                     </span>
//                   ))}
//                   <span className="bg-[#FBDDC9] hover:bg-[#D61818] hover:text-white transition-all text-black noto__serif-font px-2 py-[2.5px] text-sm italic font-light leading-[19px] rounded-md">
//                     {item.type}
//                   </span>
//                 </div>
//                 <div className="pt-[22px] md:pt-[24px] pb-[22px] md:pb-[50px] text-center">
//                   <a
//                     href={`/event-exhibitions/${item?.slug}`}
//                     className="noto__serif-font text-lg md:text-2xl italic font-medium md:leading-[32px] leading-[24px]"
//                   >
//                     {item.name}
//                   </a>
//                   <p className="rund__text-font text-sm md:text-base font-light leading-[19px] mt-2">
//                     {`${item.date.d ? item.date.d : ''} ${item.date.m ? item.date.m : ''}  ${item.date.y}, ${item.city ? item.city : ''} / ${item.country ? item.country : ''}`}
//                   </p>
//                   {Boolean(item.rsvp) && (
//                     <span
//                       className="rund__text-font text-sm font-normal leading-4 text-black underline mt-4 md:mt-0 border-btn-animation hover:underline-0 cursor-pointer"
                     
//                     >
//                       {item?.rsvp}
//                     </span>
//                   )}
//                 </div>
//                 {/* {isLastInYear && (
//                   // <div className="w-[2px] absolute top-0 right-[-9px] h-[210px] bg-gray-300 mx-auto"></div>
//                   // <hr className="w-[2px] absolute top-0 right-[-9px] xl:right-[-9px] h-[210px] bg-gray-300 mx-auto" />
//                   <hr className="w-[2px] absolute top-0 right-[20px] h-[210px] bg-gray-300 mx-auto" />
//                 )} */}
//               </div>
//             );
//           })}
//         </Slider>
        
//       </div>
//     </div>
//   );
// };
 
// export default Timeline;
