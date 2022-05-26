import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = (part) => {
    const { _id, name, img, description, price, minimumQuantity, maximumQuantity} = part;
    const navigate = useNavigate();

    const navigateToPurchase = id =>{
        navigate(`/parts/${id}`);
    }
    
    return (
        <div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={img} alt="parts" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    
    <p>{description}</p>
    <h2 >{price}</h2>
    <h2 >{minimumQuantity}</h2>
    <h2 >{maximumQuantity}</h2>
    <div className="card-actions justify-end">
    <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary mb-3'> Purchase </button>
    </div>
  </div>
</div>
    );
};

export default Part;