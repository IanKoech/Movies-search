import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import movieAPI from '../../common/movieAPIs/movieAPI';
import { APIKey } from '../../common/movieAPIs/movieApiKey';

const Home = () => {
    useEffect(() => {
        const movieText = "Pirates";
        const fetchMovies = async () => {
            const response = await  movieAPI.get(`?apiKey=${APIKey}&&s=${movieText}&&type=movie`
            ).catch((err) => {
                console.log(err);
            });
            console.log('The response is ', response);
        }
        fetchMovies();
    }, []);

    return (
        <div className='banner-img'>
           <MovieList/>
        </div>
    );
};

export default Home;