import React from "react";

function Aboutme() {
  return (
    <main className="container my-5" id="aboutme">
      <section className="card">
        <div className="card-body">
          <h1 className="card-title text-primary">About Me</h1>
          <p className="card-text">
            <img
              id="image"
              src={process.env.PUBLIC_URL + "/assets/IMG_0816.JPG"}
              alt="shuting"
            />
            My name is Shuting Zhao.I lived in Florida 5 years already since
            2015.I've been living in Hawaii for my bachelor degree in Tourism
            Management but after working in this industry for few years now I
            realized that is not the perfect field for me.After deciding to be a
            web developer or software engineer, I am recently studying in
            Central Florida University Coding Bootcamp.Learn in-demand skills
            through a market-driven curriculum: HTML5, CSS3, JavaScript, jQuery,
            Express.js, React.js, Node.js, progressive web apps, agile
            methodology, computer science, database theory, MongoDB, MySQL, Git,
            and more.I am working hard on getting my coding skills stronger to
            reach my goal to be a developer.
          </p>
          <a href="https://github.com/zst199394" className="card-link">
            <img
              id="social_icons"
              src={process.env.PUBLIC_URL + "/assets/github.png"}
              alt="github"
            />
            My Github
          </a>
          <a
            href="https://www.linkedin.com/in/shu-ting-zhao-1497ba199/"
            className="card-link"
          >
            <img
              id="social_icons"
              src={process.env.PUBLIC_URL + "/assets/linkedin.png"}
              alt="github"
            />
            My Linkedin
          </a>
        </div>
      </section>
    </main>
  );
}

export default Aboutme;
