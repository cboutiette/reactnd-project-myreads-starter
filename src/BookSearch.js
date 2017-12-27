import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'
import {Debounce} from 'react-throttle'


class BookSearch extends Component {
    static propTypes = {
        onUpdateBookshelves: PropTypes.func.isRequired,
        currentBooks: PropTypes.array.isRequired
    }

    state = {
        query: "",
        resultingBooks: []
    }

    updateQuery = (query) => {
        this.setState({query: query}, () => {
            if(query !== "")
            {
                BooksAPI.search(query).then((resultingBooks) => {
                    console.log({query})
                    if (!resultingBooks.error) {
                        const { currentBooks } = this.props

                        // First iterate through each currentBook
                        // Find the book with the same id
                        // If the ID is a match then do an object assign to the resulting books array
                        var merged = resultingBooks.map(rBook => currentBooks.find(cBook => cBook.id === rBook.id ) || rBook)

                        console.log("Response is OK")
                        console.log({merged})
                        this.setState({resultingBooks: merged})
                    }
                    else{
                        console.log("Response is not OK")
                        console.log({resultingBooks})
                        this.setState({resultingBooks: []})
                    }
                })
            }
            else{
                console.log("Empty query")
                this.setState({resultingBooks: []})
            }
        })
    }

    render() {
        const {resultingBooks} = this.state
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

                        {/*
                            Here I debounce the input to prevent overcalling the search function
                        */}

                        <Debounce time="400" handler="onChange">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </Debounce>

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