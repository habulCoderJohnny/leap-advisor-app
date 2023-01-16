import React from 'react';
import Banner from './Banner';
import BusinessGrowup from './BusinessGrowup';
import Navbar from './Navbar';
import AdvanceServices from './AdvanceServices';
import Services from './Services';
import Business from './Business';
import Footer from './Footer';
import CustomerSection from './CustomerSection';

const Home = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Banner></Banner>
            <AdvanceServices></AdvanceServices>
            <CustomerSection></CustomerSection>
            <BusinessGrowup></BusinessGrowup>
            <Services></Services>
            <Business></Business>
            <Footer></Footer>
        </main>
    );
};

export default Home;