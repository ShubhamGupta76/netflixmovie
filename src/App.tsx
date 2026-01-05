import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import { categories } from './data/moviesData';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      
      <main className="container mx-auto px-4 lg:px-12 -mt-32 relative z-10">
        <CategorySection 
          title="Trending Now 🔥" 
          movies={categories.trending} 
        />
        
        <CategorySection 
          title="Popular on Netflix" 
          movies={categories.popular} 
        />
        
        <CategorySection 
          title="Hot TV Shows 🔥" 
          movies={categories.hotShortTV} 
        />
        
        <CategorySection 
          title="Nollywood" 
          movies={categories.nollywood} 
        />
        
        <CategorySection 
          title="Western TV" 
          movies={categories.westernTV} 
        />
        
        <CategorySection 
          title="K-Drama" 
          movies={categories.kdrama} 
        />
        
        <CategorySection 
          title="Novels" 
          movies={categories.novels} 
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
