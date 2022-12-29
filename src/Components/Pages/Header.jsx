import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Context';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')
                toast.success('Successfully Logout')
            })

            .catch(err => { console.log(err); })
    }

    const menuItems = <>
        <li className='text-white'><Link to='/home'> Home</Link></li>
        <li className='text-white'><Link to='/addtask'> Add Task</Link></li>
        <li className='text-white'><Link to='/mytask'> My Task</Link></li>
        <li className='text-white'><Link to='/completedtask'> Completed Task</Link></li>
        {user?.uid ?
            <div className='lg:flex items-center'>
                <li><Link to='/profile'>

                    {user?.photoURL ?
                        <img className='w-10 rounded-full' src={user.photoURL} />
                        :
                        <p className='text-white'>Profile</p>}

                </Link></li>
                <button className='text-white mr-3' onClick={handelLogOut}> Log Out</button>

            </div>
            :
            <>
                <li className='text-white'><Link to='/login'> Login</Link></li>
                <li className='text-white '><Link to='/singUp'> Sing Up</Link></li>
            </>}


    </>






    return (
        <div className='mb-5 mt-3 shadow-sm sticky top-0 z-40'>

            <div className="navbar bg-indigo-500 flex flex justify-between rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  ">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="text-white btn btn-ghost normal-case text-xl">My Task</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0  gap-2">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-dawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    )
}

export default Header
