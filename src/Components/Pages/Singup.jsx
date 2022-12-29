import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Context';
import Google from './Google';

const SingUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateName, setRender, setUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');

    const navigate = useNavigate()


    const handleSignUp = (data) => {
        const photoURL = data.photoURL[0];
        const formData = new FormData();
        formData.append('image', photoURL);
        const url = 'https://api.imgbb.com/1/upload?key=56b634afb1bea6129ca7b774d0d3db94'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData);
                setSignUPError('');
                createUser(data.email, data.password, )
                    .then(result => {
                        const user = result.user;
                        toast.success('User Created Successfully.')
                        navigate('/')
                        const userInfo = {
                            displayName: data.displayName,
                        }
                        updateName(userInfo)
                            .then(() => {
                                saveUser(data.displayName, data.email, imageData.data.url)
                            })
                            .catch((error) => {
                                toast.error(error.massage)
                            });
                    })
                    .catch(error => {
                        console.log(error)
                        setSignUPError(error.message)
                    });
            })

            .catch(error => {
                console.log(error)
            });
    };





    const saveUser = (displayName, email,  photoURL) => {
        const user = { displayName, email,  photoURL };
        fetch('https://server-task-my-task.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUser(pred => ({ ...pred, ...user }))
                setRender(prev => !prev)
                navigate('/');
            })
    };





    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("displayName", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("photoURL", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn bg-indigo-500 text-white w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <Google></Google>


            </div>
        </div>
    )
}

export default SingUp
