import { configureStore } from '@reduxjs/toolkit'
import  coursesReducer  from './courses'


const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
        
    }
};

const persistedState = loadState();

const store = configureStore({
    reducer: {
        courses: coursesReducer,
    },
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveState({
        courses: store.getState().courses,
    });
});

export default store;
