import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Top50Option from './component/Option/Top50Option'
import Top10Call from './component/Option/Top10Call'
import Top10Put from './component/Option/Top10Put'
import ImpLink from './component/Option/ImpLink'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (

    <div className='App'>
      <div className='App-header'>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Top10Call />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Top10Put />
          </Grid>
          <Grid item xs={6} sm={3}>
            <ImpLink />
          </Grid>

          {/* <Grid item xs={12} sm={6}>
          <Top10Call />
        </Grid> */}
          <Grid item xs={12}>
            <Top50Option />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
