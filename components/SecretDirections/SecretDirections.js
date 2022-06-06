import HorizontalNav from "../HorizontalNav/HorizontalNav";
import { useStyles } from "./SecretDirections.styles";
import Container from "@material-ui/core/Container";
import PhotoContentStripe from "../PhotoContentStripe/PhotoContentStripe";
import Grid from "@material-ui/core/Grid";

export default function DirectionsComponent() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <HorizontalNav />
        <h1>Directions</h1>
      </Container>
      <PhotoContentStripe
        imgSource={"/photos/directions.png"}
        photoPosition="right"
      >
        <div className={classes.photoContent}>
          <h2>Welcome to the super secret directions page</h2>
          <Grid container>
            <Grid item xs={12} md={6}>
              <p>Directions to Ceremony spot</p>
              <p>
                <b>44°17'28.9"N 121°39'38.0"W</b>
              </p>
              <p>or</p>
              <p>
                <b>44.291368, -121.660543</b>
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>Directions to camping and parking spot</p>
              <p>
                <b>44°17'33.3"N 121°39'29.5"W</b>
              </p>
              <p>or</p>
              <p>
                <b>44.292585, -121.658203</b>
              </p>
            </Grid>
          </Grid>
          <p>The weather forecast is calling for rain. So please come prepared with a jacket and appropriate footwear.</p>
          <p>There is limited parking. Please carpool if possible. Here are the directions from the Sisters Highschool:</p>
          <ul>
            <li className={classes.textAlignLeft}>
              <p>Turn right onto McKinney Butte Rd.</p>
            </li>
            <li className={classes.textAlignLeft}>
              <p>Turn right onto OR-242 W</p>
            </li>
            <li className={classes.textAlignLeft}>
              <p>
                Stay on OR 242 W <em>(Old Mckenzie Hwy)</em> for 4.5 miles -{" "}
                <em>
                  ( or if just coming from Sisters, head West on Old Mckenzie
                  Hwy)
                </em>
              </p>
            </li>
            <li className={classes.textAlignLeft}>
              <p>Turn left onto Trout Creek Butte Rd.</p>
            </li>
            <li className={classes.textAlignLeft}>
              <p>
                (Google wants you take the first left onto a dirt road, this is
                not the best way, follow these directions)
              </p>
            </li>
            <li className={classes.textAlignLeft}>
              <p>Drive .7 mile then turn left onto NF-1510</p>
            </li>
            <li className={classes.textAlignLeft}>
              <p>Drive .5 mile then turn right</p>
            </li>
            <li className={classes.textAlignLeft}>
              <p>
                Stay left, then you will see the ceremony spot. Keep going past
                it .1 mile to the parking.
              </p>
            </li>
          </ul>
        </div>
      </PhotoContentStripe>
    </div>
  );
}
