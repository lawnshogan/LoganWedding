import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  link: {
    color: 'teal',
    '&:visited': {
      color: 'purple'
    }
  }
  })
);

export default useStyles;
