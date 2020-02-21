import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres, runtime }) {
  // Home.js 에서 가져온 data들을 가지고 화면에 보이도록합니다.
  // 또한 Movie를 눌렀을 때 해당 영화의 세부사항을 보여주기 위해 Link를 추가합니다. 이 Link에는 Home.js에서 가져온 Props를 또 넣어 줍니다.
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              year,
              title,
              summary,
              poster,
              genres
            }
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year},</h5>
          <h5 className="movie_runtime">{runtime} min</h5>
          <ul className="movie_genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres_genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie_summary">{summary.slice(0, 500)}...</p>
        </Link>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired
};

export default Movie;
