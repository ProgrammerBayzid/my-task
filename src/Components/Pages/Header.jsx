import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReactSwitch from 'react-switch';
import { toast } from 'react-toastify';
import { ThemContext } from '../../App';
import { AuthContext } from '../Context/Context';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const { theme, themToggel } = useContext(ThemContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const handelLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')
                toast.success('Successfully Logout')
            })

            .catch(err => { console.log(err); })
    }

//     const menuItems = <>
//     <li className='mr-2 '>
// <div className='switeh flex w-100% gap-2'>
//     <label>{theme === 'light' ? "Light Mood" : "Dark Mood"}</label>
//     <ReactSwitch onChange={themToggel} checked={theme === "light"}></ReactSwitch>
// </div>
// </li>
//         <li className='text-white'><Link to='/home'> Home</Link></li>
//         <li className='text-white'><Link to='/addtask'> Add Task</Link></li>
//         <li className='text-white'><Link to='/mytask'> My Task</Link></li>
//         <li className='text-white'><Link to='/completedtask'> Completed Task</Link></li>
//         {user?.uid ?
//             <div className='lg:flex items-center'>
//                 <li><Link to='/profile'>

//                     {user?.photoURL ?
//                         <img className='w-10 rounded-full' src={user.photoURL} />
//                         :
//                         <p className='text-white'>Profile</p>}

//                 </Link></li>
//                 <button className='text-white mr-3' onClick={handelLogOut}> Log Out</button>

//             </div>
//             :
//             <>
//                 <li className='text-white'><Link to='/login'> Login</Link></li>
//                 <li className='text-white '><Link to='/singUp'> Sing Up</Link></li>
//             </>}


//     </>






    return (
        <div>


        <div className='nav'>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    <div className='flex'>
                        <div><img className='w-24' src="https://i.ibb.co/6F28ZQK/Minimalist-Initial-Letter-Logo-removebg-preview.png" alt="" srcset="" /></div>
                        <div><Link to='/home' className="btn btn-ghost normal-case hover:bg-blue-400 p-1 rounded-lg text-xl mt-5 switeh"><h1>My Task</h1></Link></div>
                    </div>
                    <ul className='flex switeh font-bold  items-center hidden space-x-8 lg:flex'>
                        <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/home'>Home</Link></li>
                        <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/addtask'>Add Task</Link></li>
                        <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/mytask'>My Task</Link></li>
                        <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/completedtask'>Completed</Link></li>
                        <li className='mr-2 '>

                            <div className='switeh flex w-100% gap-2'>
                                <label>{theme === 'light' ? "Light Mood" : "Dark Mood"}</label>
                                <ReactSwitch onChange={themToggel} checked={theme === "light"}></ReactSwitch>
                            </div>
                        </li>
                        <li>
                            <div className="" >
                                {user?.uid ? <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip={user?.displayName ? user.displayName : 'Name Not Available'}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div>
                                          <Link to='/profile'>
                                          <div className="w-10 rounded-full">
                                                <span className='ms-2'>{user?.photoURL ?
                                                    <img src={user.photoURL} />

                                                    :
                                                    <p>No Photo</p>
                                                }</span>

                                            </div>
                                          </Link>
                                        </div>
                                    </label>
                                    
                                </div>
                                    :

                                    <div >
                                        <ul className='className="menu menu-horizontal p-0 flex gap-4'>
                                            <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/login'>Log-In</Link></li>
                                            <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/register'>Register</Link></li>
                                        </ul>
                                    </div>

                                }
                            </div>
                        </li>
                    </ul>
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2  -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className='w-5 switeh text-gray-600' viewBox='0 0 24 24'>
                                <path
                                    fill='currentColor'
                                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                />
                            </svg>
                        </button>





                        {isMenuOpen && (
                            <div className='absolute  top-0 left-0 w-full'>
                                <div className='p-5 nav border rounded shadow-sm'>
                                    <div className='flex  items-center justify-between mb-4'>
                                        <div>
                                            <div className='flex'>
                                                <div><img className='w-24' src="https://i.ibb.co/6F28ZQK/Minimalist-Initial-Letter-Logo-removebg-preview.png" alt="" srcset="" /></div>
                                                <div><Link to='/home' className="btn btn-ghost normal-case hover:bg-blue-400 p-1 rounded-lg switeh text-xl mt-5 switeh"><h1 >E-Learning</h1></Link></div>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className='switeh space-y-4'>
                                            <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/home'>Home</Link></li>
                                            <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/courses'>Courses</Link></li>
                                            <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/faq'>FAQ</Link></li>
                                            <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/blog'>Blog</Link></li>
                                            <li className='mr-2 '>

                                                <div className='switeh flex w-100% gap-2'>
                                                    <label>{theme === 'light' ? "Light Mood" : "Dark Mood"}</label>
                                                    <ReactSwitch onChange={themToggel} checked={theme === "light"}></ReactSwitch>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="" >
                                                    {user?.uid ? <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip={user?.displayName ? user.displayName : 'Name Not Available'}>
                                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                            <div>
                                                                <Link to='/profile'>

                                                                    <div className="w-10 rounded-full">
                                                                        <span className='ms-2'>{user?.photoURL ?
                                                                            <img src={user.photoURL} />

                                                                            :
                                                                            <p>No Photo</p>
                                                                        }</span>

                                                                    </div>
                                                                </Link>

                                                            </div>
                                                        </label>

                                                    </div>
                                                        :

                                                        <div >
                                                            <ul className='className="menu menu-horizontal p-0 flex gap-4'>
                                                                <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/login'>Log-In</Link></li>
                                                                <li className='hover:bg-blue-400 p-1 rounded-lg'><Link to='/register'>Register</Link></li>
                                                            </ul>
                                                        </div>

                                                    }
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>









    </div>
    )
}

export default Header
