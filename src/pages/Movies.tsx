import CategorySection from '../components/CategorySection';
import { moviesData } from '../data/moviesData';

const Movies = () => {
  const movies = moviesData.filter(movie => movie.type === 'movie');

  return (
    <div className="pt-32 pb-12">
      <div className="container mx-auto px-4 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Movies</h1>
        <p className="text-gray-400 mb-8">Browse all movies</p>
        
        <CategorySection 
          title="All Movies" 
          movies={movies}
          showAll={true}
        />
        
        <CategorySection 
          title="Popular Movies" 
          movies={movies.slice(0, 10)}
        />
        
        <CategorySection 
          title="Latest Movies" 
          movies={movies.slice(10, 20)}
        />
      </div>
    </div>
  );
};

export default Movies;

