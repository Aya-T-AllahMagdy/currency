import React from 'react'
import MainCard from '../../Components/MainCard/MainCard'
import Title from '../../Components/Title/Title'
import "./Details.css"
interface DetailsProps {
    showButton?: boolean,
    locationUrl?:any,
    [rates: string]: any,
    title ?:string |null,
    currencyName? : string |null,
   
}
const Details = ({showButton ,title,rates,currencyName} :DetailsProps) => {

  return (
    <div className='details-page'>
        {/* <Title showButton={false} title="details page title"/> */}
        {/* <MainCard showButton={false} title=""rates={rates}/> */}
    </div>
  )
}

export default Details


