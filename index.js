import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import BooksApp from './reducers/BooksApp';
import Books from './components/containers/Books';

class App extends React.Component {
    render() {
        return (
            <div>
                <Books />
            </div>
        )
    }
}

//initialize store
let store = createStore(BooksApp);
console.log(store.getState());

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);