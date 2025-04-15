import React, { useEffect, useRef } from 'react';
import Who from "../assets/whoare.png";
import { FaArrowRight } from "react-icons/fa6";

function Monthy() {
    const videos = [
        { id: 1, url: "https://newsite.nicolaipalmkvist.com/wp-content/uploads/2024/12/Video-1-kopi.mp4", gridArea: "4 / 4 / 7 / 7" },
        { id: 2, url: "https://newsite.nicolaipalmkvist.com/wp-content/uploads/2024/12/Video-2-1.mp4", gridArea: "6 / 7 / 8 / 10" },
        { id: 3, url: "https://newsite.nicolaipalmkvist.com/wp-content/uploads/2024/12/Video-3-1.mp4", gridArea: "7 / 5 / 9 / 7" },
        { id: 4, url: "https://newsite.nicolaipalmkvist.com/wp-content/uploads/2024/12/Video-4.mp4", gridArea: "4 / 7 / 6 / 9" },
        { id: 5, url: "https://newsite.nicolaipalmkvist.com/wp-content/uploads/2024/12/Untitled-design-1.mp4", gridArea: "7 / 3 / 10 / 5" },
        { id: 6, url: "https://newsite.nicolaipalmkvist.com/wp-content/uploads/2024/12/Video-6.mp4", gridArea: "5 / 1 / 7 / 4" },
        { id: 7, url: "https://newsite.nicolaipalmkvist.com/wp-content/uploads/2024/12/Untitled-design-1-1.mp4", gridArea: "2 / 2 / 5 / 4" },
        { id: 8, url: "https://newsite.nicolaipalmkvist.com/wp-content/uploads/2024/12/Video-8.mp4", gridArea: "1 / 4 / 4 / 6" },
        { id: 9, url: "https://newsite.nicolaipalmkvist.com/wp-content/uploads/2024/12/Video-9.mp4", gridArea: "2 / 6 / 4 / 9" }
      ];
    
      const gridRef = useRef(null);
      const sectionRef = useRef(null);
    
      useEffect(() => {
        if (gridRef.current) {
          gridRef.current.style.transition = 'transform 3s ease-in-out'; // Smooth rotation
        }
      
        const videoContainers = gridRef.current?.querySelectorAll('.video-container');
        videoContainers.forEach((container) => {
          if (container instanceof HTMLElement) {
            container.style.transition = 'transform 3s ease-in-out'; // Smooth counter-rotation
          }
        });
      
        const handleScroll = () => {
          if (!gridRef.current || !sectionRef.current) return;
      
          const section = sectionRef.current;
          const sectionRect = section.getBoundingClientRect();
          const scrollProgress = Math.max(
            0,
            Math.min(1, -sectionRect.top / (sectionRect.height - window.innerHeight))
          );
      
          const easeInOutQuad = (t) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      
          const easedProgress = easeInOutQuad(scrollProgress);
          const rotation = easedProgress * 360;
          const scale = 1 + Math.sin(easedProgress * Math.PI) * 0.15;
      
          gridRef.current.style.transform = `
            translate3d(0px, 0px, 0px)
            scale3d(${scale}, ${scale}, 1)
            rotateZ(${rotation}deg)
          `;
      
          const videos = gridRef.current.querySelectorAll('.video-container');
          videos.forEach((video) => {
            if (video instanceof HTMLElement) {
              video.style.transform = `
                translate3d(0px, 0px, 0px)
                rotateZ(${-rotation}deg)
              `;
            }
          });
        };
      
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24">
                <div className="container mx-auto max-w-7xl">
                    <img src={Who} className="w-[30px] xs:w-[35px] sm:w-[40px] md:w-[45px] lg:w-[50px] mx-auto text-[#0071E3]" />
                    <h1 className='text-[#0071E3] mt-[10px] xs:mt-[12px] sm:mt-[15px] font-kameron text-2xl xs:text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] font-semibold text-center'>
                        Monthly Webinars
                    </h1>
                    <h2 className='text-2xl xs:text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] font-kameron font-semibold text-center lg:mt-[10px] xs:mt-[-10px] sm:mt-[-12px] md:mt-[-15px]'>
                        Unlock New Skills and Insights
                    </h2>
                    <p className='font-mono text-xs xs:text-sm sm:text-base md:text-[15px] font-medium text-center mt-[10px] xs:mt-[12px] sm:mt-[15px] leading-[20px] xs:leading-[24px] sm:leading-[26px] md:leading-[30px] max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto'>
                        Explore our monthly webinars where we share insights, trends, and practical tips on web design and development.
                        Watch past sessions below to get a glimpse of what to expect from our next webinar. Get inspired and stay updated
                        with fresh ideas each month!
                    </p>
                </div>
    
                <div ref={sectionRef} className="scroll-track mt-[30px] xs:mt-[40px] sm:mt-[50px] md:mt-[60px] xs overflow-hidden relative h-[500px] xs:h-[420px] sm:h-[650px] md:h-[700px] lg:h-[750px]">
                    <div className="scroll-div sticky top-0 flex items-center justify-center">
                        <div
                            ref={gridRef}
                            className="grid w-full h-[80vmin] xs:h-[85vmin] sm:h-[90vmin] md:h-[95vmin] lg:h-[100vmin] grid-cols-9 grid-rows-9 gap-1 xs:gap-1.5 sm:gap-2 p-2 xs:p-3 sm:p-4"
                            style={{
                                willChange: 'transform',
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="block relative overflow-hidden rounded-[1vw] xs:rounded-[1.5vw] sm:rounded-[2vw]"
                                    style={{ gridArea: video.gridArea }}
                                >
                                    <div className="video-container absolute inset-[-50%] w-[200%] h-[200%]"
                                        style={{
                                            willChange: 'transform',
                                            transformStyle: 'preserve-3d'
                                        }}>
                                        <video
                                            className="absolute inset-0 w-full h-full object-cover brightness-90"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{
                                                objectFit: 'cover'
                                            }}
                                        >
                                            <source src={video.url} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    
                <div className="mt-[0px] xs:mt-[-25px] sm:mt-[15px] md:mt-[20px]">
                    <div className="flex mx-auto items-center bg-[#0071E3] rounded-full w-[200px] xs:w-[245px] sm:w-[250px] md:w-[270px] h-[35px] xs:h-[38px] sm:h-[42px] md:h-[45px]">
                        <button className="text-xs xs:text-sm sm:text-base md:text-[15px] font-mono text-black font-semibold pl-[15px] xs:pl-[20px] sm:pl-[25px] text-center rounded-full flex items-center gap-1 xs:gap-1.5 sm:gap-2 hover:text-[#000] hover:bg-white hover:w-[190px] xs:hover:w-[235px] sm:hover:w-[240px] md:hover:w-[260px] ease-in-out duration-500 hover:h-[25px] xs:hover:h-[28px] sm:hover:h-[30px] md:hover:h-[32px] hover:ml-[5px]">
                            More about our webinar
                            <span className="bg-white rounded-full w-[24px] xs:w-[26px] sm:w-[28px] md:w-[30px] h-[24px] xs:h-[26px] sm:h-[28px] md:h-[30px] flex items-center justify-center ml-[6px] xs:ml-[7px] sm:ml-[8px]">
                                <FaArrowRight className="text-black w-3 xs:w-3.5 sm:w-4" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Monthy;
