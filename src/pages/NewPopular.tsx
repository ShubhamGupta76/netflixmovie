import CategorySection from '../components/CategorySection';
import { moviesData, categories } from '../data/moviesData';

const NewPopular = () => {
  const recent = moviesData.filter(movie => movie.year >= 2024);

  return (
    <div className="pt-32 pb-12">
      <div className="container mx-auto px-4 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">New & Popular</h1>
        <p className="text-gray-400 mb-8">Discover what's trending and new</p>
        
        <CategorySection 
          title="Trending Now 🔥" 
          movies={categories.trending}
        />
        
        <CategorySection 
          title="Popular This Week" 
          movies={categories.popular}
        />
        
        <CategorySection 
          title="New Releases" 
          movies={recent.slice(0, 10)}
        />
        
        <CategorySection 
          title="Hot Short TV 🔥" 
          movies={categories.hotShortTV}
        />
      </div>
    </div>
  );
};

export default NewPopular;

