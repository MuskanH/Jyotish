import { FormLabel } from '@mui/material';
import React, { useState, useEffect } from 'react'

const Report24 = () => {
  const initialvalues= { fullname: "", birthtime: "", birthdate: "", gender:"", birthcountry: "", birthplace:""};
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues)
   
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) =>{
    const errors = {};
    if (!values.fullname){
      errors.fullname = "Full Name is required"
    }
    return errors;
  }

  return (
    <div className='px-16'>
      <p className="text-amber-900 text-[26px] font-medium font-['Lexend'] py-7">2023 Yearly Report</p>
      <div className='lg:flex lg:flex-row  lg:justify-between lg:space-x-10'>
        <div className=''>
        <img src='/img/report7.png' className='w-[170rem] h-[420px] '/>
        </div>
       
        <div className=''>
          <p className=" text-neutral-700 text-[16px] font-medium font-['Lexend'] leading-normal">Placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla.  , vel feugiat nisi elit id massa. Proin nulla augue,Proin nulla augue dapibus.</p>
          <p className="py-[5px] text-neutral-700 text-[16px]  font-medium font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem .</p>
          <p className="py-[5px] text-neutral-700 text-[16px] font-medium font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet elit, Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit.Lorem ipsum dolor sit  amet .</p>
          <p className="py-[5px] text-neutral-700 text-[16px] font-medium font-['Lexend'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
      </div>

      <div className='py-[30px]'>
      <div className="lg:w-[1021px] lg:h-[287px] md:w-[676px] md:h-[260px] lg:mx-auto md:mx-auto   bg-white rounded-[5px] shadow border border-neutral-400">
         <p className=" md:text-[18px] md:font-normal md:pl-[22px] md:pt-[15px] lg:pl-[22px] lg:pt-[15px] lg:text-[20px] lg:font-medium  font-['Lexend'] text-amber-900 ">Fill Your Details To Generate Your 2023 Yearly Report</p>
        
         <form className='md:flex md:flex-wrap' onSubmit={handleSubmit}>
          <div className='lg:mt-[26px] md:mt-[10px]'>
           <label className="text-neutral-700 lg:text-[16px] lg:font-medium  md:text-[14px] md:font-normal font-['Lexend'] md:pl-[22px] lg:pl-[21px]" htmlFor='fullname'>Full Name</label><br></br>
            <input type='text' name='fullname' placeholder='Name here...' value={formValues.fullname} onChange={handleChange} className='lg:w-[514px] lg:h-[45px] md:w-[300px] md:h-[28px] md:rounded-[3px] lg:rounded-[5px] shadow border border-neutral-400 hover:border-amber-500 lg:mt-[19px] lg:ml-[21px] lg:pl-[18px] md:pl-[10px] md:ml-[22px] md:mt-[10px]'/>
            <p>{formErrors.fullname}</p>
            </div>
            <div className='lg:mt-[26px] md:mt-[10px]'>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] md:pl-[16px] lg:pl-[21px]" htmlFor='birthtime'>Birth Time</label><br></br>
            <input type='time' name='birthtime' placeholder='9:00 PM' value={formValues.birthtime} onChange={handleChange} className='lg:w-52 lg:h-[45px] md:w-36 md:h-[28px] lg:rounded-[5px] md:rounded-[3px] shadow border border-neutral-400 hover:border-amber-500 lg:ml-[20px] lg:mt-[19px] lg:pl-[18px] md:pl-[10px] md:ml-[16px] md:mt-[10px] text-neutral-400' />
            </div>
            <div className='lg:mt-[26px] md:mt-[10px]'>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend']  md:pl-[16px] lg:pl-[21px]" htmlFor='birthdate'>Birth Date</label><br></br>
            <input type='date' name='birthdate' placeholder='dd/mm/yyyy' value={formValues.birthdate} onChange={handleChange} className='lg:w-[212px] lg:h-[45px] lg:rounded-[5px] md:w-[160px] md:h-[28px] md:rounded-[3px] shadow border border-neutral-400 hover:border-amber-500 text-neutral-400 lg:ml-[20px] lg:mt-[19px] lg:pl-[18px] md:pl-[10px] md:ml-[16px] md:mt-[10px]'/>
            </div>
            <div>
            <p className="text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] md:pl-[22px] lg:pl-[21px] lg:mt-[26px] md:mt-[10px]">Gender</p>
            
            <input type='radio' name='gender' value={formValues.male} onChange={handleChange} className='lg:w-5 lg:h-5 md:w-3 md:h-3 rounded-full border hover:border-amber-500 border-zinc-400 lg:mt-[24px] lg:ml-[20px] lg:mr-[8px] md:mt-[10px] md:ml-[22px] md:mr-[6px]'/>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] lg:mt-[18px]" htmlFor='male'>Male</label>
            <input type='radio' name='gender' value={formValues.female} onChange={handleChange} className='lg:w-5 lg:h-5 md:w-3 md:h-3 rounded-full border hover:border-amber-500 border-zinc-400 lg:mt-[24px] lg:ml-[20px] lg:mr-[8px] md:mt-[10px] md:ml-[16px] md:mr-[6px]'/>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] lg:mt-[18px]" htmlFor='female'>Female</label>
            <input type='radio' name='gender' value={formValues.other} onChange={handleChange} className='lg:w-5 lg:h-5 md:w-3 md:h-3 rounded-full border hover:border-amber-500 border-zinc-400 lg:mt-[24px] lg:ml-[20px] lg:mr-[8px] md:mt-[10px] md:ml-[16px] md:mr-[6px]'/>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium  md:text-[14px] md:font-normal font-['Lexend'] lg:mt-[18px]" htmlFor='other'>Other</label>
            </div>
            <div className='lg:mt-[26px] md:mt-[10px]'>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] lg:pl-[42px] md:pl-[50px]" htmlFor='birthcountry'>Birth Country</label><br></br>
            <input type='text' name='birthcountry' placeholder='Select Country' value={formValues.birthcountry} onChange={handleChange} className='lg:w-[212px] lg:h-[45px] lg:rounded-[5px] md:w-[160px] md:h-[28px] md:rounded-[3px] shadow border hover:border-amber-500 border-neutral-400 text-neutral-400  lg:mt-[19px] lg:pl-[18px] lg:ml-[42px] md:ml-[50px] md:mt-[10px] md:pl-[10px] '/>
            </div>
            <div className='lg:mt-[26px] md:mt-[10px]'>
            <label className="text-neutral-700 lg:text-[16px] lg:font-medium md:text-[14px] md:font-normal font-['Lexend'] lg:pl-[19px] md:pl-[10px]" htmlFor='birthcountry'>Birth Place</label><br></br>
            <input type='text' name='birthplace' placeholder='Mumbai, India' value={formValues.birthplace} onChange={handleChange} className='lg:w-[212px] lg:h-[45px] lg:rounded-[5px] md:w-[160px] md:h-[28px] md:rounded-[3px] shadow border hover:border-amber-500 border-neutral-400 text-neutral-400  lg:mt-[19px] lg:pl-[18px] lg:ml-[19px] md:ml-[10px] md:mt-[10px] md:pl-[10px]'/>
            </div>
            
            <button className="lg:w-[210px] lg:h-[46px] md:w-[180px] md:h-[32px] lg:mt-[68px] lg:ml-[19px] md:mt-[20px] md:ml-[240px] bg-amber-500 rounded-lg border border-amber-500 text-center text-white lg:text-[20px] lg:font-medium md:text-[16px] md:font-normal font-['Lexend']">Download Now</button>
            
         </form>
      </div>
      </div>
    </div>
  )
}

export default Report24
