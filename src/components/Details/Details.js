/* eslint-disable  prefer-template, max-len */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Navbar from '../Navbar/Navbar';
import './Details.css';
import play from '../../assets/play.png';
import Footer from '../Footer/Footer';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(false);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3//movie/${id}?api_key=85c461272a40b11f9fdd119183a15d9a`)
      .then(({ data }) => {
        setDetails(data);
      });
  }, []);
  const imgSrc = `https://image.tmdb.org/t/p/w500/${details.poster_path}`;
  const styles = {
    backgroundImage: 'url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/' + details.backdrop_path + ')',
  };
  const percentage = details.vote_average * 10;
  return (
    <div>
      <Navbar />
      <div>
        <div className="poster-background" style={styles}>
          <div className="main-container-details">
            <div>
              { details && <img alt="poster-details" src={imgSrc} className="details-poster" /> }
            </div>
            <div className="details-text">
              <span className="details-title">{details.original_title}</span>
              <br />
              <span>{details && details.release_date}</span>
              <span className="details-language">
                (
                {details.original_language}
                )
              </span>
              <span className="details-dot">|</span>
              { details && details.genres.map((genre) => <span className="genre" key={genre.id}>{genre.name}</span>)}
              <span className="details-dot">|</span>
              <span>
                {details && details.runtime}
                m
              </span>
              <br />
              <div className="details-second-container">
                <div className="details-progress">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textColor: '#fff',
                      pathColor: '#228B22',
                      textSize: '26px',
                    })}
                  />
                  <span className="details-score">User Score</span>
                </div>
                <img src={play} alt="playIcon" className="play-icon" />
                <span>Play Trailer</span>
              </div>
              <div className="tagline">{details && details.tagline}</div>
              <div className="overview-title">Overview</div>
              <div>
                {details && details.overview}
              </div>
              <div className="details-status">
                <span>Status: </span>
                <span>{details && details.status}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="details-companies">
          <h2>Production Companies</h2>
          <div className="companies-container">
            {
              details && details.production_companies.map((company) => <img alt={company.name} className="logo-company" key={company.id} src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`} />)
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Details;

/* eslint-enable */
