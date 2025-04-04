import React from 'react'
import { useState } from 'react';
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

function WorkWith() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
    };
  return (
   <section className='p-[150px]'>
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-6 md:mb-8 animate-fade-in">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
          <span className="text-gray-600 font-medium">What Is The Difference?</span>
        </div>

        {/* Main Title Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-wrap items-center gap-3 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">When people</span>
            <div className="flex items-center gap-3">
              <span 
                className={`${isToggled ? "text-blue-600" : "text-red-500"} transition-colors duration-300`}
              >
                {isToggled ? "do" : "don't"}
              </span>
              <button 
                onClick={handleToggle}
                className={`relative w-20 h-10 rounded-full p-1 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  isToggled ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <div 
                  className={`absolute w-8 h-8 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isToggled ? 'translate-x-10' : 'translate-x-0'
                  }`}
                ></div>
              </button>
            </div>
            <span className="text-gray-900">work with us.</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
            <p className="max-w-md text-gray-600 text-lg">
              Expect creative solutions, clear communication, and results tailored to your vision when working with us.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 whitespace-nowrap">
              Work with us
              <span className="transform rotate-[-45deg] transition-transform group-hover:rotate-[-90deg]">→</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {isToggled ? (
            // Positive scenarios
            <>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <LuClipboardPenLine className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Creative Skills</h3>
                <p className="text-gray-600 leading-relaxed">Unique designs crafted for your brand, engaging users with cutting-edge visuals</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FiMaximize2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Responsive Designs</h3>
                <p className="text-gray-600 leading-relaxed">Delivering flawless experiences on every device, boosting user engagement and satisfaction.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaSearch className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">SEO Optimization</h3>
                <p className="text-gray-600 leading-relaxed">Enhancing your online visibility with strategies that improve search engine rankings.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaUsers className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Exceptional Support</h3>
                <p className="text-gray-600 leading-relaxed">Offering committed support throughout and after project completion to guarantee client satisfaction</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <IoIosTimer className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quick Turnaround</h3>
                <p className="text-gray-600 leading-relaxed">Consistently meeting deadlines and delivering dependable services without sacrificing quality or efficiency.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaCode className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Solutions</h3>
                <p className="text-gray-600 leading-relaxed">Designing custom websites tailored to your needs, improving functionality and user experience.</p>
              </div>
            </>
          ) : (
            // Negative scenarios
            <>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaRegCopy className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Generic Designs</h3>
                <p className="text-gray-600 leading-relaxed">Using the same old uninspired design, that don't set your brand apart in a competitive market.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FiThumbsDown className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Poor User Experience</h3>
                <p className="text-gray-600 leading-relaxed">Teams struggling to collaborate effectively, hindering goal achievement and success.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <IoEyeOffOutline className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Low Visibility</h3>
                <p className="text-gray-600 leading-relaxed">Low Visibility can limit your reach. We improve SEO to boost your website and drive more traffic</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaRegFrown className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Limited Functionality</h3>
                <p className="text-gray-600 leading-relaxed">Limited Functionality can hinder your project. We offer solutions for peak performance and flexibility.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaRegCalendarXmark className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Missed Deadlines</h3>
                <p className="text-gray-600 leading-relaxed">Poorly executed processes waste time and money with inefficient and bad methods.</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaUserXmark className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Inadequate Support</h3>
                <p className="text-gray-600 leading-relaxed">Frequent conflicts disrupt teamwork and hinder productivity and your success.</p>
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
