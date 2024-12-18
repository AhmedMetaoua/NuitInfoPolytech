import React from 'react';

const Podcast = () => {
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-800">
          Podcast : L'Océan, Notre Second Corps
        </h1>
        <p className="text-lg text-blue-600 mt-4">
          Découvrez les parallèles fascinants entre le corps humain et l'océan, deux systèmes 
          interdépendants essentiels à la vie.
        </p>
      </header>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Audio Player */}
        <div className="flex-1">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <audio controls className="w-full">
              <source src="/podcast.mp4" type="audio/mpeg" />
              Votre navigateur ne supporte pas l'élément audio.
            </audio>
            <p className="mt-4 text-blue-800">
              Cliquez sur lecture pour écouter notre podcast.
            </p>
          </div>
        </div>

        {/* Right: Image and Description */}
        <div className="flex-1 text-blue-800">
          <h2 className="text-2xl font-semibold mb-4">À Propos du Podcast</h2>
          <p className="mb-4">
            Tout comme l'océan régule la planète en recyclant et en purifiant l'eau, notre corps humain
            recycle les nutriments et maintient l'équilibre vital à travers des mécanismes complexes.
          </p>
          <h3 className="text-xl font-semibold mt-4">Pourquoi Écouter ?</h3>
          <ul className="list-disc list-inside">
            <li>Apprenez l'importance des océans pour la planète.</li>
            <li>Comprenez les parallèles avec le fonctionnement de votre propre corps.</li>
            <li>Explorez des solutions pour préserver ces deux écosystèmes cruciaux.</li>
          </ul>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={() => window.location.href = '/ExplorePage'}
        >
          Retour aux Analogies
        </button>
      </div>
    </div>
  );
};

export default Podcast;