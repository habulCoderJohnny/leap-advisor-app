import React from 'react';
import logo from '../../assets/Logo-black.svg';
import headerbg from '../../assets/banner-bg-img-demo-two.webp';

const Navbar = () => {
    return (
        <header>
        <div className="navbar"  style={{ backgroundImage: `url(${headerbg})` }}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-warning rounded-box w-52">
        <li tabIndex={0}>
          <a className="justify-between">
            Page
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
          <li><a>Login</a></li>
          <li><a>Logout</a></li>
          </ul>
        </li>
        <li><a>Shop</a></li>
            <li><a>Portfolio</a></li>
      </ul>
    </div>
    <div className="w-40">
          <img src={logo} />
        </div> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
            <li><a>Blog</a></li>
            <li><a>Shop</a></li>
            <li><a>Portfolio</a></li>
      <li tabIndex={0}>
        <a>
        Page
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Login</a></li>
          <li><a>Logout</a></li>
        </ul>
      </li>
    </ul>
  </div>
 
  <div className="navbar-end">
  <h5 className='font-mono'>Contact us
  <p>(+880)0123982938238</p></h5>
  <button className="btn btn-warning rounded-full ml-4 p-4">Free Consulation</button>
  </div>
</div>
</header>
    );
};

export default Navbar;