import Link from 'next/link';
import HorizontalNav from '../HorizontalNav/HorizontalNav';
import { useStyles } from './Footer.styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HorizontalNav />
    </div>
  );
}
