/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

const Movie = ({ title, year, movieGenres }) => (
  (
    <div>
      <span>{title}</span>
      <span>{year}</span>
      <span>{movieGenres}</span>
    </div>
  )
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  movieGenres: PropTypes.array.isRequired,
};

export default Movie;

/* eslint-enable */
