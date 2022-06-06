import HorizontalNav from "../HorizontalNav/HorizontalNav";
import { useStyles } from "./Details.styles";
import Container from "@material-ui/core/Container";
import PhotoContentStripe from "../PhotoContentStripe/PhotoContentStripe";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

export default function Details() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <HorizontalNav />
        <h1>Details</h1>
      </Container>
      <PhotoContentStripe imgSource={"/photos/us13.jpg"} photoPosition="left">
        <div className={classes.photoContent}>
          <Alert severity="warning">
            PLEASE READ: We are making adjustments to the schedule. Mainly, the
            reception has been cancelled due to an increase in Covid cases in
            Oregon. We felt it best if we only meet in outdoor spaces.
          </Alert>

          <h2>Ceremony and Reception</h2>
          <p>
            The ceremony will start at 4:00pm and will be quick.
            <em>(We will update the site with directions soon!).</em> It will be
            informal and short, and there will be no seating, food, or water.{" "}
            <b>Please bring a water bottle!</b> The ceremony will be held in the woods and you may be required to walk a short distance on a dusty road. So plan footwear accordingly. Also, the forecast is showing some potential for rain, so please come prepared with a jacket of some sort. We will not be offended if you cannot make it. Thank you!
          </p>
          <p>
            The Reception has been cancelled due to an increase in Covid cases
            in Oregon. Sorry for any inconvenience, we regret not being able to
            have this event with you all!
          </p>
          <h2>Schedule</h2>
          <p>
            <b>4pm</b>: Ceremony in the woods
          </p>
          <p>
            <b>7 - 9pm ish</b>:, come back to the woods to hang out and celebrate with us.
          </p>
        </div>
      </PhotoContentStripe>
      <PhotoContentStripe imgSource={"/photos/us12.jpg"} photoPosition="right">
        <div className={classes.photoContent}>
          <h2>Where To Stay?</h2>
          <p>
            There are many places to stay in Bend, Sisters, or Redmond. Here are
            some links to AirBnb to get you started.
          </p>
          <div className={classes.buttonDiv}>
            <a
              target="_blank"
              href="https://www.airbnb.com/a/stays/Bend--Oregon--United-States"
            >
              <Button variant="outlined">AirBnb Bend</Button>
            </a>
            <a
              target="_blank"
              href="https://www.airbnb.com/a/stays/Sisters--Oregon--United-States"
            >
              <Button variant="outlined">AirBnb Sisters</Button>
            </a>
            <a
              target="_blank"
              href="https://www.airbnb.com/a/stays/Redmond--Oregon--United-States"
            >
              <Button variant="outlined">AirBnb Redmond</Button>
            </a>
          </div>
          <p>
            Since the Reception will be held in Sisters, it makes most sense to
            book a place there. But if that fills up, Bend is a good backup plan
            as it is only a 30 ish minute drive away.
          </p>
          <h2>Camping</h2>
          <p>
            There may be some camping available in the woods near where the
            ceremony is taking place. Please reach out to us with questions in
            your RSVP
          </p>
        </div>
      </PhotoContentStripe>
      <PhotoContentStripe imgSource={"/photos/us14.jpg"} photoPosition="left">
        <div className={classes.photoContent}>
          <h2>Food</h2>
          <p>
            As the Reception has been cancelled, we will not be providing food.
            So sorry for the inconvenience. There are plenty of great food
            establishments in Sisters, as well as in the greater central Oregon
            area that we can recommend to you. Please reach out with questions!
          </p>
          <h2>Pets</h2>
          <p>
            Please leave your pets at home, thank you! We would love to meet
            your animals another time! Freddie especially...
          </p>
          <h2>Covid</h2>
          <p>
            We are all coming from a variety of backgrounds and beliefs. It is
            impossible to anticipate what state the pandemic will be on the day
            of the wedding. As stated in the sections above, we are adjusting
            our plans to accommodate a rise in Covid cases in Oregon. We will be
            aiming to only meet in outdoor spaces. We can expect that some
            attendees will be vaccinated and some will not. Please be respectful
            and understanding of everybody's concerns during our celebration.
          </p>
        </div>
      </PhotoContentStripe>
    </div>
  );
}
