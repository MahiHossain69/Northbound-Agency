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

    useEffect(() => {
        const handleScroll = () => {
            if (gridRef.current) {
                const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                let rotation;

                if (scrollPercent <= 0.5) {
                    // First half of scroll: 0° to 180°
                    rotation = scrollPercent * 1 * 180;
                } else {
                    // Second half of scroll: 180° back to 0°
                    rotation = (1 - scrollPercent) * 1 * 180;
                }

                gridRef.current.style.transform = `rotate(${rotation}deg)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <section className='p-[150px]'>
            <div className="container mx-auto">
                <img className='w-[50px] mx-auto' src={Who} alt="Who We Are" />
                <h1 className='text-[#0071E3] mt-[15px] font-kameron text-[45px] font-semibold text-center'>
                    Monthly Webinars
                </h1>
                <h2 className='text-[45px] font-kameron font-semibold text-center mt-[-15px]'>
                    Unlock New Skills and Insights
                </h2>
                <p className='font-mono text-[15px] font-medium text-center mt-[15px] leading-[30px]'>
                    Explore our monthly webinars where we share insights, trends, and practical tips on web design and development.
                    Watch past sessions below to get a glimpse of what to expect from our next webinar. Get inspired and stay updated
                    with fresh ideas each month!
                </p>

                <div className="min-h-[300vh] mt-[170px] relative">
                    <div className="sticky top-0 flex items-center justify-center">
                        <div
                            ref={gridRef}
                            className="w-full h-[100vmin] grid grid-cols-9 grid-rows-9 gap-2 p-4 transition-transform duration-100"
                            style={{
                                transformStyle: 'preserve-3d',
                                willChange: 'transform'
                            }}
                        >
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="relative overflow-hidden rounded-[2vw]"
                                    style={{ gridArea: video.gridArea }}
                                >
                                    <div className="absolute inset-[-50%] w-[200%] h-[200%]">
                                        <video
                                            className="absolute inset-0 w-full h-full object-cover brightness-90"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src={video.url} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex mx-auto mt-[20px] items-center bg-[#0071E3] rounded-full w-[270px] h-[45px]">
                        <button className=" text-[15px] font-mono text-black font-semibold  pl-[25px] text-center rounded-full  flex items-center gap-2 hover:text-[#000] hover:bg-white hover:w-[260px] ease-in-out duration-500 hover:h-[32px] hover:ml-[5px]">
                        More about our webinar
                            <span className="bg-white rounded-full w-[30px] h-[30px] pt-[7px] pl-[8px] ml-[8px] ">
                                <FaArrowRight className=" text-black" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Monthy;
