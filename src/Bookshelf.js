import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookshelfTitle: PropTypes.string.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    render() {
        const {books, bookshelfTitle, updateBookShelf, } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((b) => (
                            <li key={b.id}><Book
                                book={b}
                                updateBookshelf={updateBookShelf}
                            /></li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf