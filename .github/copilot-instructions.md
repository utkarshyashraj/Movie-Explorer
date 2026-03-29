# Movie Explorer App - Development Guide

## Project Overview
A React-based movie discovery application with advanced filtering, search, and sorting capabilities using TMDB movie metadata.

## Tech Stack
- React 18 with TypeScript
- Vite (build tool and dev server)
- CSS3 (Flexbox, Grid, modern features)
- Axios (HTTP client)

## Component Structure

### Core Components
- **App.tsx**: Main application container, state management
- **Header.tsx**: Statistics and branding
- **FilterSidebar.tsx**: Rating filter controls
- **SearchBar.tsx**: Search and sort functionality
- **MovieGrid.tsx**: Movie collection display
- **MovieCard.tsx**: Individual movie item

### Utilities & Types
- **types/movie.ts**: TypeScript interfaces
- **utils/movieData.ts**: Data filtering, sorting, parsing functions

### Styling
- Global styles: `styles/index.css`
- Component-specific CSS modules for each component

## Key Features Implemented

1. **Filter by Rating**: Min/max rating inputs with quick filters
2. **Search Movies**: Real-time search by title or description
3. **Sort Options**: Rating, title, popularity, release date
4. **Responsive Design**: Mobile-first approach with multiple breakpoints
5. **Statistics**: Live count of total and filtered movies
6. **State Management**: Centralized in App.tsx using React hooks

## Available Scripts

```bash
npm install      # Install dependencies
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

## File Organization

```
Movie Application/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── SearchBar.tsx
│   │   ├── MovieGrid.tsx
│   │   └── MovieCard.tsx
│   ├── styles/
│   │   ├── index.css
│   │   ├── Header.css
│   │   ├── FilterSidebar.css
│   │   ├── SearchBar.css
│   │   ├── MovieCard.css
│   │   ├── MovieGrid.css
│   │   └── App.css
│   ├── types/
│   │   └── movie.ts
│   ├── utils/
│   │   └── movieData.ts
│   ├── App.tsx
│   ├── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── README.md
```

## Next Steps for Data Integration

To use real TMDB movie metadata:

1. Download TMDB dataset using kagglehub
2. Parse CSV file and load into the app
3. Replace `sampleMovies` in `utils/movieData.ts`
4. Or integrate with TMDB API for dynamic data

## Development Workflow

1. **Start Dev Server**: `npm install && npm run dev`
2. **Make Changes**: Edit components in `src/components/`
3. **Hot Reload**: Changes reflect immediately
4. **Build**: `npm run build` generates optimized production build
5. **Test**: Open http://localhost:3000 in browser

## Common Modifications

### Add New Filter Type
1. Update `FilterOptions` interface in `types/movie.ts`
2. Add filter logic in `filterMovies()` function
3. Add UI controls in `FilterSidebar.tsx`

### Add New Sort Option
1. Update `SortOption` type in `types/movie.ts`
2. Add sort logic in `sortMovies()` function
3. Add option to `SearchBar.tsx` dropdown

### Style Updates
Update component-specific CSS files in `src/styles/`

## Production Build

The app is optimized for production with:
- TypeScript compilation
- JSX transformation
- CSS bundling
- Asset optimization
- Source maps excluded

Output: `dist/` folder ready for deployment

## Browser Compatibility

- Chrome, Firefox, Safari (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Responsive grid with `auto-fill` for optimal layout
- Component-based architecture for code splitting
- CSS animations for smooth UX
- Efficient filter/sort algorithms

## Troubleshooting

**Port 3000 already in use**:
Edit `vite.config.ts` and change port number

**Module not found errors**:
Run `npm install` to ensure all dependencies are installed

**Build fails**:
Check TypeScript errors with `npx tsc --noEmit`
