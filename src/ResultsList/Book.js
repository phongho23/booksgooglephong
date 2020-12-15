import React from 'react';

export default class Book extends React.Component {

    render() {
        const bookResult = this.props.books.map((book) => {

            return (
                <li key={book.id} onClick={() => { this.props.toggleHandler(book.id) }}>

                    {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="bookThumbnail"></img> : <img alt="bookThumbnail"></img>}

                    {book.volumeInfo.title ? <h3>{book.volumeInfo.title}</h3> : <h3>No Title</h3>}

                    {book.volumeInfo.description && book.show ? <p>{book.volumeInfo.description}</p> : <></>}

                    {book.volumeInfo.authors && book.show ? <p>Authors:{book.volumeInfo.authors.join(' ')}</p> : <></>}

                    {book.saleInfo.listPrice && book.show ? <p>Price:{book.saleInfo.listPrice.amount}</p> : <></>}
                </li>
            )
        })
        return (
            <>
                {bookResult}
            </>
        )
    }
}