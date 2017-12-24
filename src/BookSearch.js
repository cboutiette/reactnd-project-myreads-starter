import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'

class BookSearch extends Component {
    static propTypes = {
        onUpdateBookshelves: PropTypes.func.isRequired
    }

    state = {
        query: "",
        resultingBooks: []
    }

    componentDidMount(){
        BooksAPI.search(this.state.query).then((resultingBooks) => {
            if(resultingBooks)
            {
                console.log("Got some books")
                console.log({resultingBooks})
                this.setState({resultingBooks})
            }
            else{
                console.log("NO BOOKS FOUND")
            }
        })
    }

    updateQuery = (query) => {
        this.setState({query: query})
    }

    render() {
        const { query, resultingBooks } = this.state
        const {onUpdateBookshelves} = this.props

        resultingBooks.sort(sortBy('title'))

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid
                        books={resultingBooks}
                        onUpdateBookshelves={onUpdateBookshelves}
                    />
                </div>
            </div>
        )
    }
}

export default BookSearch