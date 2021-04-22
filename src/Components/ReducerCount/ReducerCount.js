import React, { useReducer } from 'react';

const initialState = {count: 0}

const countReducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [state, dispatch] = useReducer(countReducer, initialState);
    return (
        <div>
            <h1>This is reducer count: {state.count}</h1>
            <button onClick={()=> dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>Decrement</button>
        </div>
    );
};

export default ReducerCount;