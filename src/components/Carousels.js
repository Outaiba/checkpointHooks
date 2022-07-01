import React from "react";

const Carousels = () => {
  return (
    <div
      className="pic-ctn"
      style={{
        width: "100%",
        backgroundColor: "rgb(239,240,239)",
        height: "400px",
      }}
    >
      <img
        src="https://www.ffrandonnee.fr/Media/Default/Images/randonner/conseils/conseil-ffrandonnee-sac-a-dos-rando-johannes-braun-vignette-home.jpg"
        alt=""
        className="pic"
        style={{
          width: "600px",
          height: "400px",
          marginLeft: "-100px",
        }}
      />
      <img
        src="https://www.ffrandonnee.fr/Media/Default/Images/s-informer/sant%C3%A9/ffrandonnee-sante-dietetique-hydratation-rando-perfect-match-fotolia-vignette-home.jpg"
        alt=""
        className="pic"
        style={{
          width: "600px",
          height: "400px",
          marginLeft: "-100px",
        }}
      />
      <img
        src="https://www.randoquebec.ca/wp-content/uploads/2021/09/equipe-3-light.jpg"
        alt=""
        className="pic"
        style={{
          width: "600px",
          height: "400px",
          marginLeft: "-100px",
        }}
      />
      <img
        src="https://www.altituderando.com/static/images/hp/photo-home-1600.jpg"
        alt=""
        className="pic"
        style={{
          width: "600px",
          height: "400px",
          marginLeft: "-100px",
        }}
      />
      <img
        src="https://www.randotunisie.tn/wp-content/uploads/2016/01/reboisement-cap-enjla-1.jpg"
        alt=""
        className="pic"
        style={{
          width: "600px",
          height: "400px",
          marginLeft: "-100px",
        }}
      />
    </div>
  );
};

export default Carousels;
