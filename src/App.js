// import Container from '@mui/material/Container';
// import AppBar from '@mui/material/AppBar';
// import Typography from '@mui/material/Typography';
// import Grow from '@mui/material/Grow';
// import Grid from '@mui/material/Grid';
import { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material"
import memories from "./components/images/memories.png"
import Posts from './components/Posts/Posts.js';
import Form from './components/Forms/Form';
import { useDispatch } from "react-redux"
import { getPosts } from "./actions/postActions";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getPosts())
  }, [dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">Memories </Typography>
          <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                <Grid item xs={12} sm={7}>
                    <Posts />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form />
                </Grid>
            </Grid>
          </Container>
      </Grow>

    </Container>
  );
}

export default App;
