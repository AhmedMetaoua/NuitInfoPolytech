import React from 'react';
import OceanCirculationChart from './OceanCirculationChart'; 

const OceanCirculation = () => {
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-800">
          Courants océaniques vs. Système circulatoire
        </h1>
        <p className="text-lg text-blue-600 mt-4">
          Les courants océaniques transportent les nutriments comme le sang transporte l'oxygène.
        </p>
      </header>

      {/* Graphique interactif */}
      <OceanCirculationChart />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src="/image2.jpg" // Remplacez par une image réelle
            alt="Courants océaniques"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 text-blue-800">
          <h2 className="text-2xl font-semibold mb-4">Le Parallèle</h2>
          <p className="mb-4">
            Les courants océaniques fonctionnent comme des veines et des artères dans notre corps. 
            Ils transportent des nutriments, de l'énergie thermique et des gaz dissous 
            dans les différents océans, régulant ainsi le climat mondial.
          </p>
          <p className="mb-4">
            De manière similaire, le système circulatoire transporte le sang, riche en 
            oxygène et nutriments, vers les cellules du corps. Il assure également le 
            retour des déchets métaboliques pour être éliminés.
          </p>
          <h3 className="text-xl font-semibold mt-4">Conséquences des Dysfonctionnements</h3>
          <ul className="list-disc list-inside">
            <li>Blocage des courants océaniques → déséquilibre climatique.</li>
            <li>Problèmes circulatoires → maladies cardiaques ou fatigue chronique.</li>
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

export default OceanCirculation;