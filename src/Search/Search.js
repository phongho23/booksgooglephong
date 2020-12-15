import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div className="search-area">
                <form className="searchForm"
                    onSubmit={event => {
                        event.preventDefault();
                        const printType = event.target.printType.value
                        const search = event.target.search.value
                        const bookType = event.target.bookType.value
                        this.props.apiAddress(search, bookType, printType)
                    }}>

                    <label htmlFor="search">
                        Search:
                    </label>

                    <input type="text" id="search" name="search">
                    </input>

                    <button type="submit">Search</button>

                    <br />

                    <label htmlFor="printType">Print Type: </label>
                    <select name="printType" id="printType">
                        <option value="all" defaultValue>All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>

                    <br />

                    <label htmlFor="bookType">Book Type: </label>
                    <select name="bookType" id="bookType">
                        <option value="all" defaultValue>No Filter</option>
                        <option value="full">Full</option>
                        <option value="ebooks">E-Books</option>
                        <option value="free-ebooks">Free E-Books</option>
                        <option value="paid-ebooks">Paid E-Books</option>
                        <option value="partial">Partial</option>
                    </select>
                </form>
            </div>
        )
    }
}