/* eslint-disable react/forbid-prop-types, react/jsx-closing-tag-location, react/jsx-wrap-multilines, max-len */
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ data, change }) => (
  (
    <div className="filter-container">
      <span className="filter-text">Filter by genre</span>
      {
        data && <select name="genre" onChange={(event) => change(event)}>
          <option value="All">All</option>
          {data.map((genre) => <option value={genre.id} key={genre.id}>{genre.name}</option>)}
          </select>
      }
    </div>
  )
);

Filter.propTypes = {
  data: PropTypes.array.isRequired,
  change: PropTypes.func.isRequired,
};

export default Filter;

/* eslint-enable */
