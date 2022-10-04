import React from 'react'
import { Link} from 'react-router-dom';
const BannersMac = () => {
  return (
    <div className='bannersMac'>
        <div className="bannersMacText">
            <p className='new'>New</p>
            <h1 className='bannerMacTitle'>MacBook Pro 13''</h1>
            <h3 className='bannerMacSubtitle'>Pro anywhere.</h3>
            <p className='bannerMacPrice'>From $1299</p>
            <Link to='/Shop/Mac/12' id='buyButton'>Buy</Link>
        </div>
    </div>
  )
}

export default BannersMac;