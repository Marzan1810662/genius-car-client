import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Regiser.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if(loading || updating){
        return <Loading/>
    }

    if (user) {
        // navigate('/home')
        console.log(user);
    }

    const handleregister = async (event) => {
        event.preventDefault();
        /* console.log(event.target);
        console.log(event.target.email);
        console.log(event.target.email.value); */
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        /* const agree = event.target.terms.checked;
        if(agree){
            createUserWithEmailAndPassword(email, password);
        } */
        /* if(agree){
            createUserWithEmailAndPassword(email, password);
        } */
        // createUserWithEmailAndPassword(email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home');
    }
    if (user) {
        navigate('/');
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary' style={{ textAlign: 'center' }}>Please register!</h2>
            <form onSubmit={handleregister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car terms and conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept genius Car terms and conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2' type="submit"
                    value="Register" />
            </form>
            <p>Already Have An Account? <Link className='text-primary pe-auto text-decoration-none' style={{ cursor: 'pointer' }} to="/login" >Please Login!</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;