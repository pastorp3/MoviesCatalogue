/* eslint-disable arrow-body-style, react/forbid-prop-types, max-len */

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Home.css';
import { useEffect } from 'react';
import { fetchGenre, fetchMovies } from '../../actions/actions';
import Movie from '../../components/Movie/Movie';

const Home = ({
  movies,
  genres,
  getMovies,
  getGenres,
}) => {
  console.log(movies);
  useEffect(async () => {
    await getMovies();
    await getGenres();
  }, []);
  const matchGenre = (ids) => {
    const values = [];
    let tmp = genres.slice();
    tmp = tmp.filter((genre) => ids.includes(genre.id));
    tmp.map((x) => values.push(x.name));
    return values;
  };
  const fetchedMovies = movies && movies;

  return (
    <div>
      <h1>Home</h1>
      { fetchedMovies && fetchedMovies.map((movie) => <Movie key={movie.id} movieGenres={genres && matchGenre(movie.genre_ids)} title={movie.original_title} year={movie.release_date} />) }
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.bool.isRequired,
  genres: PropTypes.bool.isRequired,
  getMovies: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
};

const mapStateProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genre,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(fetchMovies()),
    getGenres: () => dispatch(fetchGenre()),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Home);

/* eslint-enable */
