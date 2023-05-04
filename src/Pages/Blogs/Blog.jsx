import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className='m-3 py-5'>
                <h1 className='text-2xl py-2'>
                    Tell us the differences between uncontrolled and controlled components ?
                </h1>
                <p className='font-semibold'>
                    In React.js, an uncontrolled component manages its state by itself, while a controlled component manages its state with the help of external data.
                    <br />
                    Uncontrolled components are simple to use but provide limited control over state, while controlled components offer more control but require more setup.
                    <br />
                    Uncontrolled components are typically HTML form elements like input, textarea, and select, while controlled components are custom form elements like dropdowns, checkboxes, and radio buttons.
                </p>
            </div>
            <div className='m-3 py-5'>
                <h1 className='text-2xl py-2'>
                    How to validate React props using PropTypes ?
                </h1>
                <p className='font-semibold'>
                    To validate React props using PropTypes:
                    <br />
                    1. Import the PropTypes library.
                    <br />
                    2.  Define the expected prop types for the component using the propTypes object.
                    <br />
                    3. You can define the type and shape of expected props, including required props and nested objects, arrays, or functions.
                    <br />
                    4. PropTypes help catch bugs and ensure your components are used correctly.
                </p>
            </div>
            <div className='m-3 py-5'>
                <h1 className='text-2xl py-2'> Tell us the difference between nodejs and express js.?</h1>
                <p className='font-semibold'>

                    Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a browser to build server-side applications. Express.js is a web application framework built on top of Node.js that provides tools and abstractions for building web applications, such as routing and middleware. The key difference is that Node.js provides the core functionality, while Express.js provides additional tools and abstractions.
                </p>
            </div>
            <div className='m-3 py-5'>
                <h1 className='text-2xl py-2'>What is a custom hook, and why will you create a custom hook?</h1>
                <p className='font-semibold'>

                    A custom hook in React.js is a JavaScript function that starts with the prefix "use" and uses built-in hooks or other custom hooks to create reusable logic. Custom hooks are used to share logic across components, encapsulate complex logic, and abstract away implementation details. They improve code reusability, simplify complex logic, and improve code organization.
                </p>
            </div>
        </div>
    );
};

export default Blog;