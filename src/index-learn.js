'use strict';

/* **************** 1. Actions **************** */
// Actions are payloads f information that send data from your application to your store.
// They are the only source of information for the store.
// You send them to the store using store.dispatch().

// Actions are plain JavaScript objects. Actions must have a type property that indicate
// the type of action being performed. Types should be typically defined as string constants.
// Other than type, the structure of an action object is really up to you.

// It's a good idea to pass as little data in each action as possible.

// Action creators are exactly that -- functions that create actions.

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  };
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter};
}


/* **************** 2. Reducers **************** */
// Actions describe the fact that something happened, but don't specify how the application's state
// changes in response. This is the job of a reducer.

// The reducer is a pure function that takes the previous state and an action, and returns the next state.
// It's very important that the reducer stays pure.
// Things you should never do inside a reducer:
//   * Mutate its arguments;
//   * Perform side effects like API calls and routing transitions;
//   * Calling non-pure functions, e.g. Date.now() or Math.random().
// Given the same arguments, it should calculate the next state and return it. No surprises.
// No side effects. No API calls. No mutations. Just a calculation.



