import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({title, poster}) => {
  return ( 
    <div>
      <MoviePoster poster={poster}/>
      <h1>{title}</h1>
    </div>
  );
}
 
Movie.proptypes = {
  title: PropTypes.string.isrequired,
  poster: PropTypes.string.isRequired
}

const MoviePoster = ({poster}) => {
  return ( 
    <img src={poster} alt="Movie Poster" />
  );
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}
 
export default Movie;
