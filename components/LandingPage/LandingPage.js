import HorizontalNav from '../HorizontalNav/HorizontalNav';
import Container from '@material-ui/core/Container';
import { useStyles } from './LandingPage.styles';
import ConfettiCustom from '../ConfettiCustom';
import UpdateSnackbar from '../UpdateSnackbar/UpdateSnackbar';

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <ConfettiCustom />
      <HorizontalNav />
      <Container className={classes.root}>
        <h1 className={classes.header}>
          Welcome to Tate And Hannah's Wedding Site!
        </h1>
        <UpdateSnackbar />
        <h2>Save the date: September 18, 2021</h2>
        <img src='/photos/us18.jpg' alt='us photo' className={classes.photo} />
      </Container>
    </div>
  );
}
