import React from 'react'
import Chart from "chart.js/auto";
import {Doughnut} from 'react-chartjs-2'

const DoughnutChart = () => {
  const data = {
      labels: [
        'Electricians',
        'Cleaners',
        'AC Service'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [200, 70, 24],
        backgroundColor: [
          'rgb(254, 97, 142)',
          'rgb(56, 152, 245)',
          'rgb(258, 215, 76)'
        ],
        hoverOffset: 5
      }]
  };

  return (
    <Doughnut data={data} options={{ maintainAspectRatio: false }} />
  )
}

export default DoughnutChart
