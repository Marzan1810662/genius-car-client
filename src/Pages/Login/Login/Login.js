import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const location = useLocation();
    let errorElement;
    if (loading || sending) {
        return <Loading />
    }
    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>
    }
    const from = location?.state?.from.pathname || '/';

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // console.log(email, password);

        await signInWithEmailAndPassword(email, password);
        // const { data } = await axios.post('http://localhost:5000/login', { email });
        const { data } = await axios.post('https://mighty-wildwood-30631.herokuapp.com/login', { email });
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

    }

    if (user) {
        // navigate('/home')
        // navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/register');
    }
    const resetpassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            // alert('Sent email');
            toast('Sent email');
        }
        else {
            toast('Enter your email');
        }
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login!</h2>
            <Form className='container' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='px-3 py-2'>
                New to Genius Car
                <span className='text-primary' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Please Rgester!</span>
            </p>

            <p className='px-3'>Forgot password?
                <button className='text-primary btn btn-link' style={{ cursor: 'pointer' }} onClick={resetpassword}>Reset Password</button>
            </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;