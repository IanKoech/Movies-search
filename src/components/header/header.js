import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icon.png'
import './Header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const submitHandler  = (e) => {
        // eslint-disable-next-line no-unused-expressions
        e.preventDefault();
        if(term===''){
           return alert('Please enter search term'); 
        }
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        console.log("term entered is ",term);
        setTerm('');
    }
    return (
        <div className='header'>
                
                <div className='logo'>
                <Link to="/">
                    <div className='user-image'>
                        <img src={logo} alt=""/>
                    </div>
                </Link>
                <div className='search-bar'>
                    <form onSubmit={submitHandler}>
                        <input 
                            type='text' 
                            value={term} 
                            placeholder='Search for movie and shows'
                            onChange={(e)=> setTerm(e.target.value)}
                        />
                        <button type='submit'><i className='fa fa-search'></i></button>
                    </form>
                </div>
                </div>
                
           {/* <div className='user-image'>
                <img src={logo}  alt=''/>
           </div> */}

        </div>
    );
};

export default Header;