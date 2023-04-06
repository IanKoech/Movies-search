import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icon.png'
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
           <Link to="/">
                <div className='logo'>
                    <div className='user-image'>
                        <img src={logo} alt=""/>
                    </div>
                </div>
           </Link>
           {/* <div className='user-image'>
                <img src={logo}  alt=''/>
           </div> */}

        </div>
    );
};

export default Header;