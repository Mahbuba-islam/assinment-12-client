import React from 'react';

import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Pisan Herr',
            review: 'Industrially sound hardware … and a quick response with the information we needed.',
            location: 'california',
            img: people1
        },
        {
            _id:2,
            name: 'Clinton Herby',
            review: 'We have used your products for years and are very happy with the performance',
           location: 'New York',
            img: people2
        },
        {
            _id:3,
            name: 'Winston Henry',
            review: 'Good and reliable equipment and service. You always came through one hundred percent. You’re a fantastic vendor to have.',
            location: 'New Jersy',
            img: people3
        },
        
    ];
    return (
        <section className='my-28'>
            <div>
                <div>
                    <h4 className="text-xl text-primary font-bold text-center mb-5">Our lovely Client Review</h4>
                    <h2 className='text-3xl text-center mb-9'>What our Clients say</h2>
                </div>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};


export default Testimonials;