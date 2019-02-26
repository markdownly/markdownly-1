REDUX
Devtools add this as second arg to createStore:
```
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```
Redux gives us a global object where all state lives. This object is called our store.

actions -> change state -> get state

Redux methods
```
store.getState()
store.dispatch()
store.subscribe()
```

In REACT - updating view subscribe and unsubscribe:
```
componentDidMount() {
  this.updateState();
  const unsubscribe = store.subscribe(() => {
    this.updateState();
  })
  this.setState({ unsubscribe });
}

componentWillUnmount() {
  this.state.unsubscribe();
}
```

```
Import { createStore } from ‘redux’;

const CREATE_CHEESE_PIZZA = 'CREATE_CHEESE_PIZZA'

Const initialState = {
  Cheese: [ ],
  Pepperoni: [ ]
}
```

Reducer

Always pass an action a type so it knows what it is...can also pass a payload

Switch looks at action.type and finds the first one that matches but order doesn't matter because it's an entire match

```
Function reducer(state = initialState, action) {
  switch(action.type) {
  case CREATE_CHEESE_PIZZA:
    return { 
      ...state, // original state
      cheese: [ 
        ...state.cheese, 
        { name: 'cheese', ...action.payload }
      ] // added to state
    }
  } 
  default:
    return state;
}

const store = createStore(reducer); 
```

Dispatch an action - triggers an event with Action creators
```
store.dispatch({
  type: 'CREATE_CHEESE_PIZZA',
  payload: { size: '18' }
})

refactors to --->

const createCheesePizza = size => ({
  type: CREATE_CHEESE_PIZZA,
  paload: { size }
})

store.dispatch(createCheesePizza(10))
```
Takes a reducer to update store overtime
Store.getState() will get the current state of state each time
```
store.getState( ));

// Return all cheese
const cheesePizzas = state => state.cheese;

// Return only large cheese
const largeCheesePizzas = state => {
  return cheesePizzas(state).filter(pizza => pizza.size > 14)
}

cheesePizzas(store.getState())
```

Testing: Reducer

```
import reducer from './pizza';
import { createCheesePizza } from '../actions/pizza';

describe('pizza reducer', () => {
  it('can handle creating a cheese pizze', () => {
    const state = {
      cheese: []
    };

    const action = createCheesePizza(14);
    const updatedState = reducer(state, action);

    expect(updatedState.cheese).toContainEqual({ 
      name: 'cheese',
      size: '14'
      })
    expect(updatedState.cheese)toHaveLength(1)
    expect(updatedState.pepperoni).toEqual([])
  })
})
```
Testing: Selectors
```
import { cheesePizza } from './pizza'

describe('pizza selectors', () => {
  it('selects only cheese pizzas', () => {
    const state = {
      pizza: {
        cheese: [
          {name: 'cheese', size: '14'},
          {name: 'cheese', size: '14'},
          {name: 'cheese', size: '14'}
        ],
        pepperoni: []
      }
    }

    const selectedCheesePizza = cheesePizzas(state);
    expect(selectedCheesePizzas).toEqual([
      {name: 'cheese', size: '14'},
      {name: 'cheese', size: '14'},
      {name: 'cheese', size: '14'}
    ])
  })
})
```
Testing: Actions
```
import { createCheesePizza, CREATE_CHEESE_PIZZA } from './pizza';


describe('pizza action creators', () => {
  it('can create a cheese pizza action', () => {
    const action = createCheesePizza(14);

    expect(action).toEqual({
      type: CREATE_CHEESE_PIZZA,
      payload: { size: 14 }
    })
  })
})
```
Using with react:
```
import store and selectors { getCheesePizzas }

state = {
  pizzas: []
}

componentDidMount() {
  this.setState({ 
    pizzas: getCheesePizzas(store.getState())
  })
}

render() {
  return (
    <Pizzas pizzas={this.state.pizzas} />
  )
}
```