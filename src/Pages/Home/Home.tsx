import React from 'react'
import Card from '../../Components/Cards/Card'

import MainCard from '../../Components/MainCard/MainCard'
import Title from '../../Components/Title/Title'
import "./Home.css"
interface DetailsProps {
    showButton?: boolean,
    title?:string ,
    locationUrl?: any,
    [rates: string]: any,
}
const Home = ({showButton ,title ,rates ,cur1,cur2} :DetailsProps) => {

  return (
    <div className='home-page'>
        {/* <Title showButton={true} title="Currency Exchanger"/> */}
        {/* <MainCard showButton={true} title="More Details "rates={rates}  /> */}
        <Card rates={rates}/>
    </div>
  )
}

export default Home