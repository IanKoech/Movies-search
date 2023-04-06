import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import movieAPI from '../../common/movieAPIs/movieAPI';
import { APIKey } from '../../common/movieAPIs/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const movieText = "Pirates";
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await  movieAPI.get(`?apiKey=${APIKey}&&s=${movieText}&&type=movie`
            ).catch((err) => {
                console.log("Displaying error ",err);
            });
            console.log("The response is ",response);
            dispatch(addMovies(response.data));
        }
        fetchMovies();
    });

    return (
        <div className='banner-img'>
           <MovieList/>
        </div>
    );
};

export default Home;