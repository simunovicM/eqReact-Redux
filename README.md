eqReact-Redux
=========================

Simple react-redux implementation library.

## Installation

### Using Create React App

To use eqReact-Redux with your React app, install it as a dependency:
```bash
# If you use npm:
npm install eqreact-redux

# Or if you use Yarn:
yarn add eqreact-redux
```

You'll also need to [install React-Redux](https://github.com/reduxjs/react-redux/blob/master/README.md).

## Usage

If it is confusing for you or you find it hard to use a React-Redux library then you should use eqReact-Redux library.

For start you will have to register store with eqreact-redux using setStore:

```bash
...
import { reducer, setStore } from 'eqreact-redux';

const store = createStore(reducer()); // or createStore(reducer(initialStateObject)) if you have an initial state object (e.g. { user: { name: 'John' } } )
setStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      ...
    </Provider>
  </React.StrictMode>,
  ...
);
```

To read from the store you have to connect your component with eqReact-Redux:
```bash
...
import React from 'react';
import { connect } from 'eqreact-redux';

const SomeComponent = (props) => {
  return <span>{(props.user || {}).name || 'User not set'}</span>; // or <span>{props.userName || 'User not set'}</span>
};

export default connect(SomeComponent); // or connect(SomeComponent, state => ({ userName: (state.user || {}).name })) if you want to connect just certain properties from the store
```

To write to the store you have to connect your component with eqReact-Redux:
```bash
...
import React from 'react';
import { connect } from 'eqreact-redux';

const SomeComponent = (props) => {
  ...
  useEffect(() => props.changeState(state => ({ user: { name: 'John' } })), []);
  // or inside the promise
  useEffect(() => {
    axios.get('products')
      .then(response => props.changeState(state => ({ products: response.data })));
	}, []);
  ...
};

export default connect(SomeComponent); // or connect(SomeComponent, state => ({ user: state.user, products: state.products })) if you want to connect just certain properties from the store
```

All this aplies to the class component as well (just use this.props there). Off course, it is possible to read and write to the store in the same component.

Enjoy!

## License

[MIT](LICENSE.md)
