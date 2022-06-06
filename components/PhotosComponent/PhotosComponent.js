import React from "react";
import HorizontalNav from "../HorizontalNav/HorizontalNav";
import { useStyles } from "./PhotosComponent.styles";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";

const PhotosComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HorizontalNav />
      <h1>Gallery</h1>
      <h2>Check out these sweet pics...</h2>
      <PhotoCarousel />
    </div>
  );
};

export default PhotosComponent;
