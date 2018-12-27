import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Jumbotron.scss";

const Jumbo = () => {
  return (
    <Jumbotron>
      <h1 className="jumboCard">Hello, world!</h1>
      <p className="jumboCard">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Jumbo;
