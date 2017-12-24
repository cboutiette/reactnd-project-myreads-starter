import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

/**
 * BookCase will be the area that contains all of the book shelves
 * in addition to books.
 */
class Bookcase extends Component
{
    // ProtoTypes here
    static propTypes = {
        books: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        onUpdateBookshelves: PropTypes.func.isRequired
    }

    render() {
        const {books, name, onUpdateBookshelves} = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>{name}</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf
                            books={books.filter(b => b.shelf === "currentlyReading")}
                            bookshelfTitle="Currently Reading"
                            onUpdateBookshelves={onUpdateBookshelves}
                        />
                        <Bookshelf
                            books={books.filter(b => b.shelf === "wantToRead")}
                            bookshelfTitle="Want To Read"
                            onUpdateBookshelves={onUpdateBookshelves}
                        />
                        <Bookshelf
                            books={books.filter(b => b.shelf === "read")}
                            bookshelfTitle="Read"
                            onUpdateBookshelves={onUpdateBookshelves}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Bookcase