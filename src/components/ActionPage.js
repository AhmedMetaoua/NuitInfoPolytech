import React, { useState } from 'react';

const ActionPage = () => {
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const actions = [
    {
      title: "Réduisez votre consommation de plastique",
      description:
        "Privilégiez les produits réutilisables, évitez les plastiques à usage unique et recyclez autant que possible.",
      image: "/recycle.jpg",
    },
    {
      title: "Participez à des campagnes de nettoyage",
      description:
        "Rejoignez des initiatives locales pour nettoyer les plages et les cours d'eau afin de réduire les déchets marins.",
      image: "/beach-cleanup.jpg",
    },
    {
      title: "Soutenez des organisations de préservation",
      description:
        "Faites un don ou devenez bénévole auprès d'organisations dédiées à la protection des écosystèmes marins.",
      image: "/support-organizations.jpg",
    },
    {
      title: "Réduisez votre empreinte carbone",
      description:
        "Utilisez des moyens de transport écologiques, économisez l'énergie et adoptez un mode de vie durable.",
      image: "/reduce-carbon.jpg",
    },
  ];

  const externalLinks = [
    {
      name: "Ocean Conservancy",
      url: "https://oceanconservancy.org/",
    },
    {
      name: "WWF - Oceans",
      url: "https://www.worldwildlife.org/initiatives/oceans",
    },
    {
      name: "Plastic Oceans International",
      url: "https://plasticoceans.org/",
    },
  ];

  const handleQuizSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800">
          Agissons pour l'Océan 🌊
        </h1>
        <p className="text-lg text-blue-600 mt-4">
          Découvrez des actions simples et impactantes que vous pouvez entreprendre dès aujourd'hui pour préserver l'océan et protéger notre planète.
        </p>
      </header>

      {/* Actions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <img
              src={action.image}
              alt={action.title}
              className="rounded-lg mb-4 h-full w-full object-cover"
            />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {action.title}
            </h3>
            <p className="text-gray-600">{action.description}</p>
          </div>
        ))}
      </div>

      {/* Quiz Section */}
      <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
          Quiz : Testez vos connaissances 🌍
        </h2>
        <p className="text-blue-600 mb-6 text-center">
          Quelle action a le plus d'impact pour réduire la pollution plastique dans l'océan ?
        </p>
        <div className="flex flex-col gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => setQuizAnswer("a")}
          >
            a) Recycler tous les plastiques
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => setQuizAnswer("b")}
          >
            b) Réduire l'utilisation de plastique
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => setQuizAnswer("c")}
          >
            c) Participez à des nettoyages de plages
          </button>
        </div>
        {quizAnswer && (
          <div className="mt-6 text-center">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              onClick={handleQuizSubmit}
            >
              Valider
            </button>
          </div>
        )}
        {showResult && (
          <div className="mt-8 text-center text-blue-800">
            {quizAnswer === "b" ? (
              <p className="text-xl font-bold">
                🎉 Bonne réponse ! Réduire l'utilisation de plastique est l'action la plus efficace pour limiter les déchets à la source.
              </p>
            ) : (
              <p className="text-xl font-bold">
                ❌ Réponse incorrecte. La meilleure solution est de réduire l'utilisation de plastique à la source.
              </p>
            )}
          </div>
        )}
      </div>

      {/* External Links */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Ressources externes 🌐
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {externalLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {link.name}
              </h3>
              <p className="text-gray-600">
                Cliquez pour en savoir plus sur les initiatives pour protéger l'océan.
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Ensemble, faisons la différence 🌍
        </h2>
        <p className="text-lg text-blue-600 mb-8">
          Chaque petite action compte. Ensemble, nous pouvons protéger les écosystèmes marins pour les générations futures.
        </p>
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={() =>
            alert(
              "Merci pour votre engagement envers la préservation de l'océan ! 🌊"
            )
          }
        >
          M'engager dès maintenant
        </button>
      </div>
    </div>
  );
};

export default ActionPage;
