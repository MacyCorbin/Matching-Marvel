import React from "react";
import "./Card.css";

// creates card, click event, and link to image
const Card = props => (

    <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
        <img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
        </div>
    </div>
);
  
export default Card;