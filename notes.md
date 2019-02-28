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
Setting up react-redux
npm i react-redux
in - index.js
```
import {Provider} from 'react-redux'
import store from 'store'

render(
  <Provider store={store}>
    <App />
  </Provider>
)
```
Now you can delete all the container-style code where we're listening to everything and actually convert container to presentational-component that will take props instead of hold state. Essentially it combines 2 presentational components now.

in component file use connect, partially applied curry function

use instead of class container
```
export default AllDogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dogs) <--pass component
```
Pass selectors to get state and return as props
non functional properties - use existing selectors
function that takes state and returns to component as props
Use instead of componentDidMount and Unmount
```
const mapStateToProps = state => ({
  name: getDogCreateName(state),
  age: getDogCreateAge(state),
  weight: getDogCreateWeight(state),
  dogs: getDogs(state)
})
```
Pass anything that needs to trigger an action - how actions work defined 
use instead of handleSubmit and handleChange
```
const mapDispatchToProps = dispatch => ({
  // figure out what's changing and dispatch depending on target 

  onChange({target}) {
    const factoryMethod = {
      name: updateName,
      age: updateAge,
      weight: updateWeight
    }

  dispatch(factoryMethod[target.name](target.value))
  }

  onSubmit(event) {
    event.preventDefault();
    const { name, age, weight } = props
    dispatch(addDog());
  }
})
```
Displaying a list item only needs an index