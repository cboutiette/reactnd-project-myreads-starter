import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

import sortBy from 'sort-by'

class Bookshelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookshelfTitle: PropTypes.string.isRequired,
        onUpdateBookshelves: PropTypes.func.isRequired
    }

    render() {
        const {books, bookshelfTitle, onUpdateBookshelves, } = this.props
        books.sort(sortBy('title'))

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <BooksGrid
                        onUpdateBookshelves={onUpdateBookshelves}
                        books={books}
                    />
                </div>
            </div>
        )
    }
}

export default Bookshelf