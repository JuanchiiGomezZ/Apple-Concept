import React from 'react'

const FeaturesIpad = ({data}) => {
  return (
    <div className={`featuresContainer`}>
    <div className="featuresTitle">
      <h1>{data.name}.</h1>
      <h1 className="gray">Features.</h1>
    </div>
    <div className="features">
      <div className="feature">
        <img src={data.chipImg} alt="" />
        <p>{data.chip}</p>
      </div>
      <div className="feature">
        <img src='https://i.postimg.cc/R0V91pmF/Screen-Ipad.png' alt="" />
        <h2>{data.screen}</h2>
        <p className='gray'>{data.screenDesc}</p>
      </div>
      <div className="feature">
        <img src={data.cameraImg} alt="" />
        <p>{data.camera}</p>
      </div>
      <div className="feature">
        <img src="https://i.postimg.cc/C5bHB1rB/Batery.png" alt="" />
        <p>{data.battery}</p>
      </div>
      <div className="feature">
        <img src={data.chargerImg} alt="" />
        <h2>{data.charger}</h2>
      </div>
      <div className="feature">
        <img src="https://i.postimg.cc/wvykzFhk/5G.png" alt="" />
        <p>Superfast 5G cellular</p>
      </div>
    </div>
  </div>
  )
}

export default FeaturesIpad;