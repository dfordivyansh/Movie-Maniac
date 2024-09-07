import React from 'react'

const FilterGroup = ({minRating, onRatingClick}) => {
  return (
    <ul className="align_center movie_filter">
    <li className={
        minRating === 7 
            ? 'movie_filter_item active' : 'movie_filter_item'
        } 
        onClick={() => onRatingClick(7)}>
            7+ Star</li>
    <li className={minRating === 6 ? 'movie_filter_item active' : 'movie_filter_item'} onClick={() => onRatingClick(6)}>6+ Star</li>
    <li className={minRating === 5 ? 'movie_filter_item active' : 'movie_filter_item'} onClick={() => onRatingClick(5)}>5+ Star</li>
</ul>
  )
}

export default FilterGroup