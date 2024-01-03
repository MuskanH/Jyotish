import React from 'react'
import "./Testimonial.css"
import StarRateIcon from '@mui/icons-material/StarRate';

import { Navigation, Pagination,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//Data of reviews//
const data = [
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review.png",
        name: "Prateek Patel",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",   
        rate: "5/5",
        image: "/img/review2.png",
        name: "Priyanka Yadav",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review3.png",
        name: "Rohit Choudhary",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review4.png",
        name: "Isha Patel",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review.png",
        name: "Prateek Patel",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",   
        rate: "5/5",
        image: "/img/review2.png",
        name: "Priyanka Yadav",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review3.png",
        name: "Rohit Choudhary",
        date: "21 May 2023"
    },
    {
        review: "Found very near to happening with me, hope whatever predicted in future is in my favour, Very near to Happening hope whatever.",
        rate: "5/5",
        image: "/img/review4.png",
        name: "Isha Patel",
        date: "21 May 2023"
    }

]

//Testimonial component//
const Testimonial = () => {
    return (
        <div className='ml-3.5 mt-5'>
            <h2 className="text-amber-900 text-[26px] font-medium font-['Lexend'] heading">Testimonials</h2>
            <div className='container mt-9 flex flex-row'>
            <Swiper
                            modules={[Navigation, Pagination,  A11y]}
                           
                            slidesPerView={4}
                            navigation
                            pagination={{ clickable: true }}
                           
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                          >
                {
                    data.map(({ review, rate, image, name, date }, index) => {
                        return (
                           
                            <SwiperSlide>
                                <div className= " flex flex-col w-[328px] h-[200px] bg-white rounded-md shadow border border-stone-300 border-opacity-80 ml-5 boxShadow: 0px 4px 10px rgba(174.25, 174.25, 174.25, 0.25)" key={index}> 
                                    <p className= " review w-[292px] text-neutral-700 text-sm font-normal font-['Poppins'] mt-4 ml-5">{review}</p>
                                    <div className='ratings flex flex-row mt-2 ml-5'>
                        
                                        <StarRateIcon className='stars'/><StarRateIcon className='stars'/> <StarRateIcon className='stars'/> <StarRateIcon className='stars'/> <StarRateIcon className='stars'/> 
                                        <p className="rate w-[21px] text-neutral-700 text-[11px] font-light font-['Lexend'] ml-2 ">{rate}</p>
                                    </div>

                                    <div className='profile flex flex-row'>
                                        <img src={image} className="w-[50px] h-[50px] rounded-full ml-5 mt-4"/>
                                        <p className="name text-neutral-700 text-sm font-semibold font-['Lexend'] mt-7 ml-3">{name}</p>
                                        <p className="date text-neutral-400 text-xs font-medium font-['Lexend'] ml-10 mt-10 ">{date}</p>
                                    </div>
                                </div>
                                </SwiperSlide>
                               
                        )
                    })
                }
                 </Swiper>
            </div>
        </div>
    )

}

export default Testimonial