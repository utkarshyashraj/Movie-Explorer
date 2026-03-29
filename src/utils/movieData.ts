import { Movie, FilterOptions } from '../types/movie';

// Sample TMDB movie data structure (you'll replace this with actual API calls)
export const sampleMovies: Movie[] = [
  {
    id: 550,
    title: "Fight Club",
    vote_average: 8.4,
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.",
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    release_date: "1999-10-15",
    popularity: 25.5,
    genre_ids: [18, 53]
  },
  {
    id: 278,
    title: "The Shawshank Redemption",
    vote_average: 9.3,
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "/q6y0aKMEZgsmML2nzaveasrDF4Z.jpg",
    release_date: "1994-09-23",
    popularity: 76.3,
    genre_ids: [18, 80]
  },
  {
    id: 238,
    title: "The Godfather",
    vote_average: 9.2,
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his youngest and most reluctant son.",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fmnigJ.jpg",
    release_date: "1972-03-14",
    popularity: 78.5,
    genre_ids: [18, 80]
  },
  {
    id: 240,
    title: "The Godfather Part II",
    vote_average: 9.0,
    overview: "The early life and career of Vito Corleone in 1920s New York and his rise and fall in the mafia business.",
    poster_path: "/tHbDOSpf2L50UVjvgaAAdh31l5i.jpg",
    release_date: "1974-12-20",
    popularity: 61.2,
    genre_ids: [18, 80]
  },
  {
    id: 424,
    title: "Schindler's List",
    vote_average: 9.0,
    overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.",
    poster_path: "/sF1U4ZG98nQFfpDl65reset2wSa.jpg",
    release_date: "1993-12-15",
    popularity: 34.7,
    genre_ids: [18]
  },
  {
    id: 389,
    title: "12 Angry Men",
    vote_average: 8.9,
    overview: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    poster_path: "/7gLiHW5yt3KtM5LyKJDRlO4g0TL.jpg",
    release_date: "1957-04-10",
    popularity: 43.4,
    genre_ids: [18]
  },
  {
    id: 129,
    title: "Spirited Away",
    vote_average: 8.6,
    overview: "During her family's move to the suburbs, a sullen girl wanders into a world ruled by gods, witches, and spirits.",
    poster_path: "/39wmItGjYAY4v7RX9cxENZNsP7O.jpg",
    release_date: "2001-07-20",
    popularity: 68.9,
    genre_ids: [16, 10, 14]
  },
  {
    id: 637,
    title: "Life is Beautiful",
    vote_average: 8.6,
    overview: "When an open-minded Jewish librarian and his son become prisoners in a concentration camp, he uses a perfect mixture of narration and imagination to protect his son from the horrors awaiting them.",
    poster_path: "/adacAt4MKamPT3YtN2oGwDRyLse.jpg",
    release_date: "1997-12-20",
    popularity: 36.8,
    genre_ids: [18, 14]
  },
  {
    id: 19995,
    title: "Avatar",
    vote_average: 7.8,
    overview: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    poster_path: "/jRXYj3sqQCVwJf1KcdzKXoDAwyl.jpg",
    release_date: "2009-12-18",
    popularity: 92.1,
    genre_ids: [28, 12, 14]
  },
  {
    id: 155,
    title: "The Dark Knight",
    vote_average: 9.0,
    overview: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    poster_path: "/1hnjzO3aUn0x3UHfJSz1Gkwykz5.jpg",
    release_date: "2008-07-18",
    popularity: 85.3,
    genre_ids: [18, 80, 28]
  },
];

// Filter movies based on criteria
export const filterMovies = (movies: Movie[], filters: FilterOptions): Movie[] => {
  return movies.filter(movie => {
    const ratingMatch = movie.vote_average >= filters.minRating && movie.vote_average <= filters.maxRating;
    
    const searchMatch = filters.searchQuery === '' || 
      movie.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      movie.overview.toLowerCase().includes(filters.searchQuery.toLowerCase());
    
    return ratingMatch && searchMatch;
  });
};

// Sort movies
export const sortMovies = (movies: Movie[], sortBy: 'rating' | 'title' | 'popularity' | 'release_date'): Movie[] => {
  const sorted = [...movies];
  
  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => b.vote_average - a.vote_average);
    case 'title':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'popularity':
      return sorted.sort((a, b) => b.popularity - a.popularity);
    case 'release_date':
      return sorted.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    default:
      return sorted;
  }
};

// Load movie data from CSV (for TMDB dataset)
export const loadMovieDataFromCSV = async (filePath: string): Promise<Movie[]> => {
  try {
    const response = await fetch(filePath);
    const csvText = await response.text();
    const movies = parseCSV(csvText);
    return movies;
  } catch (error) {
    console.error('Error loading movie data:', error);
    return sampleMovies;
  }
};

// Parse CSV data
const parseCSV = (csvText: string): Movie[] => {
  const lines = csvText.split('\n');
  const movies: Movie[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue;
    
    const values = lines[i].split(',');
    const movie: Movie = {
      id: parseInt(values[0]) || 0,
      title: values[1] || 'Unknown',
      vote_average: parseFloat(values[3]) || 0,
      overview: values[2] || '',
      poster_path: values[4] || null,
      release_date: values[5] || '',
      popularity: parseFloat(values[6]) || 0,
    };
    
    if (movie.vote_average > 0) {
      movies.push(movie);
    }
  }
  
  return movies;
};
