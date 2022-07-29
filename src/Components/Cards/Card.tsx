import React from "react";
import "./Card.css"
interface DetailsProps {
  [rates: string]: any;
}
const Card = ({ rates }: DetailsProps) => {
  console.log(rates,'ooo')
  return (
    <div className="cards">
   
      {rates &&
              rates.rates &&
              Object.keys(rates?.rates).slice(0,9).map((rate)=>(
                <div key={rate} className="card border-radius-10 box-shadow">
                1 {rates.base}  =  {rates.rates[rate]}  {rate}
                </div>
              ))}
    </div>
  );
};

export default Card;
