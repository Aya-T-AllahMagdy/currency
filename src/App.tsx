import {useState, useEffect} from "react";
import axios from "axios";
import { Routes, Route  ,useLocation} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';
import MainCard from "./Components/MainCard/MainCard";
import Title from "./Components/Title/Title";
interface AppProps {
  locationUrl?: any,
  [rates: string]: any,
  currencyName? : string |null,
 
}
interface CurrenciesName {
  symbols: null;
success: boolean; 
}
function App({symbols,rates,baseCurrency, symbolCurrency ,locationUrl,item ,data} :AppProps) {

  const location = useLocation();
  // const [currency1, setCurrency1] = useState('USD');
  // const [currency2, setCurrency2] = useState('EUR');
  const [currency, setCurrency] = useState()
  const [fullCurrencyName, setFullCurrency] =useState<CurrenciesName | null>(null);;
  const changeCurrency =()=>{
    axios
    .get(`https://api.apilayer.com/fixer/latest?symbols`, {
      headers: {
        "apikey": "KQlDFB9IjIxSVIaiG8sgoPGFK8A2zP0S",
      },
      responseType: "json",
    })
    .then((response) => {
      setCurrency(response.data )
    });
} 
const currencyName =()=>{
  axios
  .get(`https://api.apilayer.com/fixer/symbols`, {
    headers: {
      "apikey": "KQlDFB9IjIxSVIaiG8sgoPGFK8A2zP0S",
    },
    responseType: "json",
  })
  .then((response) => {
    setFullCurrency(response.data )
  });
} 
 useEffect(() => {
  changeCurrency()
  // currencyName();
}, []);
  return (
    <div className="App">
      <Header/>
      <div className="app-body">
      <Title locationUrl={location} rates={currency} currencyName={fullCurrencyName&& fullCurrencyName.symbols && fullCurrencyName.symbols}/>
      <MainCard showButton={true} title="More Details "rates={currency}locationUrl={location}  />
       <Routes>
          <Route path="/" element={<Home showButton={true} rates={currency} title="Currency Exchanger"/>} />
          <Route path="/currency-details/:currency1/:currency2" element={<Details showButton={false}  rates={currency} />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
