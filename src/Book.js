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

        /**
         *
         * This part made me so mad haha.  I didn't realize that there were books without authors...
         * Because there were it would throw an exception here without this line.
         *
         * I am guessing there is a better way to do this stuff.  Could you please provide me with some guidance here.
         */
        let authors = []
        if(book.authors){
            authors = book.authors
        }

        let currentShelf = "none"
        if(book.shelf){
            currentShelf = book.shelf
        }

        let title = "Not Available"
        if(book.title){
            title = book.title
        }

        // Your book "Time" does not have an image (thumbnail) ...
        let imageLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Mad_scientist.svg/1094px-Mad_scientist.svg.png"
        if(book.imageLinks && book.imageLinks.thumbnail){
            imageLink = book.imageLinks.thumbnail
        }

        const imageUrl = 'url("' +imageLink + '")'

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover-image book-cover" style={{
                        width: 128,
                        height: 188,
                        backgroundImage:imageUrl
                    }}></div>
                    <div className="book-shelf-changer">
                        <select value={currentShelf} onChange={this.updateBook}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                {authors.map((a, key) =>
                    <div key={key} className="book-authors">{a}</div>)}
            </div>
        )
    }
}

export default Book