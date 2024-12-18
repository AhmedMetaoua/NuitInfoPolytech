import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const TidesHeartRateChart = () => {
  const data = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Marées (Hauteur en mètres)',
        data: [1.5, 1.8, 2.2, 2.1, 1.7, 1.4],  // Hauteur des marées
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Rythme cardiaque (BPM)',
        data: [75, 80, 78, 70, 72, 76],  // Rythme cardiaque en battements par minute
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Comparaison des Marées et du Rythme Cardiaque',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + context.raw + ' units';
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    },
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <Line data={data} options={options} />
    </div>
  );
};

export default TidesHeartRateChart;