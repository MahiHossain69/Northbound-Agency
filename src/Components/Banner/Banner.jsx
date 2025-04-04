import React from 'react'
import Container from '../Container'
import BanIcon from "../../assets/bannericon.png"
import BuildOne from "../../assets/buildimg1.png"
import BuildTwo from "../../assets/buildimg2.png"
import BuildThree from "../../assets/buildimg3.png"
import { FaArrowRight } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

function Banner() {
 
  return (
    <>
    <Container>
      <div className="relative overflow-hidden z-10 w-[1300px] container mx-auto ml-[45px] pt-32 pb-24">
        <div className="mt-[115px]">
          <img src={BanIcon} className='w-[40px]'/>
        </div>
        <div className="">
          <h1 className='font-serif text-[90px] text-white w-[500px] font-[600] leading-[1.1em] capitalize '>We Build</h1>
        </div>
        <div className="w-[150px] rounded-[100px] h-[60px] bg-gray-300 flex justify-center gap-[10px] mt-[15px] ">
          <div className="w-[30px] border-[2px] border-gray-100 rounded-full h-[30px] mt-[15px] ">
            <img className='w-[20px] ml-[3.5px] mt-[2px] ' src={BuildOne}/>
          </div>
          <div className="w-[30px] border-[2px] border-gray-100 rounded-full h-[30px] mt-[15px] ">
            <img className='w-[20px] ml-[3.5px] mt-[2px] ' src={BuildTwo}/>
          </div>
          <div className="w-[30px] border-[2px] border-gray-100 rounded-full h-[30px] mt-[15px] ">
            <img className='w-[20px] ml-[3.5px] mt-[2px] ' src={BuildThree}/>
          </div>
        </div>
        <div className="font-serif text-[90px] text-white font-[600] mt-[-80px] ml-[175px] leading-[1.1em] capitalize">
          <h1>Together</h1>
        </div>
        <div className="flex gap-[15px] mt-[20px]">
           <div className="flex items-center bg-[#0071E3] rounded-full w-[160px] h-[45px]">
                     <button className=" text-[18px] text-white font-semibold  pl-[25px] text-center rounded-full  flex items-center gap-2 hover:text-[#000] hover:bg-white hover:w-[150px] ease-in-out duration-500 hover:h-[32px] hover:ml-[5px]">
                     Services
                       <span className="bg-white rounded-full w-[30px] h-[30px] pt-[6px] pl-[6px] ml-[8px] ">
                         <FaArrowRight className=" text-black" />
                       </span>
                     </button>
                 </div>
           <div className="flex items-center bg-transparent border-[2px] border-white rounded-full w-[163px] h-[45px]">
                     <button className=" text-[18px] text-white font-semibold  pl-[25px] text-center rounded-full  flex items-center gap-2 hover:text-[#000] hover:bg-white hover:w-[150px] ease-in-out duration-500 hover:h-[32px] hover:ml-[5px]">
                     About us
                       <span className="bg-white rounded-full w-[30px] h-[30px] pt-[6px] pl-[6px] ml-[8px] ">
                         <FaArrowRight className=" text-black" />
                       </span>
                     </button>
                 </div>
              
        </div>
        
        <div className="text-white font-mono font-[500] text-[16px] leading-[24px] w-[310px] mt-[-55px] ml-[545px]">
          <p>
          Our approach is straightforward, focused, and designed to make a real impact for your business.</p>
        </div>
     
      </div>
     
        
       <div className="relative text-white font-mono font-[600] text-[20px] tracking-wider	 capitalize bg-[#0071E3] h-[60px] pt-[15px] w-[100%] mt-[-70px] rounded-b-3xl">
        <Marquee>
        New creative   ✦    Agency    ✦    Development    ✦    studio   ✦    Website    ✦     Strategy    ✦    wordpress   ✦    branding   ✦    design   ✦   webdesign   ✦   
        </Marquee>
       </div>
    </Container>
    </>
   
  )
}

export default Banner
