import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className='header-component box-shadow-bottom'>
      <Link to="/">
        <h1>Currency</h1>
      </Link>
      <div className='header-button'>
        <Link to={`/currency-details/${"EUR"}/${"USD"}`} className='border-radius-10 box-shadow'>EUR-USD</Link>
        <Link to={`/currency-details/${"EUR"}/${"GBP"}`}className='border-radius-10 box-shadow'>EUR-GBP</Link>
      </div>
    </div>
  )
}

export default Header