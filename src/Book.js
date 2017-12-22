import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'

class  Book extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string).isRequired,
        coverUrl: PropTypes.string.isRequired
    }

    state = {
        bookStatus: "none" // Can be: None, Read, WantToRead, CurrentlyReading
    }

    render() {
        var {coverUrl, title, authors} = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover-image book-cover" style={{
                        width: 128,
                        height: 188,
                        backgroundImage:coverUrl
                    }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading
                            </option>
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