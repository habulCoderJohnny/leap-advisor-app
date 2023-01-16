
import React, { useEffect } from "react";
import cloudBuilding from '../../assets/demo-two-cloud-building.png';
import star from '../../assets/demo-two-star-hdd-01.png';
import love from '../../assets/demo-two-love-growth-01.png';
// animation 
import AOS from 'aos';
import 'aos/dist/aos.css';


const AdvanceServices = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='mt-10' >
            <h1 className="text-xl text-warning font-bold mb-4">ADVANCED SERVICES</h1>
            <h1 className="text-5xl font-bold">
                Find Best Solution </h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

            <div data-aos="zoom-in-up" data-aos-delay="300" className='grid grid-cols-1  lg:grid-cols-3 my-6'>


                <div  >
                    <img className='mx-auto' src={cloudBuilding} />
                    <h1 className="text-3xl font-bold py-5">Business Planning</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>


                <div>
                    <img className='mx-auto' src={star} />
                    <h1 className="text-3xl font-bold py-5">Financial Planning</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>


                <div>
                    <img className='mx-auto' src={love} />
                    <h1 className="text-3xl font-bold py-5">Branding Strategy</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>


            </div>
        </div>
    );
};

export default AdvanceServices;