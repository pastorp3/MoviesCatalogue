/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = ({
  title,
  year,
  poster,
  id,
}) => {
  const imgSrc = `https://image.tmdb.org/t/p/w500/${poster}`;
  const link = `/movie/${id}`;
  return (
    <div data-test="Movie-card" className="Movie-card">
      <div data-test="Movie-poster">
        <Link to={link}>
          <img alt="poster" src={imgSrc} className="poster" />
        </Link>
      </div>
      <div data-info="Movie-info" className="movie-info">
        <span className="movie-title">{title}</span>
        <br />
        <span className="movie-date">{year}</span>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;

/* eslint-enable */
