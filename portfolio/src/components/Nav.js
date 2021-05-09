import React from "react";


function Nav(){
    return(
        <header>
        <nav className="navbar-expand-lg navbar navbar-dark bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="/"> Shuting Zhao</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#aboutme">About</a>
                  </li>
                
                </ul>
              </div>
            </div>
        </nav>
        </header>
    )
}

export default Nav;
