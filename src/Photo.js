import React from "react";
import image from "./img/placeimg_400_600_grayscale_people.jpg";

const Photo = () => {
  return (
    <div className="photo">
      <img className="photo__img" src={image} alt="img"></img>
    </div>
  );
};

export default Photo;
