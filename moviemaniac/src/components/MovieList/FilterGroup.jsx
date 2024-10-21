import React from "react";

const FilterGroup = ({ onRatingClick, minRating, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rate) => {
        return (
          <li
            className={
              minRating === rate
                ? "movie_filter_item active"
                : "movie_filter_item"
            }
            onClick={() => onRatingClick(rate)}
            key={rate}
          >
            {rate}+ Star
          </li>
        );
      })}
    </ul>
  );
};

export default FilterGroup;
