import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import webLogo from '../../images/webLogo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='p-0 container mx-auto font-abc'
        >
            <Navbar.Brand
            >
                <img
                    src={webLogo}
                    className="lg:w-36 lg:h-36 h-20 w-20"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to='/' className='lg:text-xl'>
                    Home
                </Link>
                <Link to='/blog' className='lg:text-xl'>
                    Blog
                </Link>
                <Button gradientDuoTone="pinkToOrange" className='lg:relative lg:bottom-1 lg:text-xl'>
                    <Link to='/login'>Login</Link>
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;