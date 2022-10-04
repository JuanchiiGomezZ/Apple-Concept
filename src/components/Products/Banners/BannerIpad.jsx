import React from 'react'
import { Link } from 'react-router-dom'

const BannerIpad = () => {
  return (
    <div className="bannerIpad">
        <div className="bannerIpadText">
            <h1 className='bannerIpadTitle'>iPad</h1>
            <div className="bannerIpadDescription">
                <p>Delightfully capable.</p>
                <p>Surprisingly affordable.</p>
            </div>
            <p className='bannerIpadPrice'> From $329</p>
            <Link to='/Shop/iPad/21' id="buyButton">Buy</Link>
        </div>
        <img src="https://www.apple.com/v/ipad-10.2/k/images/overview/hero/hero__bko3fc2it2s2_large.jpg" alt="" />
    </div>
  )
}

export default BannerIpad