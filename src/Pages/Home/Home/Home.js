import React from 'react';

import Contact from '../Contact';
import Footer from '../../Shared/Footer';
import Info from '../Info';


import Testimonials from '../Testimonials';

import Parts from '../Parts/Parts';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
            
            <Info></Info>
            <Parts></Parts>
            <Parts></Parts>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;