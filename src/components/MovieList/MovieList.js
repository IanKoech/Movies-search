import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import '../MovieList/MovieList.scss';

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies, renderShows = '';
    
    // eslint-disable-next-line no-unused-vars
    renderMovies = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })
    ) : (
        <div className='movie-error'>
            <h3>{movies.error}</h3>
        </div>
    )

    renderShows = shows.Response === 'True' ? (
        shows.Search.map((show, index) => {
            return <MovieCard key={index} data={show} />
        })
    ) : (
        <div className='movie-error'>
            <h3>{movies.error}</h3>
        </div>
    )

    console.log(movies);
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>{renderMovies}</div> 
            </div>

            <div className='movie-list'>
                <h2>Shows</h2>
                <div className='movie-container'>{renderShows}</div>
                
            </div>
        </div>
    );
};

export default MovieList;