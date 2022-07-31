import { useState, useEffect, SetStateAction } from "react";
import axios from "axios";
import { FaArrowsAltH } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./MainCard.css";
interface DetailsProps {
  locationUrl?:any ,
  showButton?: boolean;
  symbolCurrency?:string ,
  baseCurrency?:string ,
  title?: string;
  [rates: string]: any;
  changeCurrency?:null,
}
interface CurrenciesType {
  base: string;
date: string;
rates: any;
success: boolean;
timestamp: number 
}

const MainCard = ({ showButton, title, rates ,locationUrl}: DetailsProps) => {

  // to set value that user has to exchange it to another currency
  const [inputValue, setInputValue] = useState('');
  // to set EUR by default when fire website (1 EUR = xx USD)
  const [currency1, setCurrency1] = useState("EUR");
  // to set USD by default when fire website (1 EUR = xx USD)
  const [currency2, setCurrency2] = useState(locationUrl?.pathname == "/" ?"USD" : locationUrl?.pathname?.split("/")[3]);
  // to set the result of currency value * amount that user has to exchange
  const [exchangeValue , setExchangeValue]= useState<number| null >();
  // to set currencies in option tag
  const [currency, setCurrency] = useState<CurrenciesType | null>(null);
  // function to get the rate between currencies
  const changeCurrency =()=>{
    axios
    .get(`https://api.apilayer.com/fixer/latest?symbols=${currency2}&base=${currency1}`, {
      headers: {
        "apikey": "ssWxd5wvDVdTbfwuwGHBTMdhJLKDjBXc",
      },
      responseType: "json",
    })
    .then((response) => {
      setCurrency(response.data )
    });
} 
 useEffect(() => {
  changeCurrency()
}, [currency2,currency1 ]);



useEffect(() => {
  setCurrency2(() => locationUrl?.pathname === "/" ?"USD" : locationUrl?.pathname?.split("/")[3])
} , [locationUrl])
// function to handle currency change in first option tag
  const handleChangeCurrency1 = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCurrency1(e.target.value);
    setExchangeValue(null)
  };
  // function to handle currency change in second option tag
  const handleChangeCurrency2 = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCurrency2(e.target.value);
    setExchangeValue(null)
  };
// function for result of calculate the user's amount * currency rate
const handleAmountCurrency=(currencyAmout: any, currencyValue: number)=>{
  setExchangeValue(currencyAmout*currencyValue)
} 
// to get the Exhange Value of two cureencies (1 euro = xx usd)
const currencyExhangeValue = currency && currency.rates &&Object.values(currency.rates)[0]
// function for swap currencies
const handleSwapCurrency =()=>{
  locationUrl?.pathname === "/"&&setCurrency2(currency1) ;
  locationUrl?.pathname === "/"&& setCurrency1(currency2);
}
  return (
    <div className="border-radius-10 box-shadow main-card">
      <div className="main-card-amount">
        <label>amount</label>
        <input type="number" value={inputValue} className="border-radius-10 box-shadow amount-input"
         onChange={(e) => {
          setInputValue(e.target.value);
           }}/>
        <div className="border-radius-10 box-shadow box-currency-rate">
          {currencyExhangeValue && currency1 && currency2? 
          <>
          1 <span>{currency1} </span>= <span>{currencyExhangeValue}</span> <span>{currency2}</span>
          </>:"loading..."}
          
        </div>
      </div>
      <div className="main-card-exchange">
        <div>
          <label>from</label>
          <select onChange={handleChangeCurrency1} value={currency1}  disabled={locationUrl?.pathname !== "/"}className="border-radius-10 box-shadow ">
            {/* using sort to start by Eur */}
            {rates &&
              rates.rates &&
              Object.keys(rates?.rates)
                .sort(function (x, y) {
                  return x === currency1 ? -1 : y === currency1 ? 1 : 0;
                })
                .map((rate) => <option key={rate}   >{rate}</option>)}
          </select>
          <FaArrowsAltH onClick={()=> handleSwapCurrency()}/>
          <label>to</label>
          <select onChange={handleChangeCurrency2} value={currency2} className="border-radius-10 box-shadow ">
              {/* using sort to start by USD */}
            {rates &&
              rates.rates &&
              Object.keys(rates?.rates)
                .sort(function (x, y) {
                  return x === ( locationUrl?.pathname === "/" ? currency2 : locationUrl?.pathname?.split("/")[3])? -1 : 
                  y === currency2||locationUrl?.pathname?.split("/")[3] ? 1 : 0;
                })
                .map((rate) => <option key={rate}>{rate}</option>)}
          </select>
        </div>
        <button disabled={!inputValue} className={`convert-button border-radius-10 box-shadow ${!inputValue&& "disable"}`}onClick={()=>inputValue && handleAmountCurrency(inputValue ,currencyExhangeValue)}>Convert</button>
        <div className=" main-card-result">
          <h6 className="border-radius-10 box-shadow result-currency"> {exchangeValue} {currency2}</h6>
          {/* {showButton && <Link to="/currency-details">{title}</Link>} */}
          {locationUrl?.pathname ==="/" ? <Link to={`/currency-details/${currency1}/${currency2}`} className="border-radius-10 box-shadow">More Details</Link> :"" }
        </div>
      </div>
    </div>
  );
};

export default MainCard;
