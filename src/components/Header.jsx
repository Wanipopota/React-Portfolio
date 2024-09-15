import React from "react";
import Navegation from "./Navegation";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Wanipopota's Portfolio</h1>
          </div>
          <div>
            <Navegation
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navegation>
          </div>
        </header>
      </section>
      <section className="hero">
        <div className="hero-cta">
          <h2>Welcome</h2>
          <p>
            Welcome to Wanipopotas's portfolio page, which is crafted with React.
            Here, you'll find a selection of projects I completed throughout the program.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
