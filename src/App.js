import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PetsIcon from '@mui/icons-material/Pets';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Grid from '@mui/material/Grid';

import { useMediaQuery } from 'react-responsive';
import ListItemButton from '@mui/material/ListItemButton';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import EditForm from './components/edit-form.component'
import NewForm from './components/new-form.component'
import ProfileForm from './components/profile-form.component'
import Dashboard from './components/dashboard.component'
import Client from './components/client.component'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import { FloatingLabel } from 'react-bootstrap';
import { bgcolor } from '@mui/system';

import './App.css'



const drawerWidth = 240;

//when the sidebar is opened or closed, the content area will shrink or expand

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

//AppBar means topbar. Topbar as moving the sidebar/

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'-40], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  // const isMobile = useMediaQuery({ query: `(max-width: 576px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <Box sx={{ display: 'flex',  bgcolor: '#f1f4f7' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ bgcolor: 'white', display: 'flex', justifyContent: 'space-between' }}>
          <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }), color: green[500] }}
            >
              <MenuIcon />
            </IconButton>
            
            <Avatar variant="square" alt="A" sx={{ mr: 2, ...(open && { display: 'none' }) }} src="logo.png" />

            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, ...(open && { display: 'none' }), color: 'black' }}>
              vetsnow
            </Typography>
          </Stack>

          <Avatar sx={{ bgcolor: green[500] }} >
            M
          </Avatar>     

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#482880',
            color: 'white',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: '#321c59',  }}>

          <Stack sx={{ display: 'flex', flexDirection: 'row'}}>
            <Avatar variant="square" alt="Remy Sharp" src="logo.png" />

            <Typography variant="h6" noWrap component="div">
              vetsnow
            </Typography>
          </Stack>


          {/* {(!open && !isTablet)? handleDrawerOpen() : ''}

          {(open && isTablet)? handleDrawerClose() : ''} */}


          <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }} >
            {theme.direction === 'ltr' ? <KeyboardDoubleArrowLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                <DashboardIcon />
              </ListItemIcon>
              <Link to={'/dashboard'} className="nav-link">
                <ListItemText sx={{ color: 'white', listStyleType: 'none' }} primary="Dashboard" />
              </Link>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                <PetsIcon />
              </ListItemIcon>
              <Link to={'/new-form'} className="nav-link">
                <ListItemText className="list-item-text" sx={{ color: 'white', listStyleType: 'none' }} primary="Pacientes" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                <PersonOutlineIcon />
              </ListItemIcon>
              <Link to={'/client'} className="nav-link">
                <ListItemText sx={{ color: 'white', listStyleType: 'none' }} primary="Clientes" />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <div className="wrapper">
          <Switch>
            {/* <Route
              exact
              path="/"
              component={(props) => <NewForm {...props} />}
            /> */}
            <Route
              exact
              path="/new-form"
              component={(props) => <NewForm {...props} />}
            />
            <Route
              exact
              path="/edit-form"
              component={(props) => <EditForm {...props} />}
            />
            <Route
              exact
              path="/profile-form"
              component={(props) => <ProfileForm {...props} />}
            />
            <Route
              exact
              path="/dashboard"
              component={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path="/client"
              component={(props) => <Client {...props} />}
            />
          </Switch>
        </div>
        
      </Main>
    </Box>
  );
}