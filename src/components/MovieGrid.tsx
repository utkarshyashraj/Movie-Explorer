import React from 'react';
import { Movie } from '../types/movie';
import MovieCard from './MovieCard';
import '../styles/MovieGrid.css';

interface MovieGridProps {
  movies: Movie[];
  isLoading: boolean;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader">Loading movies...</div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <h2>No movies found</h2>
        <p>Try adjusting your filters or search criteria</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
