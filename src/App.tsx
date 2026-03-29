import React, { useState, useRef, useEffect } from 'react';
import { Movie } from './types/movie';
import { sampleMovies } from './utils/movieData';
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  searchMovies,
} from './utils/tmdbApi';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieRow from './components/MovieRow';
import MovieGrid from './components/MovieGrid';
import './styles/App.css';

type Section = 'popular' | 'now_playing' | 'top_rated' | 'upcoming';

const FETCHERS: Record<Section, () => Promise<Movie[]>> = {
  popular: fetchPopularMovies,
  now_playing: fetchNowPlayingMovies,
  top_rated: fetchTopRatedMovies,
  upcoming: fetchUpcomingMovies,
};

const SECTION_META: { id: Section; title: string; icon: string }[] = [
  { id: 'popular',    title: 'Popular',     icon: '🔥' },
  { id: 'now_playing', title: 'Now Playing', icon: '🎬' },
  { id: 'top_rated',  title: 'Top Rated',   icon: '⭐' },
  { id: 'upcoming',   title: 'Upcoming',    icon: '🗓️' },
];

const App: React.FC = () => {
  const [sectionMovies, setSectionMovies] = useState<Record<Section, Movie[]>>({
    popular: [], now_playing: [], top_rated: [], upcoming: [],
  });
  const [sectionLoading, setSectionLoading] = useState<Record<Section, boolean>>({
    popular: true, now_playing: true, top_rated: true, upcoming: true,
  });

  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load all sections in parallel on mount
  useEffect(() => {
    (Object.keys(FETCHERS) as Section[]).forEach(async (section) => {
      try {
        const results = await FETCHERS[section]();
        setSectionMovies(prev => ({
          ...prev,
          [section]: results.length > 0 ? results : sampleMovies,
        }));
      } catch {
        setSectionMovies(prev => ({ ...prev, [section]: sampleMovies }));
      } finally {
        setSectionLoading(prev => ({ ...prev, [section]: false }));
      }
    });
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!value.trim()) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      setIsSearchLoading(true);
      setIsSearching(true);
      try {
        const results = await searchMovies(value);
        setSearchResults(results);
      } catch {
        setSearchResults([]);
      } finally {
        setIsSearchLoading(false);
      }
    }, 500);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <main className="main-content">
          <SearchBar
            searchQuery={searchInput}
            onSearchChange={handleSearchChange}
            isSearchLoading={isSearchLoading}
          />

          {isSearching ? (
            <>
              <div className="content-header">
                <h2 className="content-title">
                  Results for "<em>{searchInput}</em>"
                </h2>
                <span className="content-count">{searchResults.length} found</span>
              </div>
              <MovieGrid movies={searchResults} isLoading={isSearchLoading} />
            </>
          ) : (
            <div className="sections-container">
              {SECTION_META.map(({ id, title, icon }) => (
                <MovieRow
                  key={id}
                  title={title}
                  icon={icon}
                  movies={sectionMovies[id]}
                  isLoading={sectionLoading[id]}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
