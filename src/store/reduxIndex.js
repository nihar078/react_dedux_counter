import { createStore } from "redux";

const initialState = {counter: 0, showCounter: true}
const counterReducer = (state = initialState, action)=>{
    if(action.type === "increment"){
        // //(unmuted this ..this can lead to debug)
        // state.counter++   //(unmuted this ..this can lead to debug)
        // return{
        //     counter : state.counter,
        //     showCounter: state.showCounter
        // }
        // (this is original state)
        return{
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === "increase" ){
        return{
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if(action.type === "incrementBy2"){
        return{
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if(action.type === "decrement"){
        return{
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === "incrementBy5"){
        return{
            counter : state.counter + 5,
            showCounter: state.showCounter
        }
    }
    if(action.type === "decrementBy5"){
        return{
            counter: state.counter - 5,
            showCounter: state.showCounter
        }

    }
    if(action.type === "toggle"){
        return{
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    return state
}

const store = createStore(counterReducer)

export default store