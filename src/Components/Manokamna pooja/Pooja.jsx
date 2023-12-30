import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import TranslateIcon from '@mui/icons-material/Translate';
import VerifiedIcon from '@mui/icons-material/Verified';

const Pooja = () => {
    return (
        <div>
            <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] lg:mt-74px md:mt-[74px] lg:ml-[70px] md:ml-[45px]">Manokamna Pooja</p>
            <div className='container lg:flex lg:flex-row md:flex md:flex-col'>
                <div className='lg:ml-[70px] lg:mt-[20px] md:mt-[20px] md:mx-auto'>
                    <img src='/img/pooja1.jpg' className='lg:w-[676px] lg:h-[430px] md:w-[676px] md:h-[430px] rounded-[5px] lg:object-cover md:object-cover' />
                </div>
                <div className='flex flex-col  lg:ml-[20px] md:mx-auto'>
                    <p className="lg:w-[674px] md:w-[674px] lg:mt-[10px] md:mt-[10px] text-amber-900 lg:text-[26px] md:text-[20px] lg:font-medium md:font-normal font-['Lexend']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
                    <p className="lg:w-[158px] lg:mt-[12px] md:mt-[8px] text-amber-500 lg:text-sm md:text-xs lg:font-semibold md:font-medium font-['Poppins']">20 December 2023</p>
                    <p className="lg:w-[672px] md:w-[672px] lg:mt-[24px] md:mt-[20px] text-neutral-700 lg:text-base md:text-sm lg:font-normal md:font-light font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet. </p>
                    <p className="lg:w-[671px] md:w-[671px] lg:mt-[30px] md:mt-[26px] text-neutral-700 lg:text-base md:text-sm lg:font-normal md:font-light font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="lg:w-[672px] md:w-[672px] lg:mt-[13px] md:mt-[9px] text-neutral-700 lg:text-base md:text-sm lg:font-normal md:font-light font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
                    <div className='buttons flex lg:mt-[14px] md:mt-[20px]'>
                        <div className="w-[331px] h-[50px] px-[110px] py-[15px] bg-red-600 rounded-[40px]  border border-red-600 justify-center items-center gap-5 inline-flex mr-[15px]">
                            <p className="text-white text-base font-semibold font-['Lexend']">02  Days  Left</p>
                        </div>
                        <button className="w-[331px] h-[50px]  bg-amber-500 rounded-[40px] border border-amber-500  text-white text-base font-semibold font-['Lexend']">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="card lg:w-[928px] lg:h-[277px] md:w-[676px] md:h-[200px] bg-white rounded-[5px] lg:mt-[61px] md:mt-[60px] shadow mx-auto flex">
                <div className='flex flex-col '>
                    <img src='/img/astro1.jpg' className='lg:w-[212px] lg:h-[212px] md:w-[140px] md:h-[140px] rounded-[5px] lg:ml-[14px] lg:mt-[13px] md:ml-[14px] md:mt-[13px]' />
                    <div className='flex'>
                        <div className='text-amber-500 lg:mt-[9px] lg:ml-[25px] md:mt-[6px] md:ml-[14px]'>
                        <StarRateIcon sx={{ '@media (min-width:600px)': {fontSize: '16px', },'@media (min-width:960px)': {fontSize: '24px', },}}/>
                        <StarRateIcon sx={{ '@media (min-width:600px)': {fontSize: '16px', },'@media (min-width:960px)': {fontSize: '24px', },}}/>
                        <StarRateIcon sx={{ '@media (min-width:600px)': {fontSize: '16px', },'@media (min-width:960px)': {fontSize: '24px', },}}/>
                        <StarRateIcon sx={{ '@media (min-width:600px)': {fontSize: '16px', },'@media (min-width:960px)': {fontSize: '24px', },}}/>
                        <StarRateIcon sx={{ '@media (min-width:600px)': {fontSize: '16px', },'@media (min-width:960px)': {fontSize: '24px', },}}/>
                        </div>
                        <p className="text-neutral-700 lg:text-sm md:text-xs lg:font-normal md:font-light font-['Lexend'] lg:ml-[18px] lg:mt-[14px] md:ml-[10px] md:mt-[12px]">5 Rating</p>
                    </div>
                </div>
               
                <div className='lg:ml-[20px] md:ml-[30px] relative'>
                <p className=" text-neutral-700 lg:text-lg lg:font-medium md:text-base md:font-normal font-['Lexend'] lg:mt-[15px] md:mt-[10px]">Abdullah Baghdadi</p>
                <VerifiedIcon className='lg:absolute md:absolute lg:top-[17px] lg:right-[26px] md:top-[12px] md:right-[0px] text-blue-400'/>
                <p className="w-[212px] h-6 text-neutral-700 lg:text-base lg:font-normal md:text-sm md:font-light font-['Lexend'] leading-normal lg:mt-[10px] md:mt-[6px]">Accomplished Astrologer </p>
                <div className='flex'>
                <TranslateIcon sx={{ '@media (min-width:600px)': {fontSize: '16px', },'@media (min-width:960px)': {fontSize: '20px', },}} className='text-neutral-700 lg:mt-[8px] md:mt-[5px]'/> 
                <p className=" text-neutral-700 lg:text-sm lg:font-normal md:text-xs md:font-light font-['Lexend'] lg:ml-[10px] md:ml-[6px] lg:mt-[10px] md:mt-[6px]">English , Hindi , Gujarati</p>
                </div>

                <div className='flex'>
                <p className=" text-neutral-700 lg:text-base lg:font-medium md:text-sm md:font-normal font-['Lexend'] lg:mt-[8px] md:mt-[5px]">Exp : </p>
                <p className=" text-neutral-700 lg:text-sm lg:font-normal md:text-xs md:font-light font-['Lexend'] lg:mt-[11px] md:mt-[7px] lg:ml-[5px] md:ml-[3px]">12 Years</p>
                </div>

                <p className="lg:w-[669px] md:w-[450px]  text-neutral-700 lg:text-base lg:font-normal md:text-sm md:font-light font-['Lexend'] leading-normal lg:mt-[13px] md:mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="lg:w-[669px] md:w-[450px] lg:h-[60px] md:h-[20px]  text-neutral-700 lg:text-base lg:font-normal md:text-sm md:font-light font-['Lexend'] leading-normal lg:mt-[8px] md:mt-[4px] md:overflow-hidden md:text-ellipsis md:truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Pooja
