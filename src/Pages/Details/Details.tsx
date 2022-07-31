import React,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import axios from "axios";
import "./Details.css"
interface DetailsProps {
    showButton?: boolean,
    locationUrl?:any,
    [rates: string]: any,
    title ?:string |null,
    currencyName? : string |null,
    data?:any,
   
}

const Details = ({showButton ,title,rates,currencyName,data} :DetailsProps) => {
  const [currencyChart, setCurrencyChart] = useState('');
  const currencyRateChart =()=>{
    axios
    .get(`https://api.apilayer.com/fixer/fluctuation?start_date=${"2022-02-02"}&end_date=${"2022-02-04"}`, {
      headers: {
        "apikey": "ssWxd5wvDVdTbfwuwGHBTMdhJLKDjBXc",
      },
      responseType: "json",
    })
    .then((response) => {
      setCurrencyChart(response.data )
      console.log(currencyChart)
    });
} 
 useEffect(() => {
  currencyRateChart()
}, [ ]);

  return (
    <div className='details-page'>
      {/* <Bar options={options} data={data} /> */}
    </div>
  )
}

export default Details


