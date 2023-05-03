import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/Fa";
import { FcLike } from "react-icons/fc";
import Rating from 'react-rating';
import { toast } from 'react-toastify';

const Recipe = ({ recipe }) => {
    const { name, img, ingredients, method, rating } = recipe;
    const [active, setActive] = useState(false)
    const HandelLike = () => {
        setActive(true)
        toast("Successfully Added");
    }
    return (
        <div className="mx-auto">
            <Card
                className='font-abc cursor-pointer group-hover:blur-sm hover:!blur-none
                bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400 to-rose-400 shadow-2xl'
            >
            <img src={img} className='rounded-full'/>
            <p className='text-2xl text-amber-400'>{name}</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <p className='lg:text-xl text-xl'>Ingredients</p>
                    {ingredients.map((ingredient, index) => (
                        <li className='text-stone-600' key={index}> {ingredient} </li>
                    ))}
                </div>
                <div>
                    <p className='lg:text-xl text-xl'>Methods</p>
                    {method.map((methods, index) => (
                        <li className='text-stone-600' key={index}> {methods} </li>
                    ))}
                </div>
            </div>
            <div className='flex justify-between'>
                <div > 
                    <p className='text-xl'>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar className='text-amber-400'></FaRegStar>}
                            placeholderSymbol={<FaStar  className='text-amber-400'></FaStar>}
                            fullSymbol={<FaStar  className='text-amber-400'></FaStar>} /> <span className='pb-5'>{rating}</span>
                    </p>
                </div>
                <div className='font-abc'>
                <button onClick={HandelLike} disabled={active}> 
                        {
                        active ? <button class=" cursor-not-allowed">
                        <FcLike className='text-3xl'></FcLike>
                        </button> : 
                            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Add to favorite
                        </button>
                        }
                        </button>
                </div>
            </div>
            </Card>
        </div>
    );
};

export default Recipe;