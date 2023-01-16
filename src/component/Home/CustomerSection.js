import React, { useEffect } from 'react';
import sign from '../../assets/sign.png';
import sectionImg from '../../assets/demo-two-section-one-main-img.webp';
import sectionBg from '../../assets/demo-two-section-one-main-img-bg.webp';
// animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomerSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
        <section>
            <div className="hero min-h-screen bg-white" style={{ backgroundImage: `url(${sectionBg})` }} >
  <div  className="hero-content  grid sm:grid-cols-1 lg:grid-cols-2 w-full"> 
  {/* */}
    <div  data-aos="fade-left"  data-aos-delay="200"  className='w-50'>
    <img src={sectionImg} className="w-full max-w-7xl rounded-lg" />
    </div>

<div data-aos="fade-right" data-aos-delay="200" className='text-left pl-10'>

        <div>
          <h1 className="text-xl text-warning font-bold">WE ARE CONSULTING AGENCY</h1>
            <h1 className="lg:text-3xl text-xl font-bold text-black">
            We Provide Best Business Advice To Our Customers</h1>
            <p className="py-4 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            
   <ul>
  <li><div className="lg:text-3xl text-xl text-black font-bold flex"> <img src={sign} alt="" />
    Investment Planning</div>
  <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
  </li>
  <li><div className="lg:text-3xl text-xl text-black font-bold flex">
  <img src={sign} alt="" />
    Finance Management</div>
  <p className="py-4 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
  </li>

</ul>


        </div>
    </div>
  </div>
</div>
            
        </section>









    );
};

export default CustomerSection;