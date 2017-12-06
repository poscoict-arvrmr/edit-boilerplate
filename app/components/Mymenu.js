// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Mymenu.css';

export default class MyMenu extends Component {
  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        
        <div className={styles.container} data-tid="container">
          <h2>Menu Page</h2>
          <p>
          <Link exact to="/">Home</Link>
          </p>
          <p>
          <Link to="/myfiles">Files</Link>
          </p>
          <p>
          <Link to="/mycamera">Camera</Link>
          </p>
          <p>
          <Link to="/settings">Setting</Link>
          </p>
        </div>
      </div>
    );
  }
}