import React, { useEffect } from 'react';
import icon from '../../assets/icon.png';
// animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='bg-white'>
      <h1 className="pt-10 text-xl text-warning font-bold mb-4">OUR SERVICES</h1>
      <h1 className="lg:text-5xl text-black font-bold">
        Provide Awesome Service <br />With<span className='underline decoration-wavy decoration-warning'> Our Tools</span>
      </h1>
      <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

      {/* card section */}
      <div data-aos="zoom-in-up" data-aos-delay="300" className='grid grid-cols-1  lg:grid-cols-4 my-6'>

        {/* card-1  */}
        <div className="card w-80 bg-base-100 shadow-2xl">
          <figure><img src={icon} /></figure>
          <div className="card-body">
            <div className="text-2xl text-black font-bold">
              Invest Analysis</div>
            <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning rounded-full p-4">Get Started</button>
            </div>
          </div>
        </div>


        {/* card-2  */}
        <div className="card w-80 bg-base-100 shadow-2xl mt-16">
          <figure><img src={icon} /></figure>
          <div className="card-body">
            <div className="text-2xl text-black font-bold">
              Reporting & Analysis</div>
            <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning rounded-full p-4">Get Started</button>
            </div>
          </div>
        </div>



        {/* card-3  */}
        <div className="card w-80 bg-base-100 shadow-2xl">
          <figure><img src={icon} /></figure>
          <div className="card-body">
            <div className="text-2xl text-black font-bold">
              Real Time And Data</div>
            <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning rounded-full p-4">Get Started</button>
            </div>
          </div>
        </div>

        {/* card-4  */}
        <div className="card w-80 bg-base-100 shadow-2xl mt-16">
          <figure><img src={icon} /></figure>
          <div className="card-body">
            <div className="text-2xl text-black font-bold">
              Market Assistance</div>
            <p className="py-6 text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning rounded-full p-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Services;