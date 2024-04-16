import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  const backgroundStyle = {
    backgroundImage: `url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%', 
    padding:'2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column align-items-center" style={backgroundStyle}> 
          <div className="m-5">
            <h1 style={{fontSize:'8rem'}}>404</h1>
          </div>
          <div className="text-center" style={{marginTop:'23%'}}>
            <h3 >The page you are looking for not avaible!</h3>
            <Link to={"/"}>
              <button className="btn btn-success m-4">Back To Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
