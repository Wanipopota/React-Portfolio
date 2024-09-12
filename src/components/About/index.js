import React from "react";
import profilePic from "../../assets/profilePic/logo.png"
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row" id="text-box">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profilePic} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Hi there! I'm Alexander Guanipa, and I come from Venezuela. 
          After moving to the United States in 2020, I decided to pursue a career as a junior programmer.
          I'm passionate about honing my programming skills and expanding my knowledge as I progress in my professional journey. 
          In 2023, I embarked on my programming path by enrolling in the UM coding program, where I gained comprehensive knowledge of fundamental coding principles and mastered my initial languages, including HTML, CSS, and JavaScript.
          </p>
          <p>
          One of my future goals is to further develop my programming expertise and possibly specialize in a specific area, such as web development or app development.
          I also aspire to contribute to meaningful projects that have a positive impact on society.
          Additionally, I plan to continue expanding my professional network and seeking opportunities for continued learning and growth in the programming field.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
