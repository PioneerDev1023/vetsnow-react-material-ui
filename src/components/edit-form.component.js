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
import { grid, height } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import CheckOutlined from '@mui/icons-material/CheckOutlined';


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
    <Box sx={{ display: 'flex', bgcolor: 'white' }}> 
            
      <Main open={open}>
        
      <Typography variant="h6" gutterBottom>
          Dados do paciente
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              fullWidth
              id="firstName"
              label="Nome"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Especie</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={'Especie'}
                  label="Especie"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Raca</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={'Age'}
                  label="Raca"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              fullWidth
              id="firstName"
              label="Cor"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="lastName"
              label="Anniversario"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="email"
              label="Micrhochip"
              name="email"
              autoComplete="email"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ color: 'black', opacity: 0.5 }}>Sexo</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
              <FormGroup aria-label="position" row>
                <FormControlLabel value="female" control={<Radio color="success" />} label="Femeo" />
                <FormControlLabel value="male" control={<Radio color="success" />} label="Macho" />
              </FormGroup>
              </RadioGroup>
            </FormControl>`
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControlLabel
              value="top"
              control={<Switch color="success" />}
              label="Castrado"
              labelPlacement="top"
            />
          </Grid>

          <Grid item xs={12} sm={12} sx={{ marginBottom: 5 }} >
            <TextField
              label="Observacoes"
              id="outlined-size-small"
              fullWidth
              inputProps={{
                style: {
                  height: 150
                }
              }}                            
            />
          </Grid>
        </Grid>        

        <Grid container
            direction="row"
            justifyContent="flex-end"
            alignItems="center" item xs={12}
          >
            <Button startIcon={<CancelOutlined />} variant="text" sx={{ marginRight: 3, borderRadius: 10, color: 'black'  }} >Canceler</Button>
            <Button  startIcon={<CheckOutlined />} variant="contained" sx={{ borderRadius: 10, bgcolor: '#482880'  }}>
              Salvar
            </Button>
        </Grid>

      </Main>
    </Box>
  );
}