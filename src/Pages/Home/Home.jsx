import React from 'react';
import homeChef from '../../images/homeChef.png'

const Home = () => {
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
                            <p className='lg:text-xl text-xs lg:mt-4 mt-2 text-slate-100'>Cooking is a satisfying and essential skill that allows<br />us to explore our culinary creativity.It offers a journey<br />of discovery, from selecting fresh ingredients to<br />experimenting with flavors and techniques.<br />Ultimately,cooking provides a way to nourish<br />ourselves and others, connect with our senses, and<br />celebrate the richness of food.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;