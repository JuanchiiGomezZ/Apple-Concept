import React from "react";

const PersonalDataForm = () => {

/*     const sendPersonalForm = () =>{

    } */
  return (
    <>
      <h1>Personal information.</h1>
      <div className="formsContainer">
        <form>
          <div className="personalData">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
            <input type="text" placeholder="ID number" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <h1>Shipping Information</h1>
          <div className="shippingData">
          <input type="text" placeholder="Postal code" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Street"/>
          <input type="text" placeholder="Number"/>
          <input type="text" placeholder="Floor" />
          </div>
          
        </form>
      </div>
    </>
  );
};

export default PersonalDataForm;
