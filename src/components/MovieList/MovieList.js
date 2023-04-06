import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    console.log(movies);
    return (
        <div>
            MovieList
        </div>
    );
};

export default MovieList;