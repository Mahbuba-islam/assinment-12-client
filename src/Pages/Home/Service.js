import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-lg border border-top-5 border-primary border-x-7 pt-3">
            <figure className="px-5 ">
                <img  src={service.img} alt="Shoes" className="w-30" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p className='text-4xl font-bold'>{service.description}</p>
            </div> 
        </div>
    );
};

export default Service;