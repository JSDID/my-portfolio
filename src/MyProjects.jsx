import AboutProject01 from './Projects/AboutProject01';
import AboutProject02 from './Projects/AboutProject02';

import React, { Component } from 'react'

export default class MyProjects extends Component {
  render() {
    return (
      <>
        <h1 className='Info__title'>Мої проекти</h1>
        <div className="Projects__row">
          <AboutProject01 />
          <AboutProject02 />
        </div>
      </>
    )
  }
}
