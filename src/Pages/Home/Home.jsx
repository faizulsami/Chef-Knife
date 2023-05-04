import React, { useEffect } from 'react';
import homeChef from '../../images/homeChef.png'
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpg'
import pic5 from '../../images/pic5.jpg'
import pic6 from '../../images/pic6.jpg'
import { Carousel } from 'flowbite-react';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    const chefs = useLoaderData();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className='bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400'>
                <div className='container mx-auto'>
                    <div className='lg:flex gap-28 justify-center'>
                        <div>
                        <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                            <img src={homeChef}/>
                        </LazyLoad>
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
                        chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                    }
                </div>
                <div className='text-center mt-3 lg:my-12'>
                    <h1 className='font-abc text-slate-800 text-2xl lg:text-5xl'>OUR GALLERY</h1>
                    <hr className='lg:w-64 w-28 mx-auto mt-1 lg:mt-4 border-2 lg:border-4 border-amber-400 rounded'/>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-4 mt-3 lg:my-12 lg:w-auto w-80 justify-center align-middle mx-auto'>
                    <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img src={pic1} className='rounded lg:rounded-none'/>
                    </LazyLoad>
                    <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img src={pic2} className='rounded lg:rounded-none'/>
                    </LazyLoad>
                    <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img src={pic3} className='rounded lg:rounded-none'/>
                    </LazyLoad>
                    <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img src={pic4} className='rounded lg:rounded-none'/>
                    </LazyLoad>
                    <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img src={pic5} className='rounded lg:rounded-none'/>
                    </LazyLoad>
                    <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img src={pic6} className='rounded lg:rounded-none'/>
                    </LazyLoad>
                    
                </div>
                <div className='text-center mt-3 lg:my-12'>
                    <h1 className='font-abc text-slate-800 text-2xl lg:text-5xl'>REVIEWS ABOUT US</h1>
                    <hr className='lg:w-64 w-28 mx-auto mt-1 lg:mt-4 border-2 lg:border-4 border-amber-400 rounded'/>
                </div>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-4">
                    <Carousel className='w-11/12 mx-auto font-abc lg:text-xl text-center text-xs'>
                            <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400">
                            <p>"I had an amazing experience at this restaurant! The food was absolutely delicious, and<br />
                            the service was top-notch. The atmosphere was cozy and welcoming, and I felt right at<br />
                            home. I highly recommend this place to anyone looking for a fantastic dining experience."<span className='text-amber-400'> - Cristiano Ronaldo</span>
                            </p>
                            </div>
                            <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400">
                            <p>
                            "I was disappointed with my visit to this restaurant. The food was mediocre at best, and<br />
                            the service was slow and inattentive. The prices were also quite high for the quality of the<br/>
                            food. I wouldn't recommend this place to anyone."<span className='text-amber-400'> - Beyoncé</span>
                            </p>
                            </div>
                            <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400">
                            <p>
                            "I loved the creative and unique dishes at this restaurant. The flavors were bold and<br/>
                            unexpected, and everything was expertly prepared. The service was friendly and helpful,<br/> 
                            and the atmosphere was lively and fun. I can't wait to come back and try more!"<span className='text-amber-400'> - Dwayne "The Rock" Johnson</span>
                            </p>
                            </div>
                            <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400">
                            <p>
                            "This restaurant was a total letdown. The food was bland and uninspired, and the service<br/> 
                            was rude and dismissive. I felt like I was being rushed out the door as soon as I sat down.<br/>
                            Save your money and go somewhere else."<span className='text-amber-400'> - Emma Watson</span>
                            </p>
                            </div>
                            <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400">
                            <p>
                            "I had an overall positive experience at this restaurant. The food was tasty, and the service<br />
                            was prompt and friendly. However, the noise level was quite high, making it difficult to<br />
                            have a conversation. I'd recommend this place for a quick bite, but not for a leisurely<br /> 
                            meal."<span className='text-amber-400'> - Gordon Ramsay</span>
                            </p>
                            </div>
                    </Carousel>
                </div>
            </div>
            
        </div>
    );
};

export default Home;