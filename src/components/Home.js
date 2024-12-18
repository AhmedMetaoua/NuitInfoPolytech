import React from 'react';

const Home = () => {
  return (
    <div
      className="bg-blue-50 min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/home.webp')", // Assurez-vous que cette image existe
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="bg-blue-900 bg-opacity-30 w-full h-full absolute "></div> 

      {/* Content Section */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-white">
            L'Océan et le Corps Humain
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Découvrez les parallèles fascinants entre le fonctionnement de
            l'Océan et celui de notre corps.<br />
            Explorez les processus qui soutiennent la vie et comprenez pourquoi
            il est crucial de protéger l'Océan.
          </p>
        </header>

        {/* Hero Image or Animation */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-64 h-64 bg-gradient-to-r from-blue-300 to-blue-600 rounded-full animate-pulse shadow-lg"></div>
        </div>
        <div className="mb-8">
          <p className="mt-4 text-sm text-blue-200 italic">
            "Et si l’Océan était un corps humain ?"
          </p>
        </div>

        {/* Call to Action */}
        <div>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            onClick={() => (window.location.href = "/ExplorePage")}
          >
            Explorer les Analogies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
