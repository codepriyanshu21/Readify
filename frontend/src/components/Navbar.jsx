import React from 'react'
import Login from './Form'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'


const Navbar = () => {
    const [authUser,setAuthUser]=useAuth()
    
    return (
        <>
            <div className='max-w-screen-2xl shadow-2xl shadow-slate-700 bg-base-200 container mx-auto z-50  md:px-20 px-4 fixed top-0 right-0 left-0'>
                <div className="navbar  ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a href='/'>Home</a>
                                </li>
                                <li>
                                    <a href='/course'>Course</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact</a>
                                </li>
                                <li>
                                    <a href='/about'>About</a>
                                </li>

                            </ul>
                        </div>
                        <a href='/' className="text-2xl font-bold cursor-pointer">Readify</a>
                    </div>
                    <div className='navbar-end'>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <a href='/'>Home</a>
                                </li>
                                <li>
                                    <a href='/course'>Course</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact</a>
                                </li>
                                <li>
                                    <a href='/about'>About</a>
                                </li>

                            </ul>
                        </div>
                        <div className='hidden md:block'>
                            <label className="py-2 px-4 border rounded-md flex items-center gap-2 ">
                                <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                                <input type="search" required placeholder="Search" className='bg-transparent outline-none' />
                            </label>
                        </div>
                        
                        <div className="navbar-end">
                            <a onClick={()=>{
                                if(authUser){
                                    localStorage.removeItem("Users")
                                    setAuthUser(null)
                                    toast.success("Logout successfully")
                                    document.getElementById('auth_modal').close();
                                    
                                }else{
                                    document.getElementById('auth_modal').showModal();
                                }
                            }}
                            className="bg-black text-white py-2 px-4 border-2 rounded-md hover:bg-slate-700 duration-300 cursor-pointer font-semibold">{authUser ? <p className=' whitespace-nowrap'>Hi , {authUser.fullname}</p> : "Login"}</a>
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar