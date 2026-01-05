import type { Movie } from '../data/moviesData';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative overflow-hidden rounded transition-all duration-300 ease-out transform group-hover:scale-110 group-hover:z-10 shadow-lg group-hover:shadow-2xl">
        <img 
          src={movie.image} 
          alt={movie.title}
          className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-125"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=' + movie.title;
          }}
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Info on Hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-white text-sm mb-1 line-clamp-1">{movie.title}</h3>
          <p className="text-xs text-gray-300 mb-2">{movie.year} • {movie.genre.split(',')[0]}</p>
          <div className="flex gap-2">
            <button className="bg-white text-black px-4 py-1.5 text-xs font-semibold rounded hover:bg-gray-200 transition-colors duration-200">
              Play
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border border-white/50 px-4 py-1.5 text-xs font-semibold rounded hover:bg-white/30 transition-colors duration-200">
              Info
            </button>
          </div>
        </div>
      </div>
      {/* Title below card (visible always) */}
      <div className="mt-2 opacity-100 group-hover:opacity-0 transition-opacity duration-200">
        <h3 className="text-white text-sm font-medium truncate">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
