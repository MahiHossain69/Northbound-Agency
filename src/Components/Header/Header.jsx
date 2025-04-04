import React from 'react'
import Container from '../Container'
import Logo from "../../assets/navlogo.png"
import { FaArrowRight } from "react-icons/fa6";
import BannerImg from "../../assets/banner.png"


function Header() {
  return (
    

    
 
 <Container>
       <div className=" mt-[50px] ">
      
      <div className="relative">
      
        <div className="absolute ov inset-0 z-0">
          <img  src={BannerImg}  className="w-full   rounded-[25px] bg-blend-overlay"/>
         
        </div>

       
        <div className="relative z-10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between mt-[-65px]">
             
              <div className="flex  items-center justify-start ml-[-45px] mt-[-15px]">
                
                 <img className='w-[300px] bg-white rounded-[25px] p-[30px] mt-[50px] z-10' src={Logo}/>
              </div>

             
              <div className="hidden md:flex items-center space-x-2">
              
                <div className="pt-[50px]">
         <ul className='flex gap-[35px]'>
             <li className='font-sans cursor-pointer text-white text-[20px] font-semibold bg-none w-[120px] text-center h-[40px] rounded-[25px] pt-[5px] hover:bg-[#0071E3] ease-in-out duration-500 hover:text-[#fff]'>Home</li>
             <li className='font-sans cursor-pointer text-white text-[20px] font-semibold bg-none w-[120px] text-center h-[40px] rounded-[25px] pt-[5px] hover:bg-[#0071E3] ease-in-out duration-500 hover:text-[#fff]'>Services</li>
             <li className='font-sans cursor-pointer text-white text-[20px] font-semibold bg-none w-[120px] text-center h-[40px] rounded-[25px] pt-[5px] hover:bg-[#0071E3] ease-in-out duration-500 hover:text-[#fff]'>About us</li>
             <li className='font-sans cursor-pointer text-white text-[20px] font-semibold bg-none w-[120px] text-center h-[40px] rounded-[25px] pt-[5px] hover:bg-[#0071E3] ease-in-out duration-500 hover:text-[#fff]'>Our work</li>
             <div className="flex items-center bg-[#0071E3] rounded-full w-[175px] h-[45px]">
           <button className=" text-[18px] text-white font-semibold  pl-[25px] text-center rounded-full  flex items-center gap-2 hover:text-[#000] hover:bg-white hover:w-[165px] ease-in-out duration-500 hover:h-[32px] hover:ml-[5px]">
             Contact us
             <span className="bg-white rounded-full w-[30px] h-[30px] pt-[6px] pl-[6px] ml-[8px] ">
               <FaArrowRight className=" text-blue-500 hover:text-black"  />
             </span>
           </button>
       </div>
          
           
         </ul>
      </div>
              </div>

            
            </div>
          </div>
        </div>
        </div>
        </div>
        </Container>
    










  )
}

export default Header
