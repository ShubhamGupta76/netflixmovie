import CategorySection from '../components/CategorySection';
import { moviesData } from '../data/moviesData';

const TVShows = () => {
  const tvShows = moviesData.filter(movie => movie.type === 'show');

  return (
    <div className="pt-32 pb-12">
      <div className="container mx-auto px-4 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">TV Shows</h1>
        <p className="text-gray-400 mb-8">Browse all TV shows</p>
        
        <CategorySection 
          title="All TV Shows" 
          movies={tvShows}
          showAll={true}
        />
        
        <CategorySection 
          title="Popular TV Shows" 
          movies={tvShows.slice(0, 10)}
        />
        
        <CategorySection 
          title="Recent TV Shows" 
          movies={tvShows.slice(10, 20)}
        />
      </div>
    </div>
  );
};

export default TVShows;

