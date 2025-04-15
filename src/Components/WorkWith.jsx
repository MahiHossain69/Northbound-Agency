import React from 'react'
import { useState } from 'react';
import Who from "../assets/whoare.png"
import { LuClipboardPenLine } from "react-icons/lu";
import { FiMaximize2 } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { FiThumbsDown } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegFrown } from "react-icons/fa";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { FaUserXmark } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function WorkWith() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <section className='px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[150px] py-12 sm:py-16 md:py-24'>
      <div className="">
        <div className="container mx-auto">

          <div className="flex xs:block sm:block sm:text-center  xs:text-center   items-center gap-2 mb-6 md:mb-8 animate-fade-in">
            <img className='w-[50px] xs:mb-[15px] sm:mb-[15px] sm:mx-auto xs:mx-auto' src={Who} />
            <span className="text-black  font-semibold font-mono text-[15px]">What Is The Difference?</span>
          </div>

          {/* Main Title Section */}
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between  lg:text-left lg:items-start gap-8 mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-black font-kameron text-[28px] sm:text-[36px] md:text-[45px] font-semibold">When people</span>
              <div className="flex items-center gap-3">
                <span
                  className={`${isToggled ? "text-blue-600" : "text-red-500"}  font-kameron text-[45px] font-semibold transition-colors duration-300`}
                >
                  {isToggled ? "do" : "don't"}
                </span>
                <button
                  onClick={handleToggle}
                  className={`relative w-20 h-10 rounded-full p-1 transition-all duration-300 ease-in-out transform hover:scale-105 ${isToggled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                >
                  <div
                    className={`absolute w-8 h-8 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out ${isToggled ? 'translate-x-10' : 'translate-x-0'
                      }`}
                  ></div>
                </button>
              </div>
              <span className="text-black font-kameron text-[45px] font-semibold">work with us.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
              <p className="w-full sm:w-[300px] text-[14px] sm:text-[15px] font-mono font-medium">
                Expect creative solutions, clear communication, and results tailored to your vision when working with us.
              </p>
              <div className="flex mx-auto items-center bg-[#0071E3] rounded-full w-[140px] sm:w-[160px] h-[40px] sm:h-[45px]">
                <button className=" text-[11px] sm:text-[12px] text-white font-semibold pl-[15px] sm:pl-[25px] text-center rounded-full xs:hover:w-[130px] flex items-center gap-2 hover:text-[#000] hover:bg-white hover:w-[120px] sm:hover:w-[150px] ease-in-out duration-500 hover:h-[32px] hover:text-[12px] hover:ml-[5px]">
                Work with us
                  <span className="bg-white rounded-full w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] pt-[7px] sm:pt-[9px] pl-[7px] sm:pl-[8px] ml-[6px] sm:ml-[8px]">
                    <FaArrowRight className=" text-black" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {isToggled ? (
              // Positive scenarios
              <>
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-50 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <LuClipboardPenLine className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-black">Creative Skills</h3>
                  <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] font-normal">Unique designs crafted for your brand, engaging users with cutting-edge visuals</p>
                </div>

                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-50 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <FiMaximize2 className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-black">Responsive Designs</h3>
                  <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] font-normal">Delivering flawless experiences on every device, boosting user engagement and satisfaction.</p>
                </div>

                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-50 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <FaSearch className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-black">SEO Optimization</h3>
                  <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] font-normal">Enhancing your online visibility with strategies that improve search engine rankings.</p>
                </div>

                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-50 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <FaUsers className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-black">Exceptional Support</h3>
                  <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] font-normal">Offering committed support throughout and after project completion to guarantee client satisfaction</p>
                </div>

                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-50 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IoIosTimer className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-black">Quick Turnaround</h3>
                  <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] font-normal">Consistently meeting deadlines and delivering dependable services without sacrificing quality or efficiency.</p>
                </div>

                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-50 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <FaCode className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-600"/>
                  </div>
                  <h3 className="font-kameron font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-black">Custom Solutions</h3>
                  <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] font-normal">Designing custom websites tailored to your needs, improving functionality and user experience.</p>
                </div>
              </>
            ) : (
              // Negative scenarios
              <>
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <FaRegCopy className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[18px] text-black">Generic Designs</h3>
                  <p className="font-mono text-[16px] font-normal">Using the same old uninspired design, that don't set your brand apart in a competitive market.</p>
                </div>

                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <FiThumbsDown className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[18px] text-black">Poor User Experience</h3>
                  <p className="font-mono text-[16px] font-normal">Teams struggling to collaborate effectively, hindering goal achievement and success.</p>
                </div>

                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <IoEyeOffOutline className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[18px] text-black">Low Visibility</h3>
                  <p className="font-mono text-[16px] font-normal">Low Visibility can limit your reach. We improve SEO to boost your website and drive more traffic</p>
                </div>

                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <FaRegFrown className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[18px] text-black">Limited Functionality</h3>
                  <p className="font-mono text-[16px] font-normal">Limited Functionality can hinder your project. We offer solutions for peak performance and flexibility.</p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <FaRegCalendarXmark className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[18px] text-black">Missed Deadlines</h3>
                  <p className="font-mono text-[16px] font-normal">Poorly executed processes waste time and money with inefficient and bad methods.</p>
                </div>

                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-red-50 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <FaUserXmark className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-red-500" />
                  </div>
                  <h3 className="font-kameron font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-black">Inadequate Support</h3>
                  <p className="font-mono text-[14px] sm:text-[15px] md:text-[16px] font-normal">Frequent conflicts disrupt teamwork and hinder productivity and your success.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkWith
