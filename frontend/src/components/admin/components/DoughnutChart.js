// author: Nandkumar Kadivar

import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const DoughnutChart = (props) => {
  const labels = props.labels
  const values = props.values
  
  const data = {
    labels: labels,
    datasets: [{
      label: 'Service providers',
      data: values,
      backgroundColor: [
        'rgb(254, 97, 142)',
        'rgb(56, 152, 245)',
        'rgb(258, 215, 76)',
        'rgb(117, 194, 246)',
        'rgb(70, 139, 151)',
        'rgb(243, 170, 96)'
      ],
      hoverOffset: 5
    }]
  };

  return (
    <Doughnut style={{height: "600px"}} data={data} options={{ maintainAspectRatio: false }} />
  )
}

export default DoughnutChart
