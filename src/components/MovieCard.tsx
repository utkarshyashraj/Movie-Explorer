import React, { useState } from 'react';
import { Movie } from '../types/movie';
import '../styles/MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [imageError, setImageError] = useState(false);
  
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : `https://via.placeholder.com/342x513?text=${encodeURIComponent(movie.title)}`;

  const handleImageError = () => {
    setImageError(true);
  };

  const displayUrl = imageError 
    ? `https://via.placeholder.com/342x513?text=${encodeURIComponent(movie.title)}`
    : posterUrl;

  const ratingColor = movie.vote_average >= 8 ? '#4CAF50' : movie.vote_average >= 6 ? '#FFC107' : '#FF5252';

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        <img 
          src={displayUrl} 
          alt={movie.title} 
          className="movie-poster"
          onError={handleImageError}
        />
        <div className="movie-rating" style={{ backgroundColor: ratingColor }}>
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title" title={movie.title}>{movie.title}</h3>
        <p className="movie-year">
          {new Date(movie.release_date).getFullYear()}
        </p>
        <p className="movie-description">{movie.overview.substring(0, 100)}...</p>
        <div className="movie-meta">
          <span className="popularity">Popularity: {movie.popularity.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
