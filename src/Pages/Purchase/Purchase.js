import React, {  useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
// import OrderModal from './OrderModal';
 import {useAuthState} from 'react-firebase-hooks/auth'
 import auth from '../../firebase.init'


const Purchase = () => {
    const { id } = useParams();
    const [purchase , setPurchase] = useState({})
    const [user, loading, error] =useAuthState(auth)
    
    const handleOrder = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name)

    }
    
     useEffect( ()=>{
        const url = `http://localhost:5000/part/${id}`
        fetch(url)
       .then(res => res.json())
        .then(data => setPurchase(data))
    }, [])

   
    return (
       
       
        <div class="card lg:card-side  shadow-xl">
        <figure><img src={purchase.picture} alt="part"/></figure>
        <div class="card-body">
          <h2 class="card-title">{purchase.name}</h2>
          <h2 class="card-title">Price:MinimumQuantity:{purchase.price}</h2>
          <h2 class="card-title">MinimumQuantity:{purchase.minimumQuantity}</h2>
          <h2 class="card-title">AvailavailQuantity:{purchase.availavailQuantity}</h2>
          <p>{purchase.description}</p>
        <span>{purchase._id}</span>
        
          <div class="card-actions justify-end">
            
            {/* <label for="order-modal" onClick={() => setOrder(purchase)} class="btn modal-button">Place Order</label> */}
           </div>

           {/* modal */}
          {/* <!-- The button to open modal --> */}
<label for="my-modal-6" onClick={() => setPurchase(purchase)} class="btn btn w-50 secondary modal-button">placeOrder</label>

{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle ">
  <div class="modal-box bg-accent">
  <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-2xl text-primary text-center">Place order For{purchase.name}</h3>

  <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
  <input type="text" placeholder="TYPE YOUR NAME " class="input w-full max-w-xs text-primary " />
  <input type="text" placeholder="TYPE YOUR EMAIL" class="input w-full max-w-xs " />
 <input type="text" placeholder="TYPE THE QUANTITY" class="input w-full max-w-xs" />
  <input type="submit" class="btn btn primary w-full max-w-xs " />
  </form>
    
   
  </div>
</div>

        </div>
      </div>
     
     
     
    );
};

export default Purchase;