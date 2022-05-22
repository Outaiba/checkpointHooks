import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <Link
        to={`/trailer/${movie.name}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card
          style={{
            width: "18rem",
            maxHeight: 450,
            minHeight: 450,
            marginTop: 20,
          }}
        >
          <Card.Img
            variant="top"
            src={movie.posterurl}
            style={{ maxHeight: 161, minHeight: 161 }}
          />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
          <span style={{ marginLeft: "70px" }}>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={movie.rating}
              edit={false}
            />
          </span>
        </Card>
      </Link>
    </div>
  );
}

export default MovieCard;
