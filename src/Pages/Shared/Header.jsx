import { Avatar, Button, Navbar } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import webLogo from '../../images/webLogo.png'
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../Provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css';
const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const handleLogout = () =>{
        logOut()
        .then(result=> {})
        .catch(error => console.error(error))
    }
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
                <Link to='/' className='lg:text-xl ms-3'>
                    Home
                </Link>
                <Link to='/blog' className='lg:text-xl ms-3'>
                    Blog
                </Link>
                <Tooltip
                    id="my-tooltip"
                    content={user? user.displayName : ""}
                    isOpen={isOpen}
                />
                {user ? <>
                    <a data-tooltip-id="my-tooltip" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                            {<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                    </a>
                <Button gradientDuoTone="pinkToOrange" className='lg:relative lg:bottom-1 lg:text-xl'>
                    <Link onClick={handleLogout}>Logout</Link>
                </Button></> : <Button gradientDuoTone="pinkToOrange" className='lg:relative lg:bottom-1 lg:text-xl'>
                    <Link to='/login'>Login</Link>
                </Button>}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;