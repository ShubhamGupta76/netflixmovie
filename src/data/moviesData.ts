export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  image: string;
  type: 'movie' | 'show' | 'novel';
}

export const moviesData: Movie[] = [
  // Trending Shows
  {
    id: 1,
    title: "Stranger Things",
    year: 2024,
    genre: "Horror, Sci-Fi",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    type: "show"
  },
  {
    id: 2,
    title: "The Night Manager",
    year: 2024,
    genre: "Thriller, Drama",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "show"
  },
  {
    id: 3,
    title: "The Pendragon Cycle: Rise of the Merlin",
    year: 2026,
    genre: "Fantasy",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
    type: "movie"
  },
  {
    id: 4,
    title: "The Copenhagen Test",
    year: 2024,
    genre: "Thriller",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    type: "show"
  },
  {
    id: 5,
    title: "The War Between the Land and the Sea",
    year: 2024,
    genre: "Drama, Adventure",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "show"
  },
  // Popular Movies
  {
    id: 6,
    title: "Wicked: For Good",
    year: 2024,
    genre: "Musical, Fantasy",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "movie"
  },
  {
    id: 7,
    title: "Zootopia 2",
    year: 2025,
    genre: "Animation, Comedy",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400",
    type: "movie"
  },
  {
    id: 8,
    title: "The Great Flood",
    year: 2025,
    genre: "Adventure, Drama",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400",
    type: "movie"
  },
  {
    id: 9,
    title: "Sisu: Road to Revenge",
    year: 2025,
    genre: "Action, Thriller",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    type: "movie"
  },
  {
    id: 10,
    title: "Five Nights at Freddy's 2",
    year: 2025,
    genre: "Horror",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    type: "movie"
  },
  // Hot Short TV
  {
    id: 11,
    title: "Percy Jackson and the Olympians",
    year: 2024,
    genre: "Adventure, Fantasy",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
    type: "show"
  },
  {
    id: 12,
    title: "Emily in Paris",
    year: 2024,
    genre: "Romance, Comedy",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "show"
  },
  {
    id: 13,
    title: "Fallout",
    year: 2024,
    genre: "Sci-Fi, Action",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    type: "show"
  },
  {
    id: 14,
    title: "The Covenant",
    year: 2024,
    genre: "Drama, War",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "show"
  },
  {
    id: 15,
    title: "Spartacus: House of Ashur",
    year: 2024,
    genre: "Action, Drama",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
    type: "show"
  },
  // Nollywood
  {
    id: 16,
    title: "Where Love Lives",
    year: 2025,
    genre: "Romance, Drama",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400",
    type: "movie"
  },
  {
    id: 17,
    title: "Lessons of the Heart",
    year: 2025,
    genre: "Romance, Drama",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "movie"
  },
  {
    id: 18,
    title: "Next Door Secret",
    year: 2025,
    genre: "Romance",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    type: "movie"
  },
  {
    id: 19,
    title: "Clash of Emotions",
    year: 2025,
    genre: "Drama",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
    type: "movie"
  },
  // Western TV
  {
    id: 20,
    title: "IT: Welcome to Derry",
    year: 2025,
    genre: "Horror, Thriller",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    type: "show"
  },
  {
    id: 21,
    title: "Wednesday",
    year: 2024,
    genre: "Comedy, Mystery",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "show"
  },
  {
    id: 22,
    title: "The Witcher",
    year: 2024,
    genre: "Fantasy, Adventure",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
    type: "show"
  },
  {
    id: 23,
    title: "Mayor of Kingstown",
    year: 2024,
    genre: "Crime, Drama",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "show"
  },
  {
    id: 24,
    title: "9-1-1",
    year: 2024,
    genre: "Action, Drama",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    type: "show"
  },
  // K-Drama
  {
    id: 25,
    title: "Taxi Driver",
    year: 2024,
    genre: "Action, Crime",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
    type: "show"
  },
  {
    id: 26,
    title: "Cashero",
    year: 2024,
    genre: "Action, Supernatural",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "show"
  },
  {
    id: 27,
    title: "Dynamite Kiss",
    year: 2024,
    genre: "Romance, Comedy",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    type: "show"
  },
  {
    id: 28,
    title: "Made in Korea",
    year: 2024,
    genre: "Drama",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    type: "show"
  },
  // Novels
  {
    id: 29,
    title: "The Shadow of the Wind",
    year: 2024,
    genre: "Mystery, Fiction",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    type: "novel"
  },
  {
    id: 30,
    title: "The Seven Husbands of Evelyn Hugo",
    year: 2024,
    genre: "Romance, Drama",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    type: "novel"
  },
  {
    id: 31,
    title: "It Ends With Us",
    year: 2024,
    genre: "Romance, Drama",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    type: "novel"
  },
  {
    id: 32,
    title: "The Midnight Library",
    year: 2024,
    genre: "Fiction, Fantasy",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    type: "novel"
  }
];

export const categories = {
  trending: moviesData.filter(m => [1, 2, 3, 4, 5].includes(m.id)),
  popular: moviesData.filter(m => [6, 7, 8, 9, 10].includes(m.id)),
  hotShortTV: moviesData.filter(m => [11, 12, 13, 14, 15].includes(m.id)),
  nollywood: moviesData.filter(m => [16, 17, 18, 19].includes(m.id)),
  westernTV: moviesData.filter(m => [20, 21, 22, 23, 24].includes(m.id)),
  kdrama: moviesData.filter(m => [25, 26, 27, 28].includes(m.id)),
  novels: moviesData.filter(m => m.type === 'novel')
};

