// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';

class Counter extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  };

  render() {
    //added Link /myapps button below with /components/MyApps.js 
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
         
          <button className={styles.btn} data-tclass="btn">
            <Link to="/menu">
             <i className="fa fa-th fa-2x" />
            </Link>
          </button>
        
          <button className={styles.btn} data-tclass="btn">
            <Link to="/mycamera">
             <i className="fa fa-camera fa-2x" />
            </Link>
          </button>

          <button className={styles.btn} data-tclass="btn">
            <Link to="/myfiles">
              <i className="fa fa-folder-open-o fa-2x" />
            </Link>
          </button>

          <button className={styles.btn} onClick={decrement} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn">odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn">async</button>
        </div>
      </div>
    );
  }
}

export default Counter;
