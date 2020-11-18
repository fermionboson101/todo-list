const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
/*********************** action types *************************/
const BUY_CAKE = 'buy cake';
const BUY_ICE_CREAM = 'buy ice cream';
/*********************** action types *************************/

/*********************** action creators *************************/
const buyCake = () => ({
    type: BUY_CAKE,
    info: 'gibe me da cake bouse!'
});

const buyIceCream = () => ({
    type: BUY_ICE_CREAM,
    info: 'please give me the ice cream senpai.'
});
/*********************** action creators *************************/

/*********************** initial states *************************/
const intialCakeState = {
    numOfCakes: 10
};

const inialIceCreamState = {
    numOfIceCream: 20
};
/*********************** intitial states *************************/

/*********************** reducers *************************/
const cakeReducer = (state = intialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        };

        default: return state;
    }
}

const iceCreamReducer = (state = inialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream-1,
        }
        default: return state;
    }
}
/*********************** reducers *************************/

/*********************** combining reducers *************************/
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
/*********************** combining reducers *************************/

const store = createStore(rootReducer,applyMiddleware(logger));

const unsbscribe = store.subscribe(()=>{});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsbscribe();