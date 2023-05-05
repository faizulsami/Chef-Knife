import React, { useContext, useState } from 'react';
import loginImg from '../../images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    const {googlePopup,gitPopup,signIn} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(location.state);
    const navigate = useNavigate();
    const handleGoogleSignIn = () =>{
        googlePopup()
        .then((result) => {
            const LoggedUser = result.user;
            console.log(LoggedUser);
            navigate(from,{replace: true})
        })
        .catch((error) => {
            console.log("error", error.message);
        });
    }
    const handleGitHubSignIn = () =>{
        gitPopup()
        .then(result => {
            const LoggedUser = result.user;
            console.log(LoggedUser);
            navigate(from,{replace: true})
            })
            .catch(error =>{
                console.log(error);
            })
    }
    const handleLogin = event =>{
        setError('');
        setSuccess('');
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('Login successful');
            setError('');
            navigate(from,{replace: true})
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2'>
                <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                <img src={loginImg} className='lg:w-7/12 rounded-lg lg:ms-64' />
                </LazyLoad>
                <div
                    className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 font-abc ms-4 lg:ms-0 mt-5 lg:mt-0">
                    <form onSubmit={handleLogin} className="space-y-6" action="#">
                        <h3 className="text-xl font-medium text-amber-400">Login</h3>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium  block mb-2 text-amber-400">Your email</label>
                            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium block mb-2 text-amber-400">Your password</label>
                            <input type="password" name="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <button className="w-full bg-transparent hover:bg-amber-400 text-slate-100 hover:text-slate-100 py-2 px-4 border border-amber-400 hover:border-transparent rounded">Login</button>
                        <p className='text-green-300'>{success}</p>
                        <p className='text-red-600'>{error}</p>
                        <div className="text-sm font-medium dark:text-gray-300 text-amber-400">
                            Not registered? <Link className='text-white' to='/register'>Register</Link>
                        </div>
                    </form>
                    <hr className="h-px my-8 bg-amber-400 border-0 dark:bg-gray-700"></hr>
                    <button onClick={handleGitHubSignIn} className="w-full bg-transparent hover:bg-amber-400 text-slate-100 hover:text-slate-100 py-2 px-4 border border-amber-400 hover:border-transparent rounded">GitHub Login</button>
                    <button onClick={handleGoogleSignIn} className="w-full lg:mt-5 mt-3 bg-transparent hover:bg-amber-400 text-slate-100 hover:text-slate-100 py-2 px-4 border border-amber-400 hover:border-transparent rounded">Google Sign-in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;