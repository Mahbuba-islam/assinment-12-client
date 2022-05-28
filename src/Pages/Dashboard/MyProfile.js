
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    
    const [user] =useAuthState(auth)
    const email = user?.user?.email;
        
    const handleSubmit = event =>{
        event.preventDefault();
        
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers:{
              'content-type': 'application/json'
            },
            body:JSON.stringify( user)
            
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            toast('Great Job! Your profile is successfully updated')
          })
       };
   
   
    return (
        <div>
          <h2 className='text-center text-primary text-3xl font-bold'>Update Your Profile</h2>
             <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
  <input type="text" disabled value={user?.displayName} class="input w-full max-w-xs text-primary " />
  <input type="text" disabled value={user?.email} class="input w-full max-w-xs " />
  <input type="text" placeholder='address' name='address'  class="input w-full max-w-xs " />
  <input type="number" placeholder='phone number' name='phone' class="input w-full max-w-xs " />
 <input type="text" placeholder="Education" name='education' class="input w-full max-w-xs" />
 <input type="text" placeholder="City" name='city' class="input w-full max-w-xs" />
 <input type="text" placeholder="District" name='district' class="input w-full max-w-xs" />
 <input type="text" placeholder="LinkedInLink" name='linkedInLink' class="input w-full max-w-xs" />
  <input type="submit" class="btn btn primary w-full max-w-xs " />
  </form>
        </div>
    );
};

export default MyProfile;