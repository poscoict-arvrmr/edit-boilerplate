// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Mymenu.css';

export default class Mycamera extends Component {
  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/menu">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <div className={styles.container} data-tid="container">
          <h2>Camera Page</h2>
          <p>Take a Photo</p>
          <p>Record a Video</p>
          <p>Motion Capture</p>
        </div>
      </div>
    );
  }
}