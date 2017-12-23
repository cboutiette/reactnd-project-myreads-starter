import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        bookshelfTitle: PropTypes.string.isRequired,
        books: PropTypes.arrayof(PropTypes.object).isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <!-- TODO: List of books goes here -->
                    </ol>
                </div>
            </div>
        )
    }
}