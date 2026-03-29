export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  popularity: number;
  genre_ids?: number[];
}

export interface FilterOptions {
  minRating: number;
  maxRating: number;
  searchQuery: string;
}

export interface SortOption {
  value: 'rating' | 'title' | 'popularity' | 'release_date';
  label: string;
}
