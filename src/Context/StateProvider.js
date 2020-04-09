import React, { createContext, useReducer } from 'react';

const intialState = [];
const store = createContext(intialState);
const { Provider } = store;

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_ITEM':
            return [...state, payload];

        case 'COMPLETED_ITEM':
            const newState = state.map((i) => {
                if (payload.id === i.id) {
                    i.done = payload.done;
                    console.log("after modification", i.done);
                }
                return i;
            });
            return newState;
        default:
            throw new Error();
    };
}

const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState);

    return <Provider value={{ state, dispatch }}> {children} </Provider>
}

export { store, StateProvider };