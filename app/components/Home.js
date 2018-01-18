// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import { Button, TextInput } from 'react-desktop/macOs';

console.log("Home.js");

export default class Home extends Component {
  handleChange = e => console.log(e.target.value);
  handleClick = () => {
    console.log('this is:', this);
  }
  render() {
    return (    
      <div>
        <div className={styles.container} data-tid="container">
          <h2>LOG-IN</h2>
          <TextInput
            label="ID"
            placeholder="type your ID"
            defaultValue=""
            onChange={this.handleChange}
            width="300"
          />
          <TextInput
            label="Password"
            placeholder="type your PW"
            defaultValue=""
            onChange={this.handleChange}
            width="300"
          />
          <Button color="blue" onClick={(e) => this.handleClick(e)}>
          log-in
          </Button>
          
          <Button color="blue" onClick={() => console.log('lets sign up !')}>
          sign up
          </Button>
          <Button color="blue" onClick={() => console.log('Clicked!')}>
          <Link to="/menu">Go to Menu</Link></Button>
        </div>
      </div>
    );
  }
}
