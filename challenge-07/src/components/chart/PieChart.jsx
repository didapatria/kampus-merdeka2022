import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Small', 'Medium', 'Large', 'null', 'Langka', '5', 'Capekk', 'string kosong'],
  datasets: [
    {
      label: 'Car Category',
      data: [162, 13, 13, 56, 1, 1, 2, 1],
      backgroundColor: [
        'rgba(0, 0, 255, 0.2)',
        'rgba(0, 121, 0, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(254, 179, 0, 0.2)',
        'rgba(115, 8, 165, 0.2)',
        'rgba(204, 0, 175, 0.2)',
        'rgba(255, 255, 0, 0.2)',
        'rgba(255, 127, 0, 0.2)',
      ]
    }
  ]
}

export default function PieChart() {
  return (
    <div id='chart' className='md:mt-24 mt-14'>
      <div className='container mx-auto p-4 md:p-0'>
        <div className='text-center'>
          <h2 className='font-bold text-2xl mb-4'>Car Category</h2>
          <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <Pie 
          className='max-h-96'
          data={data}
          options= {{
            plugins: {
              legend: {
                display: true,
                position: 'bottom'
              }
            }
          }}
        />
      </div>
    </div>
  )
}