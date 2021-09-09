import React from 'react';
import "./home.css";
import {Link } from "react-router-dom";
function Home(props) {
    return (
        <div className="container">
            <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/sjcmigra2nk4slozmfnu" width="20%" height="20%"/>
              <h1> Trell</h1>
              <Link to="/Shedule" > Check Shedule</Link>
              <Link to="/Cheers"> Cheers for your country  </Link>
              <Link to="/Medal"> Medal </Link>

        </div>
    );
}

export default Home;