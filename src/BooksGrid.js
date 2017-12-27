import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookGrid = ({books, onUpdateBookshelves}) => (
    <ol className="books-grid">
        {books.map((b) => (
            <li key={b.id}>
                <Book
                    book={b}
                    onUpdateBookshelves={onUpdateBookshelves}
                />
            </li>
        ))}
    </ol>
)

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookshelves: PropTypes.func.isRequired
}

export default BookGrid;