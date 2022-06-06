import React from 'react';
import Link from 'next/link';
/** styles */
import { useStyles } from './NavDrawer.styles';
/** MaterialUI Components */
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CheckIcon from '@material-ui/icons/Check';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const TableOfContentsDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
      <Button className='drawer-btn' onClick={() => setIsOpen(true)}>
        <ListIcon style={{fontSize: '3rem'}} />
      </Button>
      <Drawer  anchor='left' onClose={() => setIsOpen(false)} open={isOpen}>
        <div className={classes.drawer}>
          <Button onClick={() => setIsOpen(false)}>
            <CloseIcon fontSize='large' />
          </Button>
          <List component='nav' aria-label='Navigation drawer'>
            <Link href='/'>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Welcome' />
              </ListItem>
            </Link>
            <Link href='/details'>
              <ListItem button>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary='Details' />
              </ListItem>
            </Link>
            <Link href='/about'>
              <ListItem button>
                <ListItemIcon>
                  <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='About' />
              </ListItem>
            </Link>
            <Link href='/photos'>
              <ListItem button>
                <ListItemIcon>
                  <CameraAltIcon />
                </ListItemIcon>
                <ListItemText primary='Photos' />
              </ListItem>
            </Link>
            <Link href='/directions'>
              <ListItem button>
                <ListItemIcon>
                  <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary='Directions' />
              </ListItem>
            </Link>
            <Link href='/rsvp'>
              <ListItem button>
                <ListItemIcon>
                  <PlaylistAddCheckIcon />
                </ListItemIcon>
                <ListItemText primary='RSVP' />
              </ListItem>
            </Link>
            <Link target='_blank' href='https://www.zola.com/registry/tateandhannah2021'>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary='Registry' />
              </ListItem>
            </Link>
          </List>
        {/* still need: lodging, rsvp, registry  */}
        </div>
      </Drawer>
    </div>
  );
};

/* istanbul ignore next */
export default TableOfContentsDrawer;
