import React from "react";
import image from "./assets/img/background.webp";

const LandingPage: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <div>
        <div>Logo</div>
        <div>Menu</div>
      </div>

      <img src={image} className='App-logo' alt='logo' />
    </div>
  );
};

export default LandingPage;
