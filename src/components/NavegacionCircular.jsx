import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faMusic, faPaintBrush, faGuitar, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const NavegacionCircular = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      
      <nav className="menu" data-testid="main-navigation">
        <input
          type="checkbox"
          className="menu-toggler"
          id="menu-toggler"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="menu-toggler"></label>
        <ul>
          <li className="menu-item">
            <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
          </li>
          <li className="menu-item">
            <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
          </li>
          <li className="menu-item">
            <Link to="musica"><FontAwesomeIcon icon={faMusic} /></Link>
          </li>
          <li className="menu-item">
            <Link to="#"><FontAwesomeIcon icon={faGuitar} /></Link>
          </li>
          <li className="menu-item">
            <Link to="dibujos"><FontAwesomeIcon icon={faPaintBrush} /></Link>
            
          </li>
          <li className="menu-item">
          <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavegacionCircular;
