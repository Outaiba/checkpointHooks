import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ display: "block", margin: "0 auto", width: "60%" }}>
      <>
        <h1>about page</h1>
        <p style={{ fontSize: 20 }}>
          React Router is a routing for React.js, that synchronizes the
          components of application with the URL & supports server side
          rendering.
        </p>
        <p style={{ fontSize: 20 }}>
          It's probably no surprise to you that React Router is the most popular
          3rd party library in the React ecosystem. In fact, during the last 6
          months, React Router has been included in 44% of all React projects.
          This statistic alone is enough to declare React Router as essential
          knowledge for any serious React developer.
        </p>
      </>
    </div>
  );
}

export default About;
