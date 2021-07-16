import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class  Root extends Component{
  render(){
    return(
      <App/>
    )
  }
}
  
 let root= document.getElementById('root');
ReactDOM.render(Root,root);

reportWebVitals();
