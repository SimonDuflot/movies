import React, { useState } from "react";
import styles from "@/styles/Movies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Movie(props) {
  const {
    poster,
    title,
    overview,
    voteAverage,
    voteCount,
    selectFavoriteMovie,
    isLiked,
  } = props;

  const [like, setLike] = useState(false);

  let heartStyle = { cursor: "pointer" };
  const handleClickFavorite = () => {
    selectFavoriteMovie(title);
    // like ? setLike(false) : setLike(true);
  };

  if (isLiked) {
    heartStyle = { color: "red" };
  }

  const stars = [];
  const totalStars = 10;
  for (let i = 0; i < totalStars; i++) {
    let starColor = "black";
    if (i < voteAverage - 1) {
      starColor = "#f1c40f";
    }
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} style={{ color: starColor }} />
    );
  }

  const [personalNote, setPersonalNote] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleMouseOverStar = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeaveStar = () => {
    setHoverValue(undefined);
  };

  const handleClickStar = (value) => {
    setPersonalNote(value);
  };

  const colors = {
    blue: "blue",
    black: "black",
    red: "#e74c3c",
  };

  const starRating = Array(10).fill(0);

  const customRating = starRating.map((_, index) => {
    return (
      <FontAwesomeIcon
        icon={faStar}
        key={index}
        value={personalNote}
        onChange={(e) => setPersonalNote(e.target.value)}
        color={
          (hoverValue || personalNote) > index ? colors.blue : colors.black
        }
        onClick={() => handleClickStar(index + 1)}
        onMouseOver={() => handleMouseOverStar(index + 1)}
        onMouseLeave={() => handleMouseLeaveStar()}
        cursor={"pointer"}
      />
    );
  });

  const [watchCount, setWatchCount] = useState(0);

  const handleClickWatchCount = () => {
    setWatchCount(watchCount + 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt={title}
        />
        <span className={styles.favorite}>
          {" "}
          Add to favorites{"  "}
          {
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => handleClickFavorite()}
              color={like ? colors.red : colors.black}
              style={heartStyle}
            />
          }
        </span>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.name}>{title}</span>
        <p className={styles.description}>{overview}</p>
        <span className={styles.vote}>
          {stars} ({voteCount})
        </span>
      </div>
      <span>
        {customRating} ({personalNote})
      </span>
      <span className={styles.watchCount}>
        Watched:{" "}
        {
          <FontAwesomeIcon
            icon={faVideo}
            onClick={() => handleClickWatchCount()}
            color={watchCount > 0 ? colors.red : colors.black}
            style={{
              cursor: "pointer",
            }}
          />
        }{" "}
        ({watchCount})
      </span>
    </div>
  );
}

export default Movie;
