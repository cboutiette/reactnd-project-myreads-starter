import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookshelfTitle: PropTypes.string.isRequired
    }

    render() {
        const {books, bookshelfTitle} = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((b) => (
                            <li key={b.id}><Book
                                authors={b.authors}
                                coverUrl={'url("' + b.imageLinks.thumbnail + '")'}
                                title={b.title}
                            /></li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf