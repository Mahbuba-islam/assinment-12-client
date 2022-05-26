import React from 'react';

import Contact from '../Contact';
import Footer from '../../Shared/Footer';
import Info from '../Info';


import Testimonials from '../Testimonials';

import Parts from '../Parts/Parts';
import Banner from '../Banner/Banner';
import Services from '../Services';

const Home = () => {
    return (
        <div >
             <Banner></Banner>
             <Parts></Parts>
             <Services></Services>
             <Testimonials></Testimonials>
            <Info></Info>
            <Contact></Contact>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;