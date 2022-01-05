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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { borderRadius, grid, height } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CheckOutlined from '@mui/icons-material/CheckOutlined';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const drawerWidth = 240;

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
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

  const handleChange = () => {

  }

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#482880',
    borderColor: '#482880',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#321c59',
      borderColor: '#321c59',
      boxShadow: 'none',
    },
  });
  
   
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', bgcolor: 'white', textAlign: 'center', padding: 5 }}>
      <Grid xs={12} sm={12} md={4}>
        <Grid item xs={12}>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="capture.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container sx={{ marginBottom: 5 }}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" sx={{ fontWeight: 600, color: '#482880' }}>
                Pipoca
              </Typography>
            </Grid>
            <Grid item>
              <Button 
                startIcon={<AccountCircleRoundedIcon />} variant="contained" sx={{ marginRight: 3, bgcolor: '#00e676', borderRadius: 10 } } >Larue Wehner
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={8} spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Grid item sm={6} md={3} spacing={2}>
          <Typography variant="body2" sx={{ color: 'black', opacity: 0.5 }}>
            Especie
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Canino
          </Typography>
        </Grid>
        <Grid item sm={6} md={3}>
          <Typography variant="body2" sx={{ color: 'black', opacity: 0.5 }}>
            Raca
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Schnauzer
          </Typography>
        </Grid>
        <Grid item sm={6} md={3}>
          <Typography variant="body2" sx={{ color: 'black', opacity: 0.5 }}>
            Idade
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Nao Informado
          </Typography>
        </Grid>
        <Grid sm={6} md={3}>
          <Typography variant="body2" sx={{ color: 'black', opacity: 0.5 }}>
            Cor
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Nao Informado
          </Typography>
        </Grid>
        <Grid sm={6} md={3}>
          <Typography variant="body2" sx={{ color: 'black', opacity: 0.5 }}>
            Sexo
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Femeo
          </Typography>
        </Grid>
        <Grid sm={6} md={3}>
          <Typography variant="body2" sx={{ color: 'black', opacity: 0.5 }}>
            Castrado
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Sim
          </Typography>
        </Grid>
        <Grid sm={6} md={3}>
          <Typography variant="body2" sx={{ color: 'black', opacity: 0.5 }}>
            Especie
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Canino
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}