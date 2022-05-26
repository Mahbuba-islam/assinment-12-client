import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { useForm } from "react-hook-form";

const Purchase = () => {
    const { id } = useParams();
    const [purchase , setPurchase] = useState({})
    // const {  register, handleSubmit } = useForm();
    // const [isReload , setIsReload] = useState(false)
    
    
    useEffect( ()=>{
        const url = `data.json${id}`
        fetch(url)
       .then(res => res.json())
        .then(data => setPurchase(data))
    }, [])

//     //delivered product
// const handleDelivered = event => {
//   const url = `data.json/${id}`;
//     fetch(url, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(updatedProduct)
//     })
//     .then(res=> res.json())
//     .then(data =>{
//         console.log(data);
//         event.target.reset()
        
//     } )
// };

//       /// reStock product
//    const onSubmit = data => {
//     const url = `http://localhost:4000/inventoryItem/${id}`;
//     fetch(url, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
         
//     })
//     .then(res=> res.json())
//     .then(data =>{
//        console.log(data);
       
//     } )
// };

  
    return (
       
       <div className=' text-center ' >
          
          <div> <h2 className='mt-5 text-primary'> Part details</h2>
           <div className='d-flex justify-content-center align-items-center border border-3 border-info rounded shadow-sm w-100 bg-info mt-4 ' >
           <img  src={purchase.img} alt="" />
        <div className='mt-5 w-50 ms-5 w-50 ms-5 text-center '>
             <h2>{purchase.name}</h2>
            <h4>Price: {purchase.price}</h4>
            <h3>Quantity:{purchase.minimumQuantity}</h3> 
           <p>Supplier Name: {purchase.maximumQuantity}</p>
            <p className='px-5' >{purchase.description}</p>
            <p><small>{id}</small></p>
            <h5>Sold</h5>
           
        {/* <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
        
        <button type="button" onClick={handleDelivered}>
        delivered
      </button>
      <input className='mb-2' placeholder='quantity ' type="number" {...register('quantity')} />
         <input type="submit" className='my-3'/>  Restock the items
         </form> */}
            </div>
        </div> 
        </div>
            
            <div className='text-center'>
                <Link to="/manageInventories">
                    <button  className='btn btn-primary my-5 '>Manage Inventories</button>
                </Link>
            </div>
           
            
        </div>
    );
};

export default Purchase;