import React, { useEffect, useRef, useState } from 'react';
import Who from "../assets/whoare.png"
import { FaArrowRight } from "react-icons/fa6";
import Devo from "../assets/devo.png"
import Develop from "../assets/developbg.png"

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const calculateProgress = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Start animation when element is 20% into viewport
      const triggerPoint = viewportHeight * 0.2;
      const elementTop = rect.top;
      
      if (elementTop <= triggerPoint) {
        const progress = Math.min(
          Math.max((triggerPoint - elementTop) / (viewportHeight * 0.5), 0),
          1
        );
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    // Initial calculation
    calculateProgress();
    
    // Throttle scroll event
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateProgress, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateProgress);
    };
  }, []);

  // Calculate dynamic values based on scroll progress
  const scale = 1 + (scrollProgress * 0.3);
  const width = 62 + (scrollProgress * (60 - 62)); // Simplified width calculation from 62% to 89%
  const borderRadius = 200.036 * (1 - scrollProgress);

  return (
    <div className="b">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden ">
        <div className="absolute inset-0 " />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <img className='w-[50px] mx-auto mb-[25px]' src={Who}/>
            <h1 className="text-4xl font-kameron text-[45px] font-semibold sm:text-5xl md:text-6xl  mb-4 md:mb-6">
              We Develop Tech
              <div className="text-blue-600">Solutions That Matter</div>
            </h1>
            <p className="text-center font-mono font-medium text-[15px] leading-[25px]  text-gray-600 max-w-3xl mx-auto ">
              We focus on creating impactful IT solutions that solve real-world challenges. Through
              innovative technology, we drive progress and build a brighter future. Our mission is to create a
              lasting difference by shaping tomorrow with today's solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section with Scale Effect */}
      <div className="flex justify-center mt-[-50px] items-center px-4 md:px-0 min-h-screen">
        <div 
          ref={imageRef}
          className="relative overflow-hidden transition-all duration-300 ease-out"
          style={{
            transform: `scale(${scale})`,
            width: `${width}%`,
            height: '80vh',
            borderRadius: `${borderRadius}px`,
          }}
        >
          <img
            src={Develop}
            alt="Team working together"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <img className='mx-auto w-[50px] mb-[20px]' src={Devo}/>
              <h2 className="text-3xl font-kameron text-[45px] font-semibold leading-[40px] mb-4">
                Let's code a better<br />future together
              </h2>
              <p className="text-base font-mono font-medium text-[16px] leading-[30px] w-[455px] mx-auto mb-6 md:mb-8">
                We focus on creating impactful IT solutions that solve
                real-world challenges. Through innovative technology,
                we drive progress and build a brighter future.
              </p>
               <div className="flex mx-auto items-center bg-[#0071E3] rounded-full w-[160px] h-[45px]">
                                          <button className=" text-[18px] text-white font-semibold  pl-[25px] text-center rounded-full  flex items-center gap-2 hover:text-[#000] hover:bg-white hover:w-[150px] ease-in-out duration-500 hover:h-[32px] hover:ml-[5px]">
                                              About us
                                              <span className="bg-white rounded-full w-[30px] h-[30px] pt-[6px] pl-[6px] ml-[8px] ">
                                                  <FaArrowRight className=" text-black" />
                                              </span>
                                          </button>
                                      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;