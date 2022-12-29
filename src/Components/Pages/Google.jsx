import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Context';



const Google = () => {
    const { googleSignin } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const googleSubmit = () => {
        googleSignin(googleProvider)
            .then((result) => {
                const user = result.user;
                toast.success('Register Success')
                navigate('/')
            })
            .catch(error => console.error(error))
    };
    return (
        <div>
            <button onClick={googleSubmit} className='btn btn-outline w-full gap-2'><FaGoogle /> CONTINUE WITH GOOGLE</button>
        </div>
    )
}

export default Google
