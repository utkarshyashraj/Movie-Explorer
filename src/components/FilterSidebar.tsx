import React from 'react';
import '../styles/FilterSidebar.css';

interface FilterSidebarProps {
  minRating: number;
  maxRating: number;
  onMinRatingChange: (rating: number) => void;
  onMaxRatingChange: (rating: number) => void;
  onReset: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  minRating,
  maxRating,
  onMinRatingChange,
  onMaxRatingChange,
  onReset,
}) => {
  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h2>Filters</h2>
        <button className="reset-filters" onClick={onReset}>
          Reset
        </button>
      </div>

      <div className="filter-section">
        <h3>Rating Range</h3>
        
        <div className="rating-inputs">
          <div className="input-group">
            <label htmlFor="min-rating">Minimum Rating</label>
            <input
              id="min-rating"
              type="number"
              min="0"
              max="10"
              step="0.5"
              value={minRating}
              onChange={(e) => onMinRatingChange(parseFloat(e.target.value))}
              className="rating-input"
            />
            <span className="rating-value">{minRating.toFixed(1)}</span>
          </div>

          <div className="input-group">
            <label htmlFor="max-rating">Maximum Rating</label>
            <input
              id="max-rating"
              type="number"
              min="0"
              max="10"
              step="0.5"
              value={maxRating}
              onChange={(e) => onMaxRatingChange(parseFloat(e.target.value))}
              className="rating-input"
            />
            <span className="rating-value">{maxRating.toFixed(1)}</span>
          </div>
        </div>

        <div className="slider-container">
          <div className="range-display">
            <label>Range: {minRating.toFixed(1)} - {maxRating.toFixed(1)}</label>
            <div className="range-bar">
              <div
                className="range-fill"
                style={{
                  left: `${(minRating / 10) * 100}%`,
                  right: `${100 - (maxRating / 10) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="quick-filters">
            <h4>Quick Filters</h4>
            <button
              className="quick-filter-btn"
              onClick={() => {
                onMinRatingChange(0);
                onMaxRatingChange(10);
              }}
            >
              All Ratings
            </button>
            <button
              className="quick-filter-btn"
              onClick={() => {
                onMinRatingChange(8);
                onMaxRatingChange(10);
              }}
            >
              8.0+
            </button>
            <button
              className="quick-filter-btn"
              onClick={() => {
                onMinRatingChange(7);
                onMaxRatingChange(10);
              }}
            >
              7.0+
            </button>
            <button
              className="quick-filter-btn"
              onClick={() => {
                onMinRatingChange(6);
                onMaxRatingChange(10);
              }}
            >
              6.0+
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
