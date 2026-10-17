import React from 'react';
import storeImg from "../../assets/store.png"
const Navbar = ({item}) => {
    return (
        <div className='container mx-auto'>
    <div className="navbar bg-base-100 shadow-sm">
      <a className="btn btn-ghost text-xl">DigiTools</a>

      <div className='flex-1 flex justify-center items-center gap-6'>
        <p>product</p>
        <p>feature</p>
        <p>pricing</p>
        <p>fag</p>
      </div>
      <div className='flex gap-2 items-center'>

         <div className='flex'>

        <img src={storeImg} alt="" />
        <p className='text-red-600'>{item}</p>
        </div>
        <p>Login</p>
        <button className='btn btn-active ml-2 bg-purple-500 text-white'>Get Started</button>

      </div>
     </div> 
        </div>
    );
};

export default Navbar;