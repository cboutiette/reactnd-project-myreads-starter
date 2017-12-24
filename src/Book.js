import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'

class  Book extends Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBookshelves: PropTypes.func.isRequired
    }


    updateBook = (event) => {
        this.props.onUpdateBookshelves(this.props.book, event.target.value)
    }

    render() {
        const {book} = this.props
        const imageUrl = 'url("' + book.imageLinks.thumbnail + '")'

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover-image book-cover" style={{
                        width: 128,
                        height: 188,
                        backgroundImage:imageUrl
                    }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={this.updateBook}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors.map((a, key) =>
                    <div key={key} className="book-authors">{a}</div>)}
            </div>
        )
    }
}

export default Book