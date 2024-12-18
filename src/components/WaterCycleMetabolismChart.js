import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WaterCycleMetabolismChart = () => {
  const data = {
    labels: ['Entrée', 'Stockage', 'Sortie'],
    datasets: [
      {
        label: 'Cycle de l\'eau (L/jour)',
        data: [2.5, 0.5, 2.0], // Entrée, stockage, sortie de l'eau
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
      },
      {
        label: 'Métabolisme énergétique (kcal/jour)',
        data: [2500, 500, 2000], // Entrée, stockage, sortie énergétique
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Cycle de l\'eau vs. Métabolisme',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <Bar data={data} options={options} />
    </div>
  );
};

export default WaterCycleMetabolismChart;
