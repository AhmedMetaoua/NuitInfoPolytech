import React from 'react';
// import MineralsElectrolytesChart from './MineralsElectrolytesChart';

const MineralsElectrolytes = () => {
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-800">
          Sels minéraux vs. Électrolytes
        </h1>
        <p className="text-lg text-blue-600 mt-4">
          Les sels minéraux et les électrolytes sont essentiels à la stabilité des fonctions vitales.
        </p>
      </header>

      {/* Graphique interactif */}
      {/* <MineralsElectrolytesChart/> */}
      
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Image */}
        
        <div className=" flex-1">
          <img
            src= "/image11.webp" // Remplacez par une image réelle
            alt="Sels minéraux et électrolytes"
            className="w-full h-80 rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 text-blue-800">
          <h2 className="text-2xl font-semibold mb-4">Le Parallèle</h2>
          <p className="mb-4">
            Les sels dans les océans permettent de maintenir un équilibre chimique, essentiel 
            pour les organismes marins. Les électrolytes, présents dans notre sang, 
            assurent la transmission des signaux électriques entre les cellules.
          </p>
          <h3 className="text-xl font-semibold mt-4">Conséquences des déséquilibres</h3>
          <ul className="list-disc list-inside">
            <li>Déséquilibre des sels → perturbation de la faune marine.</li>
            <li>Déséquilibre des électrolytes → crampes musculaires, fatigue, voire arrêt cardiaque.</li>
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

export default MineralsElectrolytes;