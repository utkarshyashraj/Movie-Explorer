import { Movie } from '../types/movie';

const API_KEY = '75b11a08a279b9bde807be3dfd7ab87c';
const API_READ_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWIxMWEwOGEyNzliOWJkZTgwN2JlM2RmZDdhYjg3YyIsIm5iZiI6MTc3NDcyODcwNy43MzcsInN1YiI6IjY5YzgzNjAzNDNkODYxM2FhMGM2ODUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8rmzYQa8R7ifVc_cScFOT7uKMrXgysX6zKHnO26Q_bQ';
const BASE_URL = 'https://api.themoviedb.org/3';

interface TMDBMovie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  popularity: number;
  genre_ids: number[];
}

interface TMDBResponse {
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

// Fetch popular movies from TMDB
export const fetchPopularMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${API_READ_TOKEN}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API response status: ${response.status}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map((movie: TMDBMovie) => ({
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      popularity: movie.popularity,
      genre_ids: movie.genre_ids || [],
    }));
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// Search movies by query
export const searchMovies = async (query: string): Promise<Movie[]> => {
  if (!query.trim()) {
    return [];
  }

  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`,
      {
        headers: {
          'Authorization': `Bearer ${API_READ_TOKEN}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API response status: ${response.status}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map((movie: TMDBMovie) => ({
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      popularity: movie.popularity,
      genre_ids: movie.genre_ids || [],
    }));
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

// Fetch top-rated movies
export const fetchTopRatedMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${API_READ_TOKEN}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API response status: ${response.status}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map((movie: TMDBMovie) => ({
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      popularity: movie.popularity,
      genre_ids: movie.genre_ids || [],
    }));
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return [];
  }
};

// Fetch now playing movies
export const fetchNowPlayingMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${API_READ_TOKEN}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API response status: ${response.status}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map((movie: TMDBMovie) => ({
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      popularity: movie.popularity,
      genre_ids: movie.genre_ids || [],
    }));
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return [];
  }
};

// Fetch upcoming movies
export const fetchUpcomingMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${API_READ_TOKEN}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API response status: ${response.status}`);
    }

    const data: TMDBResponse = await response.json();
    return data.results.map((movie: TMDBMovie) => ({
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      popularity: movie.popularity,
      genre_ids: movie.genre_ids || [],
    }));
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};
