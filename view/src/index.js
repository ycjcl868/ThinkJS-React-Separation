import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Router, Route, Link, hashHistory} from 'react-router'
import { Provider, connect } from 'react-redux'

import { counter } from './reducers'
import Counter from './components/Counter'
import Help from './components/Help'

const store = createStore(counter)


class App extends Component {
    componentDidMount() {
      store.subscribe(() =>
        this.forceUpdate()
      )
    }
    componentWillUnMount(){
      this.unsubscribe();
    }
    render () {
        return (
          <div>
            <h2>Hello React && ThinkJS</h2>
            <Counter 
            value={store.getState()} 
            onIncrement={() => 
              store.dispatch({ type: 'INCREMENT' })
            }
            onDecrement={() => 
              store.dispatch({ type: 'DECREMENT' })
            }        
            />
            <Link to='/help'>Help</Link>
          </div>
        );
    }
}

render(

  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/help' component={Help}></Route>
  </Router>,
  document.getElementById('app')
);
