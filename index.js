const redux = require('redux');

const createStore = redux.createStore;

const BUY_CAKE = 'buy cake';

const buyCake = () => ({
    type: BUY_CAKE,
    info: 'gibe me da cake bouse!'
});

const intialState = {
    numOfCakes: 10
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        };

        default: return state;
    }
}

const store = createStore(reducer);

const unsbscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsbscribe();