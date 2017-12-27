import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import BookSearch from './BookSearch'
import Bookcase from "./Bookcase";


class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({books})
            console.log({books})
        })
    }

    /**
     * Here to reduce the double call to the API, I create a temp array of shelf and id
     * based on the update results and merge that with the existing books state.
     * @param book is the book you would like to update the shelf
     * @param shelf us the shelf you want to put the book onto
     */
    updateBookshelves = (book, shelf) => {
        BooksAPI.update(book, shelf).then((shelfWithBookIds) =>
            {
                console.log("Shelved Books:", {shelfWithBookIds})
                var currentBooks = this.state.books;

                // Check if book to add is none or doesn't exist
                if(shelf === "none"){
                    currentBooks = currentBooks.filter(b => b.id !== book.id)
                    console.log("Filterd out NONE books:", {currentBooks})
                }
                else{
                    currentBooks = currentBooks.find(b => book.id === b.id) ? currentBooks : currentBooks.concat(book)
                    console.log("Add to books:", {currentBooks})
                }

                var booksOnShelves = [
                    ...shelfWithBookIds["currentlyReading"].map(bookId => ({id: bookId, shelf: "currentlyReading"})),
                    ...shelfWithBookIds["wantToRead"].map(bookId => ({id: bookId, shelf: "wantToRead"})),
                    ...shelfWithBookIds["read"].map(bookId => ({id: bookId, shelf: "read"}))
                ]

                console.log("booksOnShelves:", {booksOnShelves})

                const merged = currentBooks.map(cb => Object.assign({}, cb, booksOnShelves.find(ub => ub.id === cb.id )) || cb)

                this.setState({books: merged})
            }
        )
    }

    render() {
        return (
            <div className="app">
                <Route
                    exact path="/search"
                    render={() => (
                        <BookSearch
                            currentBooks={this.state.books}
                            onUpdateBookshelves={this.updateBookshelves}
                        />
                    )}
                />

                <Route
                    exact path="/"
                    render={() => (
                        <Bookcase
                            books={this.state.books}
                            name="My Bookcase"
                            onUpdateBookshelves={this.updateBookshelves}
                        />
                    )}
                />
            </div>
        )
    }
}

export default BooksApp
