import React, { useState } from 'react'
import "./Blogs.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {  Pagination,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import NavItem from "./NavItem";
import Content from "./Content";

const data=[
  {
    image: "/img/image2.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image3.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image4.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image5.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image2.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image3.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image4.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image5.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image2.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image3.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image4.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
  {
    image: "/img/image5.png",
    line: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    views: "2839",
    date: "May 17, 2019"
  },
]

const Blogs = () => {
  const [activeTab, setActiveTab] = useState("Latest Blogs");
  // const [toggleState, setToggleState] = useState("latest blogs");
  // const toggleTab = (index)=>{
  //   setToggleState(index);
  // }

  return (
    <>
    <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] lg:ml-[71px] md:ml-[40px] mt-[20px]">Blogs</p>
    

<div className='flex justify-center items-center mt-[18px]'>
      <ul className="flex w-fit justify-center flex-row items-center  bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-full overflow-hidden ">
        <NavItem
          title="Latest Blogs"
          id="Latest Blogs"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          title="Astrology"
          id="Astrology"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          title="Politics"
          id="Politics"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          title="Festival"
          id="Festival"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          title="Business"
          id="Business"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          title="Sports"
          id="Sports"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          title="Entertainment"
          id="Entertainment"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
          <NavItem
          title="Nifty Products"
          id="Nifty Products"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
    </div>

    <Swiper modules={[ Pagination,  A11y]} slidesPerView={1} pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log('slide change')}>
                        <SwiperSlide>
                             <div className="contentBox  mt-[40px] lg:flex lg:flex-row md:flex-col md:flex lg:ml-[71px] md:ml-[40px]">
                             <img src='/img/image1.png' className='lg:mb-[20px] md:mb-[10px] lg:w-[790px] lg:h-[560px] md:w-[700px] md:h-[400px]'/>
                             <div className="flex flex-col lg:ml-[20px] md:ml-[10px]">
                             <p className="lg:w-[560px] lg:h-[132px] md:w-[700px] text-amber-900 lg:text-[26px] md:text-[20px] font-medium  font-['Lexend']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
                             <p className="text-amber-500 text-sm font-semibold font-['Poppins'] lg:mt-[40px] md:mt-[20px]">20 December 2023</p>
                             <p className="lg:w-[560px] md:w-[700px] lg:h-[68px] lg:mt-[55px] md:mt-[30px] text-neutral-700 text-base font-normal font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet. </p>
                             <p className="lg:w-[560px] md:w-[700px] lg:h-[43px] lg:mt-[15px] md:mt-[8px] text-neutral-700 text-base font-normal font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                             <p className="lg:w-[560px] md:w-[700px] lg:h-[96px] lg:mt-[15px] md:mt-[8px] text-neutral-700 text-base font-normal font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
                             <button className="lg:w-[145px] lg:h-[45px] md:w-[100px] md:h-[30px] bg-amber-500 rounded-[40px] border border-amber-500 text-white lg:text-base lg:font-medium md:text-xs md:font-light font-['Lexend'] lg:mt-[36px] md:mt-[20px]">Read More<ArrowForwardIosIcon sx={{ '@media (min-width:600px)': { fontSize: '12px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} /></button>
                             </div>
                             </div>
                        </SwiperSlide>

                        <SwiperSlide>
                             <div className="contentBox  mt-[40px] lg:flex lg:flex-row md:flex-col md:flex lg:ml-[71px] md:ml-[40px]">
                             <img src='/img/image1.png' className='lg:mb-[20px] md:mb-[10px] lg:w-[790px] lg:h-[560px] md:w-[700px] md:h-[400px]'/>
                             <div className="flex flex-col lg:ml-[20px] md:ml-[10px]">
                             <p className="lg:w-[560px] lg:h-[132px] md:w-[700px] text-amber-900 lg:text-[26px] md:text-[20px] font-medium  font-['Lexend']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
                             <p className="text-amber-500 text-sm font-semibold font-['Poppins'] lg:mt-[40px] md:mt-[20px]">20 December 2023</p>
                             <p className="lg:w-[560px] md:w-[700px] lg:h-[68px] lg:mt-[55px] md:mt-[30px] text-neutral-700 text-base font-normal font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet. </p>
                             <p className="lg:w-[560px] md:w-[700px] lg:h-[43px] lg:mt-[15px] md:mt-[8px] text-neutral-700 text-base font-normal font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                             <p className="lg:w-[560px] md:w-[700px] lg:h-[96px] lg:mt-[15px] md:mt-[8px] text-neutral-700 text-base font-normal font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
                             <button className="lg:w-[145px] lg:h-[45px] md:w-[100px] md:h-[30px] bg-amber-500 rounded-[40px] border border-amber-500 text-white lg:text-base lg:font-medium md:text-xs md:font-light font-['Lexend'] lg:mt-[36px] md:mt-[20px]">Read More<ArrowForwardIosIcon sx={{ '@media (min-width:600px)': { fontSize: '12px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} /></button>
                             </div>
                             </div>
                        </SwiperSlide>

                        <SwiperSlide>
                             <div className="contentBox  mt-[40px] lg:flex lg:flex-row md:flex-col md:flex lg:ml-[71px] md:ml-[40px]">
                             <img src='/img/image1.png' className='lg:mb-[20px] md:mb-[10px] lg:w-[790px] lg:h-[560px] md:w-[700px] md:h-[400px]'/>
                             <div className="flex flex-col lg:ml-[20px] md:ml-[10px]">
                             <p className="lg:w-[560px] lg:h-[132px] md:w-[700px] text-amber-900 lg:text-[26px] md:text-[20px] font-medium  font-['Lexend']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
                             <p className="text-amber-500 text-sm font-semibold font-['Poppins'] lg:mt-[40px] md:mt-[20px]">20 December 2023</p>
                             <p className="lg:w-[560px] md:w-[700px] lg:h-[68px] lg:mt-[55px] md:mt-[30px] text-neutral-700 text-base font-normal font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet. </p>
                             <p className="lg:w-[560px] md:w-[700px] lg:h-[43px] lg:mt-[15px] md:mt-[8px] text-neutral-700 text-base font-normal font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                             <p className="lg:w-[560px] md:w-[700px] lg:h-[96px] lg:mt-[15px] md:mt-[8px] text-neutral-700 text-base font-normal font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
                             <button className="lg:w-[145px] lg:h-[45px] md:w-[100px] md:h-[30px] bg-amber-500 rounded-[40px] border border-amber-500 text-white lg:text-base lg:font-medium md:text-xs md:font-light font-['Lexend'] lg:mt-[36px] md:mt-[20px]">Read More<ArrowForwardIosIcon sx={{ '@media (min-width:600px)': { fontSize: '12px', }, '@media (min-width:960px)': { fontSize: '24px', }, }} /></button>
                             </div>
                             </div>
                        </SwiperSlide>

                             
                             
      </Swiper>
     
    <div className='content-tabs'>
        {/* latest blogs started */}
        <Content id="Latest Blogs" activeTab={activeTab}>
          <div className= {activeTab === "Latest Blogs" ? "content active-content" : "content"}>
             <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] mt-[60px] lg:ml-[71px] md:ml-[40px]">Latest Blogs</p>
             <div className="imageContainer lg:flex lg:flex-wrap md:grid md:grid-cols-2 mt-[40px] lg:ml-[71px] md:ml-[40px] ">
             {
              data.map(({ image, line, views, date}, index)=>{
                return(
                  <div className='card1 w-[329px] h-[269px] mr-[20px] relative mb-[20px]'>
                  <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                  <img src={image}/>
                  <div className='text absolute top-44 text-white ml-[28px]'>
                  <p className="w-[288.93px] text-xl font-medium font-['Inter']">{line}</p>
                  <div className='flex mt-[10px]'>
                  <p className="text-sm font-medium font-['Inter']"><VisibilityIcon/>&nbsp;{views}</p>
                  <p className= "text-sm font-medium font-['Inter'] ml-[140px]">{date}</p>
                  </div>
                  </div>
                </div>
                )
              })
             }
            <button className="w-[145px] h-[45px] mt-[20px] lg:ml-[1230px] md:ml-[540px] bg-amber-500 rounded-[40px] border border-amber-500 justify-cente text-white text-base font-medium font-['Lexend']">Show More</button>
            </div>
          </div>
          </Content>
        {/* latest blogs ended */}

        {/* astrology started */}
        <Content id="Astrology" activeTab={activeTab}>
          <div className= {activeTab === "Astrology" ? "content active-content" : "content"}>
             <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] mt-[60px] lg:ml-[71px] md:ml-[40px]">Astrology</p>
             <div className="lg:flex lg:flex-wrap md:grid md:grid-cols-2 mt-[40px] lg:ml-[71px] md:ml-[40px]">
             {
              data.map(({ image, line, views, date}, index)=>{
                return(
                  <div className='card1 w-[329px] h-[269px] mr-[20px] relative mb-[20px]'>
                  <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                  <img src={image}/>
                  <div className='text absolute top-44 text-white ml-[28px]'>
                  <p className="w-[288.93px] text-xl font-medium font-['Inter']">{line}</p>
                  <div className='flex mt-[10px]'>
                  <p className="text-sm font-medium font-['Inter'] "><VisibilityIcon/>{views}</p>
                  <p className= "text-sm font-medium font-['Inter'] ml-[140px]">{date}</p>
                  </div>
                  </div>
                </div>
                )
              })
             }
            <button className="w-[145px] h-[45px] mt-[20px] lg:ml-[1230px] md:ml-[540px] bg-amber-500 rounded-[40px] border border-amber-500 justify-cente text-white text-base font-medium font-['Lexend']">Show More</button>
            </div>
          </div>
          </Content>
        {/* astrology ended */}

        {/* end of container */}
    </div>
    </>
  )
}

export default Blogs
