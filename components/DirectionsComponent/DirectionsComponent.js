import HorizontalNav from "../HorizontalNav/HorizontalNav";
import { useStyles } from "./DirectionsComponent.styles";
import Container from "@material-ui/core/Container";
import PhotoContentStripe from "../PhotoContentStripe/PhotoContentStripe";

export default function DirectionsComponent() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <HorizontalNav />
        <h1>Directions</h1>
      </Container>
      <PhotoContentStripe imgSource={"/photos/us1.jpg"} photoPosition="right">
        <div className={classes.photoContent}>
          <p>
            The wedding will be held at a special location in the woods outside of
            Sisters, Oregon. Please reach out to us either by phone or email for directions if you haven't already received them.
          </p>
          <p>
            <a
              target="_blank"
              className={classes.link}
              href="https://www.google.com/maps/place/Sisters,+OR+97759/@44.2901002,-121.5766931,14z/data=!3m1!4b1!4m5!3m4!1s0x54bf30b47c2cf1a9:0x85dd298592775554!8m2!3d44.2909491!4d-121.5492119"
            >
              Directions to Sisters Oregon with Google
            </a>
          </p>
          <p>September 18, 2021</p>
        </div>
      </PhotoContentStripe>
    </div>
  );
}
