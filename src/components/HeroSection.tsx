const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] mb-8 -mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-12 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Watch anywhere. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 text-lg font-bold rounded hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 text-lg font-semibold rounded hover:bg-white/30 hover:border-white transition-all duration-200 transform hover:scale-105 active:scale-95">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
