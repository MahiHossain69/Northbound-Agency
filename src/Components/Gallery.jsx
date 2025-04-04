import React, { useEffect } from 'react';
import Who from "../assets/whoare.png";
import img1 from "../assets/g1.png"
import img2 from "../assets/g2.png"
import img3 from "../assets/g3.png"
import img4 from "../assets/g4.png"
import img5 from "../assets/g5.png"
import img6 from "../assets/g6.png"
import img7 from "../assets/g7.png"
import img8 from "../assets/g8.png"
import img9 from "../assets/g9.png"
import img10 from "../assets/g10.png"
import img11 from "../assets/g11.png"
import img12 from "../assets/g12.png"
import img13 from "../assets/g13.png"
import img14 from "../assets/g14.png"
import img15 from "../assets/g15.png"
import img16 from "../assets/g16.png"
import styled from 'styled-components';


function Gallery() {
  const images = {
    row1: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    ],
    row2: [
      img7,
      img8,
      img9,
      img10,
    ],
    row3: [
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('.image-card').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getDelay = (index) => `${index * 150}ms`; 


  const StyledWrapper = styled.div`
  .button {
    display: flex;
    width:155px;
    margin:auto;
    margin-top:30px;
  }

  .box {
    padding-top:3px;
    width: 35px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    transition: all .8s;
    cursor: pointer;
    position: relative;
    background: rgb(58, 165, 253);
    overflow: hidden;
  }

  .box:before {
    padding-top:3px;
    content: "S";
    position: absolute;
    top: 0;
    background: #0f0f0f;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform .4s;
  }

  .box:nth-child(2)::before {
    transform: translateY(-100%);
    content: 'E';
  }

  .box:nth-child(3)::before {
    content: 'N';
  }

  .box:nth-child(4)::before {
    transform: translateY(-100%);
    content: 'D';
  }

  .box:nth-child(5)::before {
    content: '';
  }
  .box:nth-child(6)::before {
    transform: translateY(-100%);
    content: 'I';
  }
  .box:nth-child(7)::before {
    content: 'N';
  }
  .box:nth-child(8)::before {
     transform: translateY(-100%);
    content: 'Q';
  }
  .box:nth-child(9)::before {
    content: 'E';
  }
  .box:nth-child(10)::before {
     transform: translateY(-100%);
    content: 'R';
  }
  .box:nth-child(11)::before {
    content: 'Y';
  }

  .button:hover .box:before {
    transform: translateY(0);
  }`;

  return (
    <div>
     
      <div className="relative overflow-hidden py-20 md:py-32">
     
        <div className="container mx-auto  px-4 text-center">
          <img className='w-[50px] mx-auto' src={Who}/>
         
          <h1 className=" font-kameron text-[45px] font-semibold">
          A Typical Day <strong className='text-[#0071E3] font-semibold'>At The Office</strong>
          </h1>
          <p className="font-mono font-medium text-[15px] w-[810px] leading-[30px] mt-[15px] mx-auto">
          At our agency, creativity and collaboration drive our daily routine. Our office is a hub of energy where our talented team works together to craft innovative solutions. Take a look at the photos below to see our vibrant workspace and the people behind our success. 
          </p>
        </div>
      </div>

     
      <div className="container cursor-pointer mx-auto px-4 ">
        {[images.row1, images.row2, images.row3].map((row, rowIndex) => (
          <div key={rowIndex} className="mb-20">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 overflow-hidden">
              {row.map((src, index) => (
                <div
                  key={index}
                  className={`image-card ${rowIndex % 2 === 0 ? 'slide-left' : 'slide-right'}
                              w-full md:w-1/2 lg:w-1/4 aspect-[4/3] overflow-hidden 
                              rounded-2xl transform hover:scale-105 transition-all duration-300`}
                              style={{ '--delay': getDelay(index) }}
                              
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1 + rowIndex * 6}`}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container leading-[30px] mx-auto text-center font-mono mt-[-15px] text-[black] text-[15px] font-medium">
        <p>We believe in transparency, and that’s why we’re happy to give you a glimpse into our daily life—check out the photos below to see the vibrant and welcoming environment we’ve built. Our strong, growing team is here to bring your vision to life.</p>
      </div>
      <div className="container mx-auto">
      <StyledWrapper >
      <div className="button ">
        <div className="box">L</div>
        <div className="box">E</div>
        <div className="box">A</div>
        <div className="box">R</div>
        <div className="box">N</div>
        <div className="box"></div>
        <div className="box">M</div>
        <div className="box">O</div>
        <div className="box">R</div>
        <div className="box">E</div>
        <div className="box">E</div>
      </div>
    </StyledWrapper>
      </div>
    </div>
  );
}

export default Gallery;
