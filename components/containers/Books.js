import React from 'react'
import { getState } from 'redux';

import BookCard from '../presentationals/BookCard';

//Provider/Container React Component

class Books extends React.Component {
    render() {
        const stateProps = this.props.store.getState();
        console.log(stateProps);

        return (
            <div className="books-container">
                <BookCard stateProps = { stateProps }/>
            </div>
        )
    }
}

export default Books