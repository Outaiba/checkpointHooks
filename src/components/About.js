import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ display: "block", margin: "0 auto", width: "60%" }}>
      <>
        <h1>à propos Rando</h1>
        <p style={{ fontSize: 20 }}>
          D’une façon générale en Tunisie, il n’y a pas de circuits de
          randonnées aménagés. A part quelques rares exceptions, vous ne
          trouverez aucun guide, aucun balisage. La progression peut donc être
          rendue difficile par différents obstacles, le tout premier étant la
          végétation. Il faudra trouver votre chemin, prendre une variante,
          demander à un berger.
        </p>
        <p style={{ fontSize: 20 }}>
          Rien d’insurmontable bien entendu. Il est donc important de bien se
          préparer pour randonner en Tunisie (par exemple en imprimant un aperçu
          GoogleEarth, en partant avec un téléphone à 100% et une batterie
          complémentaire, vérifier son solde de 4G, etc), de toujours garder à
          l’esprit le but de la balade (et bien entendu, penser à pouvoir
          revenir à son point de départ sans trop galérer 🙂 ). La préparation
          passe aussi par le côté sécuritaire. Renseignez-vous éventuellement
          auprès de la Garde Nationale locale.
          <p style={{ fontSize: 20 }}>
            Un autre conseil important : restez groupés. C’est beaucoup plus
            sympa de marcher à plusieurs. Par endroits, la végétation est
            tellement épaisse que deux personnes espacées de 30 mètres peuvent
            se perdre. De même, fixez-vous des objectifs réguliers (“on va sur
            ce pic”, “on traverse l’oued là-bas”,”on sort le pique-nique sous le
            grand pin là-haut”), c’est plus facile pour tous se retrouver.
          </p>
        </p>
      </>
    </div>
  );
}

export default About;
