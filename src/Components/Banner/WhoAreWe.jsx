import React from 'react'
import Who from "../../assets/whoare.png"
import Container from '../Container'
import { FaArrowRight } from "react-icons/fa6";
import CircularGallery from '../CircularGallery'
import Work1 from "../../assets/work1.png"
import Work2 from "../../assets/work2.png"
import Work3 from "../../assets/work3.png"
import Work4 from "../../assets/work4.png"
import Work5 from "../../assets/work5.png"
import Work6 from "../../assets/work6.png"

function WhoAreWe() {

    return (
        <section className='p-[150px]'>
            <Container>
                <div className="w-[50px] mx-auto mt-[70px]">
                    <img src={Who} />
                </div>
                <div className="text-center ">
                    <h1 className='font-kameron font-semibold text-[45px]'>Who Are <strong className='text-[#0071E3]'> We?</strong></h1>
                </div>
                <div className="text-center">
                    <p className='font-mono text-[29px] font-medium leading-[40px] mt-[25px]'>We are a tight-knit team with 20+ years of experience helping early-stage startups showcase how good their products really are. Whether you're a seasoned player in the digital landscape or just stepping into it, we have the expertise and strategies to propel your brand.</p>

                </div>
                <div className="">
                    <div className="flex justify-center gap-[15px] mt-[20px]">
                        <div className="flex items-center bg-[#0071E3] rounded-full w-[160px] h-[45px]">
                            <button className=" text-[18px] text-white font-semibold  pl-[25px] text-center rounded-full  flex items-center gap-2 hover:text-[#000] hover:bg-white hover:w-[150px] ease-in-out duration-500 hover:h-[32px] hover:ml-[5px]">
                                Services
                                <span className="bg-white rounded-full w-[30px] h-[30px] pt-[6px] pl-[6px] ml-[8px] ">
                                    <FaArrowRight className=" text-black" />
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center bg-transparent border-[2px] border-black hover:border-[#0071E3] rounded-full w-[163px] h-[45px]">
                            <button className=" text-[18px] text-black font-semibold hover:text-[#0071E3]  pl-[25px] text-center rounded-full  flex items-center gap-2  hover:bg-white hover:w-[150px] ease-in-out duration-500 hover:h-[32px] hover:ml-[5px]">
                                About us
                                <span className="bg-white rounded-full  w-[30px] h-[30px] pt-[6px] pl-[6px] ml-[8px] ">
                                    <FaArrowRight className=" text-black " />
                                </span>
                            </button>
                        </div>

                    </div>
                </div>

                <div className="mt-[100px]">
                    <img className='mx-auto w-[50px]' src={Who}/>
                    <h1 className='font-kameron text-[58px] font-semibold text-center'>Some Of <strong className='text-[#0071E3]'>Our Work</strong>
                    </h1>
                    <p className='font-mono text-center font-medium text-[20px]'>Each project in our collection reflects the passion and creativity we bring to every digital endeavor. From sleek web designs to dynamic branding solutions, our portfolio highlights the diversity of our expertise. We believe in pushing boundaries and crafting digital experiences that not only meet but exceed expectations. Your vision, brought to life with precision and flair.</p>
                    <div className="flex mx-auto mt-[30px] items-center bg-[#0071E3] rounded-full w-[235px] h-[45px]">
                            <button className=" text-[18px] text-white font-semibold  pl-[25px] text-center rounded-full  flex items-center gap-2 hover:text-[#000] hover:bg-white hover:w-[225px] ease-in-out duration-500 hover:h-[32px] hover:ml-[5px]">
                            Explore our work
                                <span className="bg-white rounded-full w-[30px] h-[30px] pt-[6px] pl-[6px] ml-[8px] ">
                                    <FaArrowRight className=" text-black" />
                                </span>
                            </button>
                        </div>

                    <div style={{ height: '600px', position: 'relative' }}>
                        <CircularGallery items={[
                            { image: Work1, text: "Mountain" },
                            { image: Work2, text: "Italy" },
                            { image: Work3, text: "Jordan " },
                            { image: Work4, text: "Nature" },
                            { image: Work5, text: "Fort" },
                            { image: Work6, text: "Porto" }
                        ]} bend={3} textColor="#ffffff" borderRadius={0.05} />
                    </div>

                </div>


            </Container>
        </section>
    )
}

export default WhoAreWe
