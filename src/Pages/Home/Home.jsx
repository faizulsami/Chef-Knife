import React from 'react';
import homeChef from '../../images/homeChef.png'
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpg'
import pic5 from '../../images/pic5.jpg'
import pic6 from '../../images/pic6.jpg'

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <div className='bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400'>
                <div className='container mx-auto'>
                    <div className='lg:flex gap-28 justify-center'>
                        <div>
                            <img src={homeChef}/>
                        </div>
                        <div className='lg:text-end text-center lg:my-auto font-abc'>
                            <h1 className='lg:text-5xl text-xl lg:mt-0 mt-3 text-amber-400'>We do not cook, we create<br/>your emotions!</h1>
                            <p className='lg:text-xl text-xs lg:mt-4 mt-2 text-slate-100 lg:pb-0 pb-3'>Cooking is a satisfying and essential skill that allows<br />us to explore our culinary creativity.It offers a journey<br />of discovery, from selecting fresh ingredients to<br />experimenting with flavors and techniques.<br />Ultimately,cooking provides a way to nourish<br />ourselves and others, connect with our senses, and<br />celebrate the richness of food.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='text-center mt-3 lg:my-12'>
                <h1 className='font-abc text-slate-800 text-2xl lg:text-5xl'>OUR TOP CHEFS</h1>
                <hr className='lg:w-64 w-28 mx-auto mt-1 lg:mt-4 border-2 lg:border-4 border-amber-400 rounded'/>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:mt-5 lg:gap-8 gap-6 mt-3 '>
                    {
                        chefs.map(chef => <Chef key={chefs.id} chef={chef}></Chef>)
                    }
                </div>
                <div className='text-center mt-3 lg:my-12'>
                    <h1 className='font-abc text-slate-800 text-2xl lg:text-5xl'>OUR GALLERY</h1>
                    <hr className='lg:w-64 w-28 mx-auto mt-1 lg:mt-4 border-2 lg:border-4 border-amber-400 rounded'/>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-4 mt-3 lg:my-12 lg:w-auto w-80 justify-center align-middle mx-auto'>
                    <img src={pic1} className='rounded lg:rounded-none'/>
                    <img src={pic2} className='rounded lg:rounded-none'/>
                    <img src={pic3} className='rounded lg:rounded-none'/>
                    <img src={pic4} className='rounded lg:rounded-none'/>
                    <img src={pic5} className='rounded lg:rounded-none'/>
                    <img src={pic6} className='rounded lg:rounded-none'/>
                </div>
            </div>
        </div>
    );
};

export default Home;