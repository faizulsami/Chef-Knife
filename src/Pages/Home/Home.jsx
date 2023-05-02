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
                        <div className='lg:text-end text-center lg:my-auto'>
                            <h1>We do not cook, we create<br/>your emotions!</h1>
                            <p>Cooking is a satisfying and essential skill that allows<br />us to explore our culinary creativity.It offers a journey<br />of discovery, from selecting fresh ingredients to<br />experimenting with flavors and techniques.<br />Ultimately,cooking provides a way to nourish<br />ourselves and others, connect with our senses, and<br />celebrate the richness of food.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;