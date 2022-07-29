import React from 'react'
import { Bar } from 'react-chartjs-2';

import "./Details.css"
interface DetailsProps {
    showButton?: boolean,
    locationUrl?:any,
    [rates: string]: any,
    title ?:string |null,
    currencyName? : string |null,
    data?:any,
   
}
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => ({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => ({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Details = ({showButton ,title,rates,currencyName,data} :DetailsProps) => {

  return (
    <div className='details-page'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default Details


