import React from 'react';
import WaterCycleMetabolismChart from './WaterCycleMetabolismChart';

const WaterCycleMetabolism = () => {
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-800">
          Cycle de l'eau vs. Métabolisme
        </h1>
        <p className="text-lg text-blue-600 mt-4">
          Le cycle de l’eau et le métabolisme sont des systèmes essentiels pour maintenir la vie.
        </p>
      </header>
      <WaterCycleMetabolismChart />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src="/image7.webp" // Remplacez par une image réelle
            alt="Cycle de l'eau et métabolisme"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 text-blue-800">
          <h2 className="text-2xl font-semibold mb-4">Le Parallèle</h2>
          <p className="mb-4">
            Le cycle de l’eau recycle et purifie l’eau, un élément vital pour la planète. De manière 
            similaire, le métabolisme humain recycle les nutriments et transforme les aliments 
            en énergie, soutenant les fonctions vitales.
          </p>
          <h3 className="text-xl font-semibold mt-4">Perturbations</h3>
          <ul className="list-disc list-inside">
            <li>Altération du cycle de l’eau → sécheresse ou inondations.</li>
            <li>Dysfonctionnement métabolique → obésité, diabète, ou autres maladies.</li>
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

export default WaterCycleMetabolism;