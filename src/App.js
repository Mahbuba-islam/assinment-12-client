import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route} from "react-router-dom";

import About from './Pages/About/About';
import Login from './Pages/Login/Login';

import SignUp from './Pages/Login/SignUp';
// import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './Pages/MyProfile/MyProfile';
// import MyFortfolio from './Pages/MyFortfolio/MyFortfolio';
import Blogs from './Pages/Blogs/Blogs';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound';
import MyFortfolio from './Pages/MyFortfolio/MyFortfolio';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="myProfile" element={<MyProfile />} />
        <Route path="myFortfolio" element={<MyFortfolio/>} />
        <Route path='/part/:id' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        
        <Route path="blogs" element={<Blogs/>} />
        {/* <Route path="purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } /> */}
        {/* <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
