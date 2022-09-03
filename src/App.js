import React, { Component } from 'react'
import MyCard from './MyCard.jsx';
import './App.css';
import MyProjects from './MyProjects.jsx';
export default class App extends Component {
  render() {
    return (<><div className='Row'><MyCard /><MyProjects/></div></>);
  }
}
