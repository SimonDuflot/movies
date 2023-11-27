import React, { useState, useEffect } from "react";
import Movie from "./Movies";
import "antd/dist/antd.css";
import styles from "../styles/Home.module.css";
import { Popover, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [likedMovies, setLikedMovies] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const apiKey = "c02b02611bbf11565598b22298f36150";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const formatedData = data.results.map((movie) => {
          const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          let overview = movie.overview;
          if (overview.length > 250) overview = overview.slice(0, 250) + "...";
          return {
            title: movie.title,
            overview,
            poster,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
          };
        });
        setMoviesData(formatedData);
      });
  }, []);

  const selectFavoriteMovie = (title) => {
    if (likedMovies.find((movie) => movie === title)) {
      setLikedMovies(likedMovies.filter((movie) => movie !== title));
    } else {
      setLikedMovies([...likedMovies, title]);
    }
  };

  let popoverMovies = likedMovies.map((movie, i) => {
    return (
      <li key={i}>
        {movie}
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={() => selectFavoriteMovie(movie)}
          className={styles.crossIcon}
        />
      </li>
    );
  });

  const popoverContent = (
    <div className={styles.popoverContent}>{popoverMovies}</div>
  );

  const movies = moviesData.map((data, i) => {
    const isLiked = likedMovies.some((mov) => mov === data.title);
    return (
      <Movie
        key={i}
        {...data}
        selectFavoriteMovie={selectFavoriteMovie}
        isLiked={isLiked}
      />
    );
  });
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logocontainer}>
          <img src="/images/logo.png" alt="Logo" />
          <img
            className={styles.logo}
            src="/images/logoletter.png"
            alt="Letter logo"
          />
        </div>
        <Popover
          title="Liked movies"
          content={popoverContent}
          className={styles.popover}
          trigger="click"
        >
          <Button>♥ {likedMovies.length} movie(s)</Button>
        </Popover>
      </div>
      <h2 className={styles.title}>LATEST RELEASES</h2>
      <div className={styles.moviesContainer}>{movies}</div>
    </div>
  );
}

export default Home;
