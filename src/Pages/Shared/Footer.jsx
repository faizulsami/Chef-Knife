import { Footer } from 'flowbite-react';
import React from 'react';
import webLogo from '../../images/webLogo.png'

const Footer_1 = () => {
    return (
        <Footer container={true} className='container mx-auto mt-2 lg:mt-20'>
            <div className="w-full text-center font-abc">
                <div className="w-full justify-between flex items-center">
                    <img src={webLogo} className='lg:w-36 w-20'/>
                    <Footer.LinkGroup className='gap-2'>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                    href="#"
                    by="CHEF KNIFE™"
                    year={2023}
                />
            </div>
        </Footer>
    );
};

export default Footer_1;