import type { Movie } from '../data/moviesData';
import MovieCard from './MovieCard';

interface CategorySectionProps {
  title: string;
  movies: Movie[];
  showAll?: boolean;
}

const CategorySection = ({ title, movies, showAll = false }: CategorySectionProps) => {
  const displayedMovies = showAll ? movies : movies.slice(0, 10);

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
          {title.includes('🔥') ? (
            <>
              {title.replace('🔥', '').trim()}
              <span className="ml-2 text-2xl">🔥</span>
            </>
          ) : (
            title
          )}
        </h2>
        {!showAll && movies.length > 10 && (
          <a 
            href="#" 
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
          >
            See All →
          </a>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {displayedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
