// // redux toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy2(state, action) {
      state.counter = state.counter + action.payload;
    },
    incrementBy5(state) {
      state.counter = state.counter + 5;
    },
    decrementBy5(state) {
      state.counter = state.counter - 5;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer},
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// // redux // //
// import { createStore } from "redux";

// const initialState = {counter: 0, showCounter: true}
// const counterReducer = (state = initialState, action)=>{
//     if(action.type === "increment"){
//         // //(unmuted this ..this can lead to debug)
//         // state.counter++   //(unmuted this ..this can lead to debug)
//         // return{
//         //     counter : state.counter,
//         //     showCounter: state.showCounter
//         // }
//         // (this is original state)
//         return{
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === "increase" ){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === "incrementBy2"){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === "decrement"){
//         return{
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === "incrementBy5"){
//         return{
//             counter : state.counter + 5,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === "decrementBy5"){
//         return{
//             counter: state.counter - 5,
//             showCounter: state.showCounter
//         }

//     }
//     if(action.type === "toggle"){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state
// }

// const store = createStore(counterReducer)

// export default store
