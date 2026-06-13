import React, { use } from 'react'
import { NavLink } from 'react-router'
import { AuthCon } from '../../Context/AuthContex/AuthCon'
import { signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.auth';



const Navbar = () => {
  const {user} = use(AuthCon);
  const handelLogout = ()=> {
    if (!user) {
      console.log('user nai')
      return ;
    }
      signOut(auth)
      .then(()=> console.log("logout Successfully"))
      .catch((err => console.log(err)))
  }
  const links = <>
  <li><NavLink className={({isActive})=> isActive ? "bg-green-600 text-white duration-300" : ""} to="/">Home</NavLink></li>
  <li><NavLink className={({isActive})=> isActive ? "bg-green-600 text-white duration-300" : ""} to="/listed">Listed book</NavLink></li>
  <li><NavLink className={({isActive})=> isActive ? "bg-green-600 text-white duration-300" : ""} to="/pageRead">Page to Read</NavLink></li>
</>
  console.log(user)
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <ul className="p-2">
                {links}
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">{user?.email}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
      {
        links
      }
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to='/login' className={({isActive})=> isActive ? "bg-green-600 btn text-white duration-300" : "btn"}><button onClick={()=>{
        handelLogout()
        }}>{user ? "Logout" : "Login" }</button></NavLink>
        <NavLink to='/registation' className={({isActive})=> isActive ? "bg-green-600 btn text-white duration-300" : "btn"}><button>Registation</button></NavLink>
      </div>
    </div>
  )
}

export default Navbar