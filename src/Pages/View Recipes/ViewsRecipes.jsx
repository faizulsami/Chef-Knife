import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import Recipe from './Recipe';
import LazyLoad from 'react-lazy-load';


const ViewsRecipes = () => {
    const chef = useLoaderData();
    const {bio, chef_picture, num_recipes, years_of_experience, chef_name,likes_num, recipes , id } = chef;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='container mx-auto'>
            <div className="lg:transform lg:transition lg:duration-500 lg:hover:scale-110 shadow-2xl rounded-2xl grid grid-cols-1 lg:grid-cols-2 mx-auto
            bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 font-abc">
                <LazyLoad threshold={1} onContentVisible={() => {console.log('loaded!')}}>
                <img src={chef_picture} className='rounded-t-2xl lg:rounded-tr-none lg:rounded-s-2xl lg:w-10/12 lg:border-e-4 lg:border-amber-400'/>
                </LazyLoad>
                <div className='font-abc lg:my-auto ms-3 lg:ms-0'>
                    <p className='lg:text-5xl text-xl text-amber-400'>{chef_name}</p>
                    <p className='lg:text-xl text-xs text-slate-100'>{bio}</p>
                    <p className='lg:text-3xl text-sm'>Experience: <span className='text-amber-400'>{years_of_experience}+ Years</span></p>
                    <div className='justify-between flex'>
                        <p className='lg:text-2xl text-sm'>Recipes: <span className='text-amber-400'>{num_recipes}</span></p>
                        <div className='flex lg:me-12 me-3'>
                            <BiLike  className='lg:text-2xl text-sm mt-1 me-1'/>
                            <span className='lg:text-2xl text-sm text-amber-400'>{likes_num}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-3 lg:my-12'>
                    <h1 className='font-abc text-slate-800 text-2xl lg:text-5xl'>RECIPES</h1>
                    <hr className='lg:w-64 w-28 mx-auto mt-1 lg:mt-4 border-2 lg:border-4 border-amber-400 rounded'/>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5 group'>
                {
                    recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default ViewsRecipes;