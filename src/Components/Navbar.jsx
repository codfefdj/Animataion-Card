import React from 'react';
// import Mediaquery from '../Components/Mediaquery';
function Navbar() {
  return (
    <>
      <div className='home-bg-img'>
        <div className='bg-color'>
          <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light shadow-5-strong text-light">
              <div className="container-fluid ">
                <a className="navbar-brand pt-serif" href="#">COZYSTAY </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="navbar-toggler-icon"></i>
                  {/* <i class="fa-solid fa-bars"></i> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav text-light mt-2 ">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#"><i className="fa-solid fa-bars"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="/details">Stay</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="/">Page</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="/">News</a>
                    </li>
                  </ul>

                  <ul className='navbar-nav mt-2'>
                    <li className='nav-item'>
                      <a className='nav-link' href="/" style={{fontSize: '16px'}}>Tel: +41 22 345 67 88</a>
                    </li>
                    <li className='nav-item '>
                      <a className='nav-link' href="/" style={{fontSize: '16px'}}>EN / FR</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-12 col-xs-12">
                <div className='home-heading mt-5 pt-1'>
                  <h1 className='Doodle-shadow'>Boutique Private Island Resort</h1>
                  <p className='pt-serif text-light' >The seaside haven of warmth, tranquility and restoration</p>
                  <button className='btn btn-success btn-md'>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar