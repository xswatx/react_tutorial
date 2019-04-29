import React,{Component, Fragment} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  primary: {
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884',
    contrastText: '#fb8c00'
  },
  secondary: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    contrastText: '#000'
  },
  typography: { useNextVariants: true },
});


class App extends Component{
  constructor(props){
    super(props);
    this.state ={result:''};
  }

  render(){
  function load(){
    return(
      axios.get('http://localhost:4300/api/get')
      .then(res =>{
        document.getElementById('get_output').innerHTML=res.data.result;
      })
    );
  }

  function load1(){
    return(
      axios.post('http://localhost:4300/api/post')
      .then(res =>{
        document.getElementById('post_output').innerHTML=res.data.result;
      })
    );
  }
  const style={
    backgroundColor:'black',
    padding:'16px',
    color:'white',
    fontSize:'12px',
    textAlign:'center'
  };

  return(
    <MuiThemeProvider theme={theme}>
    <Fragment>
      <div  style={style}>
    <h1>ajax test</h1>
    <div>
        <h2>GET</h2>
        <Button id='getMethod' variant="contained" color="primary" onClick={load}>GET</Button>
        <p id='get_output'>
        </p>
    </div>
    <div>
        <h2>POST</h2>
        <div>
            <Button id='postMethod' variant="contained" color="secondary" onClick={load1}>POST</Button>
        </div>
        <p id='post_output'>
        </p>
    </div>
    </div>
    </Fragment>
    </MuiThemeProvider>
  );
}

}

export default App;
