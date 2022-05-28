import React from 'react';
import { useForm } from "react-hook-form";

const MyReviews = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/review';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add Review</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='add review' {...register("description")} />
                <input className='mb-2' placeholder='rating' type="number" {...register("rating")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add review" />
            </form>
        </div>
    );
};

export default MyReviews;