// reduxToolkit 
import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/reduxIndex";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(3));   // {type: some_UNIQUE_IDENIFIER, payload: 3} 
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementBy5Handler = () => {
    dispatch(counterActions.incrementBy5());
  };

  const decrementBy5Handler = () => {
    dispatch(counterActions.decrementBy5());
  };

  const incrementBy2Handler = () => {
    dispatch(counterActions.incrementBy2(2));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increse By 3</button>
        <button onClick={incrementBy2Handler}>Increment By 2</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy5Handler}>Increment By 5</button>
        <button onClick={decrementBy5Handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// // redux //
// import { useDispatch, useSelector } from "react-redux";
// import classes from "./Counter.module.css";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);

//   const toggleCounterHandler = () => {
//     dispatch({ type: "toggle" });
//   };
//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };

//   const increaseHandler = () => {
//     dispatch({ type: "increase", amount: 3 });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };
//   const incrementBy5Handler = () => {
//     dispatch({ type: "incrementBy5" });
//   };

//   const decrementBy5Handler = () => {
//     dispatch({ type: "decrementBy5" });
//   };

//   const incrementBy2Handler = () => {
//     dispatch({ type: "incrementBy2", amount: 2 });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increaseHandler}>Increse By 3</button>
//         <button onClick={incrementBy2Handler}>Increment By 2</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <div>
//         <button onClick={incrementBy5Handler}>Increment By 5</button>
//         <button onClick={decrementBy5Handler}>Decrement By 5</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;
