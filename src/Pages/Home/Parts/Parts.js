import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';



const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:4000/parts')
        .then(res => res.json())
        .then(data => setParts(data));
    }, [])
   
    
    return (
        <div className='grid grid-cols md-grid-cols-2 lg:grid-cols-3'>
            <h1 className='text-3xl text-ellipsis'>Computer Parts</h1>
        {
                parts.map(part => <Part
                
                key = {part._id}
                inventoryItem = {part}>

                </Part>)
            }
            
        </div>
    );
};

export default Parts;