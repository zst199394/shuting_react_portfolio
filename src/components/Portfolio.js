import React from "react";
import Projects from "./Projects.json";

class Portfolio extends React.Component {
  state = {
    projects: Projects
  }
  render() {
    return (
      <div className="card" id="portfolio">
        {this.state.projects.map((app, key) => (
          <div className="card">
            <div className="card-body" key={key}>
              <h5 className="card-title">{app.app}</h5>
              <p className="card-text">{app.description}</p>
              <img src={app.screenshot} className="card-img-top img-fluid" alt={app.app} />
              <a href={app.live} className="btn btn-primary">Check the app</a>
              <a href={app.git} className="btn btn-primary">Check the repo</a>
            </div>
          </div>
        ))}


      </div>

    )
  }
}

export default Portfolio;