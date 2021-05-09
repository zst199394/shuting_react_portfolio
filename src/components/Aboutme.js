import React from "react";

function Aboutme() {
  return (
    <main className="container my-5" id="aboutme">
      <section className="card">
        <div className="card-body">
          <h1 className="card-title text-primary">About Me</h1>

          <p className="card-text">
            <img id="image" src="/assets/IMG_0816.JPG" alt="shuting" />My name is Shuting Zhao.I lived in Florida 5 years already since
            2015.I've been living in Hawaii for a while before for study. I got
            my bachelor degree in Tourism Management but after working in
            Disney, Universal ,5-star hotels, I realized that is not the perfect
            field for me.So right now I am focusing on web and software
            development. I am recently studying in Central Florida Coding
            Bootcamp.I have already get used to the 3 basic web languages: HTML,
            CSS, Javascript. Now I am working hard on getting more and more
            skillful on all these languages and keep leaning deeper and deeper
            everyday.At the same time, I also study a lot of new languages and
            technologies that useful for websites developement.
          </p>
          <a href="https://github.com/zst199394" className="card-link">
            <img id="social_icons" src="assets/github.png" alt="github" />
            My Github link
          </a>
          <a
            href="https://www.linkedin.com/in/shu-ting-zhao-1497ba199/"
            className="card-link"
          >
            <img id="social_icons" src="assets/linkedin.png" alt="github" />
            My Linkedin link
          </a>
        </div>
      </section>
    </main>
  );
}

export default Aboutme;
