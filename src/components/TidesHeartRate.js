
import React from 'react';
import TidesHeartRateChart from './TidesHeartRateChart';  // Importez le composant graphique

const TidesHeartRate = () => {
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-800">
          Marées vs. Rythme cardiaque
        </h1>
        <p className="text-lg text-blue-600 mt-4">
          Les marées et le rythme cardiaque suivent tous deux des cycles réguliers qui sont vitaux pour leur fonctionnement respectif.
        </p>
      </header>

      {/* Graphique interactif */}
      <TidesHeartRateChart />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src="/image6.png" // Remplacez par une image réelle
            alt="Marées et rythme cardiaque"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1 text-blue-800">
          <h2 className="text-2xl font-semibold mb-4">Le Parallèle</h2>
          <p className="mb-4">
            Les marées dans l'océan et le rythme cardiaque chez l'humain sont deux processus naturels et périodiques. 
            Les marées, générées par l'attraction gravitationnelle de la lune, varient tout au long de la journée et suivent un cycle prévisible.
            De la même manière, le rythme cardiaque suit un cycle régulier qui assure une circulation sanguine optimale dans le corps.
          </p>
          <h3 className="text-xl font-semibold mt-4">Conséquences des Dysfonctionnements</h3>
          <ul className="list-disc list-inside">
            <li>Marées perturbées → effets sur les écosystèmes marins.</li>
            <li>Rythme cardiaque irrégulier → troubles cardiaques et risques pour la santé.</li>
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

export default TidesHeartRate;