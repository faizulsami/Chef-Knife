import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import webLogo from '../../images/webLogo.png'

const Header = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='p-0 container mx-auto'
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
                <Navbar.Link
                    className='lg:text-xl'
                    to='/'
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    
                    to="/blog"
                    className='lg:text-xl'
                >
                    Blog
                </Navbar.Link>
                <Button gradientDuoTone="pinkToOrange" className='lg:relative lg:bottom-1 lg:text-xl'>
                    Login
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;