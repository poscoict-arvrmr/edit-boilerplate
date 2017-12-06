// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

console.log("Home.js");

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>LOG-IN</h2>
          <Link to="/menu">Go to Menu</Link>
        </div>
      </div>
    );
  }
}
