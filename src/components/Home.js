import React from "react";
import { Link } from "react-router-dom";
import Carousels from "./Carousels";
import capture1 from "./images/capture1.png";
import capture2 from "./images/capture2.png";

function Home() {
  return (
    <div>
      <Carousels />
      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "rgb(242,242,242)",
          }}
        >
          <img
            src={capture1}
            alt="capture1"
            style={{
              width: "85%",
              height: "600px",
              borderRadius: "30px",
              marginTop: "20px",
            }}
          />
        </div>
        <img
          src={capture2}
          alt="capture1"
          style={{
            width: "85%",
            height: "600px",
            borderRadius: "30px",
            marginTop: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
