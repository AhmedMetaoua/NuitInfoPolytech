import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const OceanCirculationChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Courants océaniques (température)',
        data: [30, 32, 33, 31, 28, 27, 29, 30, 31, 33, 34, 32],  // Température en degrés Celsius
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Système circulatoire (pression sanguine)',
        data: [120, 115, 110, 108, 106, 107, 110, 113, 116, 118, 120, 123],  // Pression sanguine en mmHg
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
        text: 'Comparaison des Courants Océaniques et du Système Circulatoire',
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

export default OceanCirculationChart;