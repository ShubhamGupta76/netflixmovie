import CategorySection from '../components/CategorySection';
import { moviesData } from '../data/moviesData';

const MyList = () => {
  // For "My List", we'll show all novels and some favorites
  const novels = moviesData.filter(movie => movie.type === 'novel');
  const favorites = moviesData.slice(0, 10); // Sample favorites

  return (
    <div className="pt-32 pb-12">
      <div className="container mx-auto px-4 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">My List</h1>
        <p className="text-gray-400 mb-8">Your saved content</p>
        
        {favorites.length > 0 && (
          <CategorySection 
            title="Favorites" 
            movies={favorites}
            showAll={true}
          />
        )}
        
        {novels.length > 0 && (
          <CategorySection 
            title="Novels" 
            movies={novels}
            showAll={true}
          />
        )}
        
        {favorites.length === 0 && novels.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">Your list is empty</p>
            <p className="text-gray-500 mt-2">Start adding titles to your list!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;

