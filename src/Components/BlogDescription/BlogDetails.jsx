import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

const BlogDetails = () => {
  return (
    <>
      <p className="lg:w-[907px] md:w-[700px] text-amber-900 text-[26px] font-semibold font-['Lexend'] lg:ml-[71px] md:ml-[40px] mt-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="container lg:flex-row lg:flex md:flex md:flex-col mt-[15px]">
        <div className="one flex flex-col lg:ml-[71px] md:ml-[40px]">
         <img src='/img/image2.png' className='lg:w-[908px] md:w-[700px] lg:h-[507px] md:h-[350px] object-cover'/>
         <p className="lg:w-[907px] md:w-[700px] lg:h-24 text-neutral-700 text-base font-normal font-['Lexend'] leading-normal lg:mt-[14px] md:mt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est.<br></br>placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus. <br></br> Id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. </p>
         <p className="lg:w-[907px] md:w-[700px] lg:h-24 text-neutral-700 text-base font-normal font-['Lexend'] leading-normal lg:mt-[110px] md:mt-[20px]">Maecenas faucibus neque in nulla mollis interdum. Quisque quis pellentesque enim, vitae pulvinar purus. Quisque vitae suscipit risus. Curabitur scelerisque magna a interdum pretium.<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis.</p>
        </div>
        <div className="two lg:flex lg:flex-col md:flex md:flex-row md:mt-[30px] lg:mt-[0px] md:ml-[20px]">
          <div className="flex flex-col lg:w-[444px] lg:h-[414px] md:w-[320px] md:h-[326px]  bg-white rounded-[5px] shadow border border-neutral-400 ml-[20px] ">
             <p className="w-[155px] h-7 text-amber-900 lg:text-xl font-normal md:text-lg  font-['Lexend'] lg:mt-[13px] lg:ml-[18px] md:mt-[8px] md:ml-[15px]">Latest Post</p>
             <div className="flex lg:mt-[18px] md:mt-[14px] lg:ml-[18px] md:ml-[14px]">
               <img src='/img/post1.png' className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]" />
               <p className="lg:w-[211px] lg:h-[74px] md:w-[140px] text-neutral-700 lg:text-base font-normal md:text-sm font-['Lexend'] leading-6 lg:ml-[18px] md:ml-[14px]">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
             <div className="flex mt-[10px] ml-[18px]">
               <img src='/img/post2.png'  className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]"/>
               <p className="lg:w-[211px] lg:h-[74px] md:w-[140px] text-neutral-700 lg:text-base font-normal md:text-sm font-['Lexend'] leading-6 lg:ml-[18px] md:ml-[14px]">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
             <div className="flex mt-[10px] ml-[18px]">
               <img src='/img/post3.png'  className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]"/>
               <p className="lg:w-[211px] lg:h-[74px] md:w-[140px] text-neutral-700 lg:text-base font-normal md:text-sm font-['Lexend'] leading-6 lg:ml-[18px] md:ml-[14px]">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
          </div>

          <div className="flex flex-col lg:w-[444px] lg:h-[414px] lg:mt-[20px] md:w-[320px] md:h-[326px] bg-white rounded-[5px] shadow border border-neutral-400 ml-[20px] ">
             <p className="w-[155px] h-7 text-amber-900 lg:text-xl font-normal md:text-lg  font-['Lexend'] lg:mt-[13px] lg:ml-[18px] md:mt-[8px] md:ml-[15px]">Latest Post</p>
             <div className="flex lg:mt-[18px] md:mt-[14px] lg:ml-[18px] md:ml-[14px]">
               <img src='/img/post4.png' className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]" />
               <p className="lg:w-[211px] lg:h-[74px] md:w-[140px] text-neutral-700 lg:text-base font-normal md:text-sm font-['Lexend'] leading-6 lg:ml-[18px] md:ml-[14px]">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
             <div className="flex mt-[10px] ml-[18px]">
               <img src='/img/post5.png'  className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]"/>
               <p className="lg:w-[211px] lg:h-[74px] md:w-[140px] text-neutral-700 lg:text-base font-normal md:text-sm font-['Lexend'] leading-6 lg:ml-[18px] md:ml-[14px]">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
             <div className="flex mt-[10px] ml-[18px]">
               <img src='/img/post6.png'  className="lg:w-[195px] lg:h-[107px] md:w-[140px] md:h-[80px]"/>
               <p className="lg:w-[211px] lg:h-[74px] md:w-[140px] text-neutral-700 lg:text-base font-normal md:text-sm font-['Lexend'] leading-6 lg:ml-[18px] md:ml-[14px]">Vestibulum mollis nunc a molestie dictum venenatis  felis scelerisque.</p>
             </div>
          </div>

        </div>
      </div>

      <p className="text-amber-900 text-[26px] font-semibold font-['Lexend'] lg:mt-[50px] lg:ml-[71px] md:mt-[30px] md:ml-[40px]">Related Posts</p>
      <div className='lg:flex md:flex-wrap md:flex lg:mt-[40px] lg:ml-[71px] md:mt-[30px] md:ml-[40px]'>
             <div className='card1 w-[329px] h-[269px] mr-[20px] relative mb-[20px]'>
                <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                <img src="/img/image2.png"/>
                <div className='text absolute top-44 text-white ml-[28px]'>
                <p className="w-[288.93px] text-xl font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex mt-[10px]'>
                <p className="text-sm font-medium font-['Inter'] "><VisibilityIcon/>2839</p>
                <p className= "text-sm font-medium font-['Inter'] ml-[140px]">May 17, 2019</p>
                </div>
                </div>
              </div>

              <div className='card2 w-[329px] h-[269px] mr-[20px] relative mb-[20px]'>
              <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                <img src="/img/image3.png"/>
                <div className='text absolute top-44 text-white ml-[28px]'>
                <p className="w-[288.93px] text-xl font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex mt-[10px]'>
                <p className="text-sm font-medium font-['Inter'] "><VisibilityIcon/>2839</p>
                <p className= "text-sm font-medium font-['Inter'] ml-[140px]">May 17, 2019</p>
                </div>
                </div>
              </div>

              <div className='card3 w-[329px] h-[269px] mr-[20px] relative mb-[20px]'>
              <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                <img src="/img/image4.png"/>
                <div className='text absolute top-44 text-white ml-[28px]'>
                <p className="w-[288.93px] text-xl font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex mt-[10px]'>
                <p className="text-sm font-medium font-['Inter'] "><VisibilityIcon/>2839</p>
                <p className= "text-sm font-medium font-['Inter'] ml-[140px]">May 17, 2019</p>
                </div>
                </div>
              </div>

              <div className='card4 w-[329px] h-[269px] mr-[20px] relative mb-[20px]'>
              <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
                <img src="/img/image5.png"/>
                <div className='text absolute top-44 text-white ml-[28px]'>
                <p className="w-[288.93px] text-xl font-medium font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex mt-[10px]'>
                <p className="text-sm font-medium font-['Inter'] "><VisibilityIcon/>2839</p>
                <p className= "text-sm font-medium font-['Inter'] ml-[140px]">May 17, 2019</p>
                </div>
                </div>
              </div>
      </div>       
    </>
  )
}

export default BlogDetails
