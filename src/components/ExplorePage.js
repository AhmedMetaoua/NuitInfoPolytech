import React from 'react';

const analogies = [
  {
    id: 1,
    title: "Courants océaniques vs. Système circulatoire",
    description: "Les courants transportent des nutriments comme le sang transporte l'oxygène.",
    image: "/image1.jpg", // Exemple d'image à remplacer
    link: "/OceanCirculation",
  },
  {
    id: 2,
    title: "Marées vs. Rythme cardiaque",
    description: "Les marées suivent un rythme régulier, tout comme les battements du cœur.",
    image: "/image3.jpg",
    link: "/TidesHeartRate",
  },
  {
    id: 3,
    title: "Sels minéraux vs. Électrolytes",
    description: "Les sels dans l'océan régulent les processus vitaux, comme les électrolytes dans le corps.",
    image: "/image4.jpg",
    link: "/WaterCycleMetabolism",
  },
  {
    id: 4,
    title: "Cycle de l'eau vs. Métabolisme",
    description: "Le cycle de l'eau soutient la vie, tout comme le métabolisme soutient le corps.",
    image: "/image5.jpg",
    link: "/MineralsElectrolytes",
  },
];

const ExplorePage = () => {
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-800">Explorer les Analogies</h1>
        <p className="text-lg text-blue-600 mt-4">
          Découvrez les parallèles fascinants entre l’Océan et le Corps Humain.
        </p>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {analogies.map((analogy) => (
          <div
            key={analogy.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={analogy.image}
              alt={analogy.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-800">{analogy.title}</h2>
              <p className="text-blue-600 text-sm mt-2">{analogy.description}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                onClick={() => (window.location.href = analogy.link)}
              >
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;