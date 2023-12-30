import React from 'react'
import { useState } from 'react';
import "./Report.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Navbar from '../Navbar/Nav';
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../cart_content';



const data2=[
  {
    image: "/img/report7.png",
    title: "2023 Yearly Report",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report8.png",
    title: "Birth Horoscope",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report9.png",
    title: "Love Horoscope",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report10.png",
    title: "Friendship Report",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report11.png",
    title: "Moon Sign",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report12.png",
    title: "Sun Sign",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report7.png",
    title: "2023 Yearly Report",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report8.png",
    title: "Birth Horoscope",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report9.png",
    title: "Love Horoscope",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report10.png",
    title: "Friendship Report",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report11.png",
    title: "Moon Sign",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  },
  {
    image: "/img/report12.png",
    title: "Sun Sign",
    customers: "Trusted by 4467 customers",
    tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
    price: "8999",
  }

]



const Report = () => {

  const product=[
    {
      image: "/img/report1.png",
      title: "2024 Highlights",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report2.png",
      title: "2024 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report3.png",
      title: "2024 Career Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report4.png",
      title: "2024 Monthwise Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report5.png",
      title: "Love Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report6.png",
      title: "Married Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report1.png",
      title: "2024 Highlights",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report2.png",
      title: "2024 Yearly Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report3.png",
      title: "2024 Career Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report4.png",
      title: "2024 Monthwise Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report5.png",
      title: "Love Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    },
    {
      image: "/img/report6.png",
      title: "Married Life Report",
      customers: "Trusted by 4467 customers",
      tagline: "Invite Peace and Power with One Mukhi Rudraksh!",
      price: "8999",
    }
  
  ]
  const { addToCart } = useCartContext();
  const [activeTab, setActiveTab] = useState("tab1");
 
  const [qty, setQty] = useState(0)
  const onAdd = ()=>{
    setQty(qty+1)
  }
  return (
    
    <>
    <nav className="lg:px-10 bg-[#FFF]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/"> 
          <div className="">
            <img
              src="img/Logo.png"
              className="w-[270px] h-[71px]   object-cover"
              alt="logo"
            />
          </div>
          </a>
          <div class=" w-full md:block md:w-auto" id="navbar-default">
            <div class=" flex space-x-4 mx-auto items-center p-4    ">
              <div className="">
                <h1 className="text-[14px] font-normal not-italic leading-normal text-[var(--Main-Color,#3A3A3A)]">
                  Balance :{" "}
                  <span class="text-[14px] font-semibold not-italic leading-normal text-[var(--Main-Color,#FFA300)]">
                    {" "}
                    ₹ 1000
                  </span>
                </h1>
              </div>

              <div className="flex items-center justify-center">
                <button class="flex rounded-[34px] border bg-[var(--Main-Color,#FFA300)] px-4 py-2">
                  <div className="svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.125 7.91526C8.19093 7.91526 9.84697 6.23779 9.84697 4.14513C9.84697 2.05247 8.19093 0.375 6.125 0.375C4.05907 0.375 2.40303 2.05247 2.40303 4.14513C2.40303 6.23779 4.05907 7.91526 6.125 7.91526ZM6.125 9.76139C3.09067 9.76139 0.5 10.2465 0.5 12.1848C0.5 14.1224 3.0749 14.625 6.125 14.625C9.15858 14.625 11.75 14.1399 11.75 12.2016C11.75 10.2633 9.1751 9.76139 6.125 9.76139ZM13.9235 5.6909H14.8258C15.1972 5.6909 15.5 5.99798 15.5 6.37461C15.5 6.75124 15.1972 7.05832 14.8258 7.05832H13.9235V7.94129C13.9235 8.31792 13.6214 8.625 13.2492 8.625C12.8778 8.625 12.575 8.31792 12.575 7.94129V7.05832H11.6742C11.3021 7.05832 11 6.75124 11 6.37461C11 5.99798 11.3021 5.6909 11.6742 5.6909H12.575V4.80871C12.575 4.43208 12.8778 4.125 13.2492 4.125C13.6214 4.125 13.9235 4.43208 13.9235 4.80871V5.6909Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="px-2">
                    <h5 className="text-[12px] font-semibold not-italic leading-normal text-[var(--Pure-White,#fff)]">
                      Log in / Sign Up
                    </h5>
                  </div>
                </button>
              </div>

              <div className="dropdown">
                <select className="text-[14px] font-normal not-italic leading-normal text-[#3A3A3A]">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Gujarati</option>
                </select>
              </div>
              <div>
                <select className="text-[14px] font-normal not-italic leading-normal text-[#3A3A3A]">
                  <option>Help</option>
                  <option>Help</option>
                </select>
              </div>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M5.17762 5L7.51141 20.1696C7.52839 20.2948 7.56392 20.4141 7.61513 20.5247C7.76928 20.8576 8.06557 21.1112 8.4261 21.2076C8.53624 21.2372 8.65167 21.252 8.76972 21.25H22.5C23.052 21.25 23.5387 20.8879 23.6973 20.3592L27.4473 7.85919C27.5608 7.48072 27.4887 7.07085 27.2529 6.75384C27.017 6.43683 26.6451 6.25 26.25 6.25H7.89934L7.48823 3.57774C7.47283 3.46602 7.44266 3.359 7.39976 3.25873C7.32189 3.07613 7.20266 2.91797 7.05537 2.79399C6.91871 2.67875 6.75701 2.59228 6.57959 2.54391C6.46792 2.51333 6.35075 2.49802 6.23087 2.5H3.75C3.05964 2.5 2.5 3.05965 2.5 3.75C2.5 4.44036 3.05964 5 3.75 5H5.17762ZM9.82242 18.75L8.28396 8.75001H24.57L21.57 18.75H9.82242Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M12.5 25C12.5 26.3807 11.3807 27.5 10 27.5C8.61929 27.5 7.5 26.3807 7.5 25C7.5 23.6193 8.61929 22.5 10 22.5C11.3807 22.5 12.5 23.6193 12.5 25Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M23.75 25C23.75 26.3807 22.6307 27.5 21.25 27.5C19.8693 27.5 18.75 26.3807 18.75 25C18.75 23.6193 19.8693 22.5 21.25 22.5C22.6307 22.5 23.75 23.6193 23.75 25Z"
                    fill="#3A3A3A"
                  />
                </svg>
              </div>
              <div class="relative">
                <div class="absolute bottom-0 right-[0.5rem] border bg-[#DB042A] rounded-full w-[15px] h-[15px]">
                  <span className="block top-2 text-[10px] not-italic font-normal leading-normal text-[var(--Pure-White,#FFF)]">
                    {qty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
   <div className='flex justify-center items-center'>
      <ul className="flex w-fit justify-center flex-row items-center  bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-full overflow-hidden ">
        <TabNavItem
          title="2024 Reports"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Free Reports"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
    </div>
    <div className='content-tabs'>
    <TabContent id="tab1" activeTab={activeTab}>
    <div className= {activeTab === "tab1" ? "content active-content" : "content "}>
       <div className='container lg:mt-[73px] md:mt-[73px] lg:[mx-auto] lg:mr-[80px] md:mx-auto grid lg:grid-rows-4 lg:grid-cols-3'>
       {product.map(({ image, title, customers, tagline, price }, index)=>{
        return(
          <div className="w-[470px] h-[250px] bg-neutral-50 rounded-[10px] shadow md:mb-[18px] lg:mx-auto md:mx-auto md:flex relative" key={index}>
             <ShareOutlinedIcon className='absolute top-[14px] right-[12px]'/>
            <img src={image} className='w-[205px] h-[240px] md:pl-[10px] md:pt-[15px] object-cover rounded-[5px]'/>
            <div> 
            <p className=" text-amber-900 text-xl font-medium font-['Lexend'] md:pl-[15px] md:pt-[15px]">{title}</p>
            <span className="text-xl text-amber-500 md:pl-[15px]"><StarRateIcon/>  <StarRateIcon/>  <StarRateIcon/>  <StarRateIcon/>  <StarRateIcon/></span> <span className="text-neutral-700 text-xs font-normal font-['Lexend'] pl-[5px]">5 Rating</span>
            <p className="text-cyan-500 text-xs font-normal font-['Lexend'] md:pl-[15px] md:pt-[6px]">{customers}</p>
            <p className="w-[207px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-normal md:pt-[21px] md:pl-[15px]">{tagline}</p>
            <p className="opacity-80 text-neutral-700 text-base font-medium font-['Lexend'] leading-7 md:pl-[15px] md:pt-[16px]">Price: &#8377;<span className="text-neutral-700 text-base font-medium font-['Lexend'] leading-7">{price}</span></p>
            <div className='flex'>
            <button className="w-[131px] h-[32px] bg-amber-500 rounded-lg border border-amber-500 text-center text-white text-base font-medium font-['Lexend'] md:mt-[6px] md:ml-[15px]">Buy Now</button>
            <NavLink to="/cart" onClick={()=> addToCart( image, title, customers, tagline, price, index)}>
            <button className='ml-[11px] mt-[8px] w-[58px] h-[31px] rounded-lg border border-cyan-500'><img src='/img/Shop Icon.png' className='pl-[18px]'/></button>
            </NavLink>
            </div>
            </div>
          </div>
        )
       })}
       </div>
      </div>
      </TabContent>
      <TabContent id="tab2" activeTab={activeTab}>
      <div className= {activeTab === "tab2" ? "content active-content" : "content "}>
       <div className='container lg:mt-[73px] md:mt-[73px] lg:[mx-auto] lg:mr-[80px] md:mx-auto grid lg:grid-rows-4 lg:grid-cols-3'>
       {data2.map(({ image, title, customers, tagline, price }, index)=>{
        return(
          <div className="w-[460px] h-[250px] bg-neutral-50 rounded-[10px] shadow md:mb-[18px] lg:mx-auto md:mx-auto md:flex relative">
            <ShareOutlinedIcon className='w-[24px] h-[24px] absolute top-[14px] right-[12px]'/>
            <img src={image} className='w-[205px] h-[240px] md:pl-[10px] md:pt-[15px] object-cover rounded-[5px]'/>
            <div> 
            <p className=" text-amber-900 text-xl font-medium font-['Lexend'] md:pl-[15px] md:pt-[15px]">{title}</p>
            <span className="text-xl text-amber-500 md:pl-[15px]"><StarRateIcon/>  <StarRateIcon/>  <StarRateIcon/>  <StarRateIcon/>  <StarRateIcon/></span> <span className="text-neutral-700 text-xs font-normal font-['Lexend'] pl-[5px]">5 Rating</span>
            <p className="text-cyan-500 text-xs font-normal font-['Lexend'] md:pl-[15px] md:pt-[6px]">{customers}</p>
            <p className="w-[207px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-normal md:pt-[21px] md:pl-[15px]">{tagline}</p>
            <p className="opacity-80 text-neutral-700 text-base font-medium font-['Lexend'] leading-7 md:pl-[15px] md:pt-[16px]">Price:  &#8377;<span className="text-neutral-700 text-base font-medium font-['Lexend'] leading-7">{price}</span></p>
            <div className='flex'>
            <button className="w-[131px] h-[32px] bg-amber-500 rounded-lg border border-amber-500 text-center text-white text-base font-medium font-['Lexend'] md:mt-[6px] md:ml-[15px]">Buy Now</button>
            <button className='ml-[11px] mt-[8px] w-[58px] h-[31px] rounded-lg border border-cyan-500'><img src='/img/download.png' className='pl-[14px]'/></button>
            </div>
            </div>
          </div>
        )
       })}
       </div>
      </div>
      </TabContent>
    </div>
    </>
  )
}

export default Report
