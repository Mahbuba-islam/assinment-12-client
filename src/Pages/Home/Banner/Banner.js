import React from 'react';
import BannerPic from '../../../assets/images/pexels-sergei-starostin-6636476 (1).jpg'
// import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerPic} className="max-w-sm rounded-lg shadow-2xl" alt='banner' />
                <div>
                    <h1 className="text-5xl font-bold">Computer Manufacturing Industry</h1>
                    <p className=" "> CP Technologies, a business unit of CP North America, designs and manufactures rugged computers, displays, and more. With over 20 years of experience in building high-performance rugged computing systems and devices, CP Technologies’ Combat Proven designs have been used all over the world in a variety of industrial, commercial, and defense related applications. </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;