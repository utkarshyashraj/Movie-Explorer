import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Movie } from '../types/movie';
import MovieCard from './MovieCard';
import '../styles/MovieRow.css';

interface MovieRowProps {
  title: string;
  icon: string;
  movies: Movie[];
  isLoading: boolean;
}

const SKELETON_COUNT = 10;
const SCROLL_AMOUNT = 600;

const MovieRow: React.FC<MovieRowProps> = ({ title, icon, movies, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    const ro = new ResizeObserver(updateScrollButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      ro.disconnect();
    };
  }, [updateScrollButtons, movies]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  };

  return (
    <section className="movie-row">
      <div className="movie-row-header">
        <span className="row-icon">{icon}</span>
        <h2 className="movie-row-title">{title}</h2>
      </div>

      <div className="movie-row-track">
        {/* Left overlay button */}
        {!isLoading && canScrollLeft && (
          <button className="scroll-btn scroll-btn-left" onClick={scrollLeft} aria-label="Scroll left">
            &#8249;
          </button>
        )}

        <div className="movie-row-scroll" ref={scrollRef}>
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <div key={i} className="movie-card-skeleton" />
              ))
            : movies.map((movie) => (
                <div key={movie.id} className="movie-row-item">
                  <MovieCard movie={movie} />
                </div>
              ))}
        </div>

        {/* Right overlay button */}
        {!isLoading && canScrollRight && (
          <button className="scroll-btn scroll-btn-right" onClick={scrollRight} aria-label="Scroll right">
            &#8250;
          </button>
        )}
      </div>
    </section>
  );
};

export default MovieRow;
