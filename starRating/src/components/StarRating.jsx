import { useState } from "react";
import "./starRating.css";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const StarRating = ({ starCount = 5 }) => {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(1);

  function handleClick(starNum) {
    setRating(starNum);
  }

  function handleMouseEnter(starNum) {
    setHover(starNum);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="wrapper">
      <h1>Star Rating</h1>
      <div className="star-rating">
        {[...Array(starCount)].map((_, index) => {
          const starNum = index + 1;
          return (
            <FaStar
              key={starNum}
              className={starNum <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(starNum)}
              onMouseEnter={() => handleMouseEnter(starNum)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
};

StarRating.propTypes = {
  starCount: PropTypes.number.isRequired,
};

export default StarRating;
