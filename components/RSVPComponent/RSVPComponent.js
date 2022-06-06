import HorizontalNav from "../HorizontalNav/HorizontalNav";
import { useStyles } from "./RSVPComponent.styles";
import Container from "@material-ui/core/Container";
import PhotoContentStripe from "../PhotoContentStripe/PhotoContentStripe";
import Divider from "@material-ui/core/Divider";

export default function RSVPComponent() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <HorizontalNav />
        <h1>RSVP</h1>
      </Container>
      <PhotoContentStripe imgSource={"/photos/us7.jpg"} photoPosition="left">
        <h2>We can't wait to see you!</h2>
        <Divider />
        <div className={classes.paragraph}>
          <p>You may RSVP by emailing either </p>
          <p>
            <a className={classes.link} href="mailto:tateshep@gmail.com">
              tateshep@gmail.com
            </a>
          </p>
          <p>or </p>
          <p>
            <a className={classes.link} href="mailto:boles.hannah@gmail.com">
              boles.hannah@gmail.com
            </a>
          </p>
          <p>Please include first and last names of all expected attendees.</p>
        </div>
      </PhotoContentStripe>
    </div>
  );
}
