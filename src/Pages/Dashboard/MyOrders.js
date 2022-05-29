
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
// import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';


const MyOrders = () => {

    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    // const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders/${user.email}`,{
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
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
                            <th>price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.customerEmail}</td>
                                <td>{a.phone}</td>
                                <td>{a.price}</td>
                                <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/$(id)`}><button className='btn btn-xs btn-success text-white px-5 text-center'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        
                                    </div>}
                                </td>
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