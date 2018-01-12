// @flow
import type { counterStateType } from '../reducers/counter';

type actionType = {
  +type: string
};

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

//ACTION GENERATORS
export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: (action: actionType) => void, getState: () => counterStateType) => {
    const { counter } = getState();

    //if current state is even, stay same
    if (counter % 2 === 0) {
      return;
    }
    //otherwise increment + 1 and make odd to even number
    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
