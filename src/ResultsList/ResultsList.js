import React from 'react';
import Book from './Book';

export default class ResultsList extends React.Component {
    render() {

        return (
            <div className="results-list">

                <b><h2>Results!</h2></b>

                <ul>
                    <Book books={this.props.books}
                        toggleHandler={this.props.toggleHandler} />
                </ul>

            </div>
        )
    }
}