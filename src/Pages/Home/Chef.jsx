import { Button, Card } from 'flowbite-react';
import React from 'react';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const Chef = ({ chef }) => {
    const {id, chef_picture, num_recipes, years_of_experience, chef_name,likes_num } = chef;
    return (
            <Card className='bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 font-abc transform transition duration-500 hover:scale-110'>
                <LazyLoad height={500} offset={300}>
                <img src={chef_picture} className='max-w rounded'/>
                </LazyLoad>
                <h1 className="lg:text-4xl text-3xl text-amber-400 font-medium">
                    {chef_name}
                </h1>
                <p className="lg:text-2xl text-xl">
                    Experience: <span className='text-amber-400'>{years_of_experience}+ Years</span>
                </p>
                <div className='justify-between flex lg:text-xl'>
                    <p>Recipes: <span className='text-amber-400'>{num_recipes} Items</span></p>
                    <div className='flex'>
                        <BiLike  className='text-2xl me-1'/>
                        <span className='text-amber-400'>{likes_num}</span>
                    </div>
                </div>
                <button className="bg-transparent hover:bg-amber-400 text-slate-100 hover:text-slate-100 py-2 px-4 border border-amber-400 hover:border-transparent rounded">
                <Link to={`/view_recipes/${id}`}>View Recipes</Link>
                </button>
            </Card>
    );
};

export default Chef;