import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import { Radio } from '@mui/material';
import {FormControlLabel} from '@mui/material'
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

import TitleImage from 'logo.png';
import TitleImage1 from 'logo.png';
import './App.css';

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});


const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `0px`,
  [theme.breakpoints.up('md')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  backgroundColor: '#321c59',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// `calc(${theme.spacing(9)} + 1px)`
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  [theme.breakpoints.up('md')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
    width: `calc(100% - ${theme.spacing(9)} - 1px)` ,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  },
  
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ 
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            width:'100%',
            bgcolor: 'white',
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <Typography variant="h6" noWrap
            sx={{
              color:'black',
              [theme.breakpoints.down('md')]: {
                display: 'none',
              },
            }}
          >
            Meu perfil
          </Typography>
          <Typography
            sx={{
              [theme.breakpoints.up('md')]: {
                display: 'none',
              }, 
            }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              size="large"
              sx={{
                marginTop: '-40px'
              }}
            >
              <MenuIcon fontSize="inherit" sx={{color:'#00e676'}}/>
            </IconButton>
            <img src={TitleImage1} className='logo-image' alt='' />
          </Typography>
          <IconButton
            aria-label="open drawer"
            //onClick={handleDrawrOpen}
            edge="start"
            size="large"
            sx={{
              position: 'absolute',
              right: '20px',
              width: '45px',
              height: '45px',
              color:'white',bgcolor:'#00e676'
            }}
          >
            <h5>M</h5>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          size="large"
          sx={{
            marginLeft: '-3px',
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <KeyboardDoubleArrowRightIcon fontSize="inherit" sx={{color:'white'}}/>
        </IconButton>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'flex-start'
            }} 
          >
            <img src={TitleImage} className='logo-image' alt='' />
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <KeyboardDoubleArrowRightIcon  style={{color:'white'}}/> : <KeyboardDoubleArrowLeftIcon style={{color:'white'}}/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
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

export default App;
