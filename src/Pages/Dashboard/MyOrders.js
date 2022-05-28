
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders/${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data));
        }
    }, [user])

    return (
        <div className='mt-12 '>
            <h2 className='text-center text-3xl text-error font-bold pb-5'>Total Orders: {order.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.customerEmail}</td>
                                <td>{a.phone}</td>
                                <td>{a.address}</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;




//  import React, { useEffect, useState } from 'react';
// import auth from '../../firebase.init';

// const MyOrders = () => {
//   const [orders, setOrders] = useState([])
//   const [user] = useState(auth)
//   useEffect(() => {
//     if(user){
//         fetch(`http://localhost:5000/orders?customer=${user.email}`)
//     .then(res=>res.json())
//     .then(data => setOrders(data))
//     }

//   }, [user])
//     return (
//         <div>
//             <h2>MY Orders {orders.length}</h2>
//         </div>
//     );
// };

// export default MyOrders;