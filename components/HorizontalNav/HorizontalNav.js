import Link from 'next/link';
import { useStyles } from './HorizontalNav.styles';

export default function HorizontalNav() {
  const classes = useStyles();
  return (
    <div className={classes.listDiv}>
      <Link  href='/'>
        <a className={classes.item}>Home</a>
      </Link>
      <Link  href='/details'>
        <a className={classes.item}>Details</a>
      </Link>
      <Link  href='/about'>
        <a className={classes.item}>About Us</a>
      </Link>
      <Link  href='/photos'>
        <a className={classes.item}>Photos</a>
      </Link>
      <Link  href='/directions'>
        <a className={classes.item}>Directions</a>
      </Link>
      <Link  href='/rsvp'>
        <a className={classes.item}>RSVP</a>
      </Link>
      <Link  href='https://www.zola.com/registry/tateandhannah2021'>
        <a target='_blank' className={classes.item}>Registry</a>
      </Link>
    </div>
  );
}
