import { useStyles } from './PhotoContentStripe.styles';
import Grid from '@material-ui/core/Grid';

const PhotoContentStripe = ({ imgSource, photoPosition, children }) => {
  const classes = useStyles();

  return (
    <>
      {photoPosition === 'left' ? (
        <Grid container className={classes.stripeGrid}>
          <Grid className={classes.photoDiv} item xs={12} lg={6}>
            <img src={imgSource} alt='us photo' className={classes.photo} />
          </Grid>
          <Grid item xs={12} lg={6}>
            {children}
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.stripeGrid}>
          <Grid item xs={12} lg={6}>
            {children}
          </Grid>
          <Grid className={classes.photoDiv} item xs={12} lg={6}>
            <img src={imgSource} alt='us photo' className={classes.photo} />
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default PhotoContentStripe;
