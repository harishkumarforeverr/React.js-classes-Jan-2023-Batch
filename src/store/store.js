import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
const initialData = [
  {
    name: "harish",
    job: "react.js",
    id: uuidv4(),
    age: "22",
  },
  {
    name: "kalyan",
    job: "angular.js",
    id: uuidv4(),
    age: "20",
  },
  {
    name: "dinesh",
    job: "javascript",
    id: uuidv4(),
    age: "22",
  },

  {
    name: "chandana",
    job: "python",
    id: uuidv4(),
    age: "17",
  },

  {
    name: "kumar",
    job: "react.js",
    id: uuidv4(),
    age: "22",
  },
  {
    name: "sharyana",
    job: "javascript",
    id: uuidv4(),
    age: "22",
  },

  {
    name: "shiva",
    job: "AI",
    id: uuidv4(),
    age: "22",
  },
];
function UserReducer(state = initialData, action) {
  switch (action.type) {
    case "ADD_UPDATED_DATA": 
      return action.payload;
    case "ADD_TODO": 
      return [action.payload, ...state];
    case "UPDTAE_TODO":
      const updatedState = state.map((obj) => {
        if (action.payload.id == obj.id) {
          return action.payload;
        }
        return obj;
      }); 
      return updatedState;
    default: 
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
  UserReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// javscript
// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1
