import React, { useEffect } from 'react';
import img from '../../assets/demo-two-section-one-main-img-02.webp';
import bg from '../../assets/demo-two-section-one-main-img-02-bg.webp';
// animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const BusinessGrowup = () => {
  useEffect(() => {
    AOS.init();
  }, [])

    return (
        <section>

            <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div  data-aos="fade-left"  data-aos-delay="300"  className='w-50' style={{ backgroundImage: `url(${bg})` }} >
    <img src={img} className="max-w-lg rounded-lg" />
    </div>

    <div  data-aos="fade-right"  data-aos-delay="300"  className='text-left'>
    <h1 className="text-xl text-warning font-bold mb-4">YOUR BUSINESS GROWTH</h1>
    <h1 className="text-5xl text-black font-bold">
    Financial Solutions To <br /> Grownup <span className='underline decoration-warning'>Your Business</span>
    </h1>
    <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

    {/* stat  */}

    <div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="text-5xl font-bold text-warning">254+</div>
    <div className="text-3xl text-black font-bold">Projects Completed</div>
    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
  </div>
  
  <div className="stat">
    <div className="text-5xl font-bold text-warning">98%</div>
    <div className="text-3xl text-black font-bold">Positive Feedback</div>
    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
  </div>
  </div>





    </div>
  </div>
</div>
            
        </section>
    );
};

export default BusinessGrowup;