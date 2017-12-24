import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookGrid extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookshelves: PropTypes.func.isRequired
    }

    render() {
        const {books, onUpdateBookshelves} =  this.props

        return (
            <ol className="books-grid">
                {books.map((b) => (
                    <li key={b.id}><Book
                        book={b}
                        onUpdateBookshelves={onUpdateBookshelves}
                    /></li>
                ))}
            </ol>
        )
    }
}

export default BookGrid