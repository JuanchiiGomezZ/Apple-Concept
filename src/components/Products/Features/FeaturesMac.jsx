import React from "react";

const FeaturesMac = ({ data }) => {
  return (
    <div className={`featuresContainer ${data.hide}`}>
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
          <div className="component">
            <h2>{data.cpu}</h2>
          </div>
          <p>CPU</p>
        </div>
        <div className="feature">
          <div className="component">
            <h2>{data.gpu}</h2>
          </div>
          <p>GPU</p>
        </div>
        <div className="feature">
          <div className="component">
            <h2>{data.ram}</h2>
          </div>
          <p>RAM</p>
        </div>
        <div className="feature">
          <img src={data.screenImg} alt="" />
          <h2>{data.screen}</h2>
          <p className="gray">{data.screenDesc}</p>
        </div>
        <div className="feature">
          <img src="https://i.postimg.cc/C5bHB1rB/Batery.png" alt="" />
          <h2>{data.battery}</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturesMac;
