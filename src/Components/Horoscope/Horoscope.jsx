import React, { useState, useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';




const signs= [
    {
        sign: "/img/sign1.png",
        signName: "Aries",
        time: "March 21 - April 20",
        name: "Aries Horoscope March 21 - April 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign1.png",
        
    },
    {
        sign: "/img/sign2.png",
        signName: "Tauras",
        time: "April 21 - May 20",
        name: "Tauras Horoscope April 21 - May 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign2.png",
    },
    {
        sign: "/img/sign3.png",
        signName: "Gemini",
        time: "May 21 - June 20",
        name: "Gemini Horoscope May 21 - June 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign3.png",
    },
    {
        sign: "/img/sign4.png",
        signName: "Cancer",
        time: "June 21 - July 20",
        name: "Cancer Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign4.png",
    },
    {
        sign: "/img/sign5.png",
        signName: "Leo",
        time: "July 21 - August 20",
        name: "Leo Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign5.png",
    },
    {
        sign: "/img/sign6.png",
        signName: "Virgo",
        time: "July 21 - August 20",
        name: "Virgo Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign6.png",
    },
    {
        sign: "/img/sign7.png",
        signName: "Libra",
        time: "July 21 - August 20",
        name: "Libra Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign7.png",
    },
    {
        sign: "/img/sign8.png",
        signName: "Scorpio",
        time: "July 21 - August 20",
        name: "Scorpio Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign8.png",
    },
    {
        sign: "/img/sign9.png",
        signName: "Sagittarius",
        time: "July 21 - August 20",
        name: "Saggitarius Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign9.png",
    },
    {
        sign: "/img/sign10.png",
        signName: "Capricorn",
        time: "July 21 - August 20",
        name: "Capricorn Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign10.png",
    },
    {
        sign: "/img/sign11.png",
        signName: "Aquarius",
        time: "July 21 - August 20",
        name: "Aquarius Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign11.png",
    },
    {
        sign: "/img/sign12.png",
        signName: "Pisces",
        time: "July 21 - August 20",
        name: "Pisces Horoscope June 21 - July 20",
        horoscope: "Sometimes, Aries natives get highly motivated and strong-opinionated, which might get them into problems easily. However, sometimes the same dominant factor can help them win some extremely hard battles in their lives. The Aries yearly horoscope 2023 predicts that even though you would be on your impulses, the year will be a strong one for you. Sometimes, it would add to your charm, while sometimes, it might challenge you to become better in life. Planetary support would be there with you. But, the year would make you more prepared for the upcoming hurdles and situations in your life. Hard times are to test you. Battling the ups and the downs will be too many. But you are Aries, and you know how to deal with the emotional as well as physical ups and downs. However, beware of some issues that may come with Rahu in the third quarter. You can rely on Jupiter as it would be an aid to your life all through the year. Make some plans on doing things with the abundance that will come with the change of planetary motions in the second half of 2023 for Aries men and women. Up for interesting beginnings and a roller coaster ride on the parallel? Well, Aries hit the jam in the year your way.",
        link: "Know More",
        img2: "/img/sign12.png",
    },
 ]

    


const Horoscope = () => {
    const [popUp, setPopUp] = useState([])
    const changeContent= (sign)=>{
         setPopUp([sign]);
         setPopUpToggle(!popUpToggle)
    }
    const [popUpToggle, setPopUpToggle] = useState(false);
  return (
    <div className='ml-3.5 mt-10'>
 <h2 className= "text-amber-900 text-[26px] font-medium font-['Lexend'] heading">View your Horoscope</h2>
            <div className='container flex flex-row flex-wrap mt-[39px]'>
                {
                    signs.map((sign, index)=>{
                        return(
                            <>
                            <div className='signCard w-[212px] h-[212px] left-0 top-0 bg-white rounded-[5px] shadow-inner border border-neutral-400 border-opacity-50 
                            flex flex-col justify-center items-center ml-5 mb-5'  key={sign.index}  onClick={()=> changeContent(sign)} >
                              <img src={sign.sign} className="sign"/>
                              <p className="signName text-black text-base font-normal font-['Poppins'] tracking-tight mt-[22px]">{sign.signName}</p>
                              <p className="time text-black text-base font-bold font-['Lexend'] tracking-tight mt-[9px]">{sign.time}</p>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            {popUpToggle && <> 
            {popUp.map((pop)=>{
                return(
            <div className=" blogCard w-[1341px] h-[434px] bg-white rounded-[10px] shadow mt-10 ml-10"  key={pop.index}>
            <div className="w-[45px] h-[45px] bg-gray-100 rounded-full flex justify-center items-center absolute ml-[1318px] mb-[430px]" onClick={changeContent}>
               <CloseIcon className='w-6 h-6'/>
            </div>
            <p className="nameDate text-amber-900 text-xl font-semibold font-['Lexend'] tracking-tight ml-[39px] pt-[31px]">{pop.name}</p>
            <div className='signDetails flex'>
                <div className='img flex justify-center items-center w-[225px] h-[225px] bg-gray-100 rounded-md border border-neutral-400 mt-[57px] ml-[75px]'>
            <img src={pop.img2} className='w-4/5 h-3/5 '/>
            </div>
            <p className="mt-[52px] ml-[43px] w-[960px] h-[248px] text-neutral-700 text-sm font-medium font-['Poppins'] leading-[24.85px] tracking-tight">{pop.horoscope}</p>
            </div>
            <p className="link text-amber-500 text-lg font-semibold font-['Lexend'] underline ml-[343px] mt-[16px]">{pop.link}<ArrowForwardIcon className="text-amber-500 text-lg font-semibold font-['Inter'] underline"/></p>
            </div>
                )
            })}
       </>}
            
    </div>
  )
}

export default Horoscope

 

  
