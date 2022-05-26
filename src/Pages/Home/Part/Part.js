import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Shared/PrimaryButton';

const Part = ({part}) => {
    const { _id, name, img, description, price, minimumQuantity, maximumQuantity} = part;
    const navigate = useNavigate();

    const navigateToPurchase = id =>{
        navigate(`/part/${id}`);
    }
    
    return (
        <div class="card w-80  shadow-md bg-amber-1200 border-t-4 border-t-slate-200 py-5 image-full text-center ">
  <figure><img src={img} alt="parts" /></figure>
  <div className="card-body text-center bg-white  ">
  <h2 className="card-title text-center text-3xl ml-9 text-primary ">{name}</h2>
   <h2 className='text-2xl text-black'>Price:{price}</h2>
    <h2 className='text-black'>MinimumQuantity:{minimumQuantity}</h2>
    <h2 className='text-black'>MaximumQuantity:{maximumQuantity}</h2>
    <p className='text-black'>{description}</p>
    <div className="card-actions justify-center text-center mt-4">
    <button onClick={() => navigateToPurchase(_id)} className='btn btn-text-white font-bold bg-gradient-to-r from-primary to-error border-0 mb-3 text-center'> Purchase </button>
    </div>
  </div>
</div>
    );
};

export default Part;