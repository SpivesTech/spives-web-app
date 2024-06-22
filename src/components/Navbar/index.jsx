import { Button } from "@chakra-ui/react";
import "./style.css";
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

function Navbar() {
  return (
    <div className="header-navbar">
      <div className="feature-section">
        <img src="/images/spives.png" className="image-container" alt="spives logo"/>
      </div>
      <div className="feature-panel">
        <div className="flex-container-with-text-aligned">
          <p className="feature-title">Features</p>
          <p className="feature-description-text-style">Pricing</p>
        </div>
        <div className="flex-container-with-text-aligned">

          <Button className="primary-button-style">Login</Button>
 
          <Button className="orange-button">Get Started</Button>
        </div>
        <ColorModeSwitcher />
      </div>
    </div>
  );
}

export default Navbar;
