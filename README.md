# 🎬 Movie Explorer App

A modern, fully-featured React application for discovering and filtering movies by rating using TMDB movie metadata.

## Features

✨ **Core Features:**
- **Movie Display**: Beautiful grid layout with movie cards
- **Rating-Based Filtering**: Filter movies by minimum and maximum rating
- **Search Functionality**: Search movies by title or description
- **Sorting Options**: Sort by rating, title, popularity, or release date
- **Quick Filter Buttons**: Pre-defined rating filters (8.0+, 7.0+, 6.0+)
- **Real-time Filtering**: Instant results as you adjust filters
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Movie Statistics**: Total and filtered movie counts displayed in header

## Project Structure

```
src/
├── components/              # React components
│   ├── Header.tsx          # App header with statistics
│   ├── MovieCard.tsx       # Individual movie card component
│   ├── MovieGrid.tsx       # Movie grid layout container
│   ├── SearchBar.tsx       # Search and sort controls
│   └── FilterSidebar.tsx   # Rating filter panel
├── styles/                 # CSS stylesheets
│   ├── index.css          # Global styles
│   ├── App.css            # App layout styles
│   ├── Header.css         # Header component styles
│   ├── MovieCard.css      # Movie card styles
│   ├── MovieGrid.css      # Grid layout styles
│   ├── SearchBar.css      # Search bar styles
│   └── FilterSidebar.css  # Filter sidebar styles
├── types/                 # TypeScript type definitions
│   └── movie.ts          # Movie interface definitions
├── utils/                # Utility functions
│   └── movieData.ts      # Movie data handling functions
├── App.tsx               # Main app component
└── main.tsx              # Application entry point
```

## Component Architecture

### App Component (Main)
- Manages application state (movies, filters, sorting)
- Handles data loading and filtering logic
- Coordinates between all child components

### Header Component
- Displays app title and description
- Shows total and filtered movie statistics
- Uses gradient background styling

### FilterSidebar Component
- Rating range inputs (min/max)
- Range display visualization
- Quick filter buttons (8.0+, 7.0+, 6.0+)
- Reset filters button

### SearchBar Component
- Text search input with clear button
- Sort dropdown (Rating, Title, Popularity, Release Date)
- Real-time filter updates

### MovieGrid Component
- Responsive grid layout (auto-fill with min-width)
- Loading state indicator
- Empty state message
- Loading animation

### MovieCard Component
- Movie poster image
- Rating badge with color coding
- Title and release year
- Overview description (truncated)
- Popularity score
- Hover animations

## Tech Stack

- **React 18**: UI framework
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with flexbox and grid
- **Axios**: HTTP client (configured, ready for API calls)

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Usage

### Filtering by Rating
1. Use the **Minimum Rating** and **Maximum Rating** inputs in the sidebar
2. Or click the quick filter buttons (All Ratings, 8.0+, 7.0+, 6.0+)
3. The movie grid updates instantly

### Searching Movies
1. Type in the search box to find movies by title or description
2. Click the ✕ button to clear the search
3. Results update in real-time

### Sorting Movies
1. Use the "Sort by" dropdown to choose sorting criteria:
   - **Rating (High to Low)**: Default, shows best-rated first
   - **Popularity (High to Low)**: Most popular movies first
   - **Title (A to Z)**: Alphabetical order
   - **Release Date (Newest First)**: Newest movies first

### Combining Filters
Mix and match filtering, searching, and sorting:
- Example: Filter for 8.0+ rated movies, search "Batman", sort by Release Date

### Reset Filters
Click the **Reset** button in the sidebar to return all filters to default

## Styling Features

- **Modern Design**: Gradient backgrounds, glassmorphism effects
- **Smooth Animations**: Hover effects, transitions, loading animations
- **Color Coding**: Rating badges use green (8+), yellow (6-8), red (<6)
- **Accessibility**: Proper contrast ratios, semantic HTML
- **Responsive**: Mobile-first design with breakpoints at 768px, 1024px

## Data Integration

Currently uses sample TMDB movie data. To integrate with real data:

### Option 1: CSV File
```typescript
const path = await loadMovieDataFromCSV('path/to/movies.csv');
```

### Option 2: TMDB API
```typescript
// Install kagglehub
pip install kagglehub

# Download dataset
path = kagglehub.dataset_download("tmdb/tmdb-movie-metadata")
```

Then parse and load the data into the application.

## Component Props

### MovieCard
```typescript
interface MovieCardProps {
  movie: Movie;
}
```

### MovieGrid
```typescript
interface MovieGridProps {
  movies: Movie[];
  isLoading: boolean;
}
```

### FilterSidebar
```typescript
interface FilterSidebarProps {
  minRating: number;
  maxRating: number;
  onMinRatingChange: (rating: number) => void;
  onMaxRatingChange: (rating: number) => void;
  onReset: () => void;
}
```

### SearchBar
```typescript
interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: 'rating' | 'title' | 'popularity' | 'release_date';
  onSortChange: (sortOption: SortOption) => void;
}
```

## Type Definitions

### Movie Interface
```typescript
interface Movie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  popularity: number;
  genre_ids?: number[];
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Component-based architecture for better code splitting
- Responsive images with proper sizing
- CSS grid for efficient layout
- Memoized calculations in filter/sort functions
- Lazy loading ready for future implementation

## Future Enhancements

- [ ] Integration with TMDB API for real-time data
- [ ] Movie detail view modal
- [ ] Favorites/watchlist feature
- [ ] Advanced filtering (genre, year range)
- [ ] Pagination or infinite scroll
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Movie recommendations
- [ ] User ratings and reviews

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue in the repository.

---

**Created with ❤️ using React and TypeScript**
