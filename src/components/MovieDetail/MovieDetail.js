import React, { useEffect } from 'react';
import { removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from '../../features/movies/movieSlice'; 
import './MovieDetail.scss';

const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch  = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrShow());
        } 
    }, [dispatch, imdbID])
    return ( 
        <div className='movie-section'>
            <div className='section-left'>
                <div className='movie-title'>
                    {data.Title}
                </div>
                <div className='movie-rating'>
                    <ul>
                        <li> <span>IMDB Rating <i className='fa fa-star'>{data.imdbRating}</i></span>
                            <br></br>
                        </li>
                        <li>
                            <span>IMDB Votes <i className='fa fa-thumbs-up'></i> : {data.imdbVotes}</span>
                            <br></br>
                        </li>
                        <li>
                            <span>Runtime <i className='fa fa-film'></i> : {data.Runtime}</span>
                            <br></br>
                        </li>
                        <li>
                             <span>Year <i className='fa fa-calendar'></i> : {data.Year}</span>
                        </li>
                    </ul>
                   <p></p>
                    <p></p>
                </div>
                <div className='movie-plot'>
                    {data.Plot}
                </div>
                <div className='movie-info'>
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Actors</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Genre</span>
                        <span>{data.Genre}</span>
                    </div>
                </div>
            </div>
            <div className='section-right'>
                <img src={data.Poster} alt={data.Title} />
            </div>
        </div>
    );
};

export default MovieDetail;