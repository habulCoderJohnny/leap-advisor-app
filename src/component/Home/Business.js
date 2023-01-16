import React, { useEffect } from 'react';
import guy2 from '../../assets/demo-two-section-three-main-img.webp';
import analyticImg from '../../assets/demo-two-section-three-side-img.webp';
import sign from '../../assets/sign.png';
import CustomButton from '../CustomButton';
// animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Business = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="hero min-h-screen bg-white mt-[-24px]">
      <div className="hero-content flex-col lg:flex-row">
        <div data-aos="fade-left" data-aos-delay="300">
          <img src={guy2} className="max-w-lg rounded-lg" />
        </div>
        <img src={analyticImg} className="max-w-sm ml-[-120px] mt-60" />

        <div className='text-left' data-aos="fade-right" data-aos-delay="300"  >
          <h1 className="text-xl text-warning font-bold mb-4">GROWING ONLINE</h1>
          <h1 className="lg:text-5xl text-3xl text-black font-bold">
            Steps To Build A<br />  <span className='underline decoration-wavy decoration-warning'>Successful</span> Business & Digital Product
          </h1>

          <ul>
            <li><img src={sign} />
              <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

            </li>

            <li>
              <img src={sign} alt="" />
              <p className="py-4 text-black ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </li>
          </ul>
          <CustomButton></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Business;