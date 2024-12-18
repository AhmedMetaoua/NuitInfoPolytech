import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const MineralsElectrolytesChart = () => {
  const data = {
    labels: ['Sodium', 'Potassium', 'Chloride', 'Calcium', 'Magnesium'],
    datasets: [
      {
        label: 'Sels minéraux (Océan)',
        data: [35, 0.9, 19, 0.013, 0.015], // Concentration en g/L
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
      {
        label: 'Électrolytes (Corps humain)',
        data: [135, 4.5, 105, 1.3, 0.3], // Concentration en mEq/L
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 150,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <Radar data={data} options={options} />
    </div>
  );
};

export default MineralsElectrolytesChart;
