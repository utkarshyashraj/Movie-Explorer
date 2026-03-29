import React from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isSearchLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  isSearchLoading = false,
}) => {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search movies by title..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
        {isSearchLoading && <span className="loading-spinner">⏳</span>}
        {searchQuery && !isSearchLoading && (
          <button
            className="clear-search"
            onClick={() => onSearchChange('')}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
