import React, { useContext, useState } from 'react';
import ui2 from '../../images/ui2.png';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    const {createUser} = useContext(AuthContext);
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('Please add at least six letters.');
            return;
        }
        createUser(email,password)
        .then(result => {
            updateUserProfile(name, photo)
            const createUser = result.user;
            setSuccess('Registration Successful');
            setError('');
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2'>
            <LazyLoad threshold={1} onContentVisible={() => {console.log('loaded!')}}>
                <img src={ui2} className='lg:w-7/12 rounded-lg lg:ms-64'/>
                </LazyLoad>
                    <div
                        className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 font-abc ms-4 lg:ms-0 mt-5 lg:mt-0">
                        <form onSubmit={handleRegister} className="space-y-6" action="#">
                            <h3 className="text-xl font-medium text-amber-400">Register</h3>
                            <div>
                                <label htmlFor="text" className="text-sm font-medium  block mb-2 text-amber-400">Your Name</label>
                                <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="User name" required="" />
                            </div>
                            <div>
                                <label htmlFor="text" className="text-sm font-medium  block mb-2 text-amber-400">Photo URL</label>
                                <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="URL" required="" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium  block mb-2 text-amber-400">Your email</label>
                                <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-sm font-medium block mb-2 text-amber-400">Your password</label>
                                <input type="password" name="password"  placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                            </div>
                            <button className="w-full bg-transparent hover:bg-amber-400 text-slate-100 hover:text-slate-100 py-2 px-4 border border-amber-400 hover:border-transparent rounded">Register to your account</button>
                            <div className="text-sm font-medium dark:text-gray-300 text-amber-400">
                                Already registered? <Link className='text-white' to='/login'>Login</Link>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default Register;