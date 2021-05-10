import React from "react";
import Projects from "./Projects.json";

class Portfolio extends React.Component {
  state = {
    projects: Projects
  }
  render() {
    return (
      <div className="card" id="portfolio">
        <h1 className="card-title text-primary">My Recent Project:</h1>
        {this.state.projects.map((app, key) => (
          <div id="project">
            <div className="card-body" key={key}>
              <h4 className="card-title text-primary">{app.app}</h4>
              <a href={app.live} className="btn btn-success">Check the app</a>
              <a href={app.git} className="btn btn-dark">Check the repo</a>
              <p className="card-text">{app.description}</p>
              <img id="projectIMG" src={process.env.PUBLIC_URL+app.screenshot} className="card-img-top img-fluid" alt={app.app} />

            </div>
          </div>
        ))}


      </div>

    )
  }
}

export default Portfolio;