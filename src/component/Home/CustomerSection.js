import React from 'react';
import sectionImg from '../../assets/demo-two-section-one-main-img.webp';
import sectionBg from '../../assets/demo-two-section-one-main-img-bg.webp';

const CustomerSection = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-white" style={{ backgroundImage: `url(${sectionBg})` }} >
  <div  className="hero-content flex-col lg:flex-row">
    <div  data-aos="fade-left"  data-aos-delay="300"  className='w-50'>
    <img src={sectionImg} className="max-w-lg rounded-lg" />
    </div>

    <div  data-aos="fade-right"  data-aos-delay="300"  className='text-left'>

        <div>
                        <h1 className="text-xl text-warning font-bold mb-4">WE ARE CONSULTING AGENCY</h1>
            <h1 className="text-5xl font-bold text-black">
            We Provide Best Business Advice To Our Customers</h1>
            <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>





    </div>
  </div>
</div>
            
        </section>









    );
};

export default CustomerSection;