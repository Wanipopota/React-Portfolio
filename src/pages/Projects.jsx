import React from "react";
import bookSearch from "../assets/projectsPic/bookSearch.png"
import jate from "../assets/projectsPic/jate.png"
import jokeGame from "../assets/projectsPic/jokeGame.png"
import noteTaker from "../assets/projectsPic/noteTaker.png"
import weather from "../assets/projectsPic/Weather.png"

function Projects() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={bookSearch}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>MERN Challenge: Book Search Engine</h4>
              <p>
              Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server.
              The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.
               It's already set up to allow users to save book searches to the back end.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={jate}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>J.A.T.E</h4>
              <p>
              Your task is to build a text editor that runs in the browser. 
              To build this text editor, you will start with an existing application 
              and implement methods for getting and storing data to an IndexedDB database.
              You will use a package called idb, which is a lightweight wrapper around the IndexedDB API.
              It features a number of methods that are useful for storing and retrieving data,
              and is used by companies like Google and Mozilla.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={jokeGame}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Joke Game</h4>
              <p>
              We have created a web app called Joke Games. It is a website that displays
              lists of games that you can play and information about them, while always
              giving you the ability to ask for a joke whilst browsing.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={noteTaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
              Note Taker can be used to write and save notes.
              This application will use an Express.js back end and 
              will save and retrieve note data from a JSON file.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={weather}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              Server-side APIs allow developers to access their data and functionality 
              by making requests with specific parameters to a URL. Developers are often 
              tasked with retrieving data from another application's API and using it in
              the context of their own. Your challenge is to build a weather dashboard that
              will run in the browser and feature dynamically updated HTML and CSS.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Projects;
