/* eslint-disable arrow-body-style, react/forbid-prop-types, max-len, radix */

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Home.css';
import { useEffect, useState } from 'react';
import { fetchGenre, fetchMovies } from '../../actions/actions';
import Movie from '../../components/Movie/Movie';
import Navbar from '../../components/Navbar/Navbar';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';

const Home = ({
  movies,
  genres,
  getMovies,
  getGenres,
}) => {
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
  const [filter, setFilter] = useState('All');
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const fetchedMovies = movies && movies;
  const filterMovies = movies && filter !== 'All' ? movies.filter((movie) => movie.genre_ids.includes(parseInt(filter))) : movies;

  return (
    <div>
      <Navbar />
      <Filter data={genres} change={handleFilter} />
      <div className="movies-container">
        { fetchedMovies && filterMovies.map((movie) => <Movie key={movie.id} poster={movie.poster_path} id={movie.id} movieGenres={genres && matchGenre(movie.genre_ids)} title={movie.original_title} year={movie.release_date} />) }
      </div>
      <Footer />
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
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
