import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'


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

    updateBookshelves = (book, shelf) => {
        BooksAPI.update(book, shelf).then(
            BooksAPI.getAll().then((books) => {
                this.setState({books})
            })
        )
    }

    render() {
        return (
            <div className="app">
                <Route
                    exact path="/search"
                    render={() => (
                        <BookSearch/>
                    )}
                />

                <Route
                    exact path="/"
                    render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <div className="list-books-content">
                                <div>
                                    <Bookshelf
                                        books={this.state.books.filter(b => b.shelf === "currentlyReading")}
                                        bookshelfTitle="Currently Reading"
                                        updateBookShelf={this.updateBookshelves}
                                    />
                                    <Bookshelf
                                        books={this.state.books.filter(b => b.shelf === "wantToRead")}
                                        bookshelfTitle="Want To Read"
                                        updateBookShelf={this.updateBookshelves}
                                    />
                                    <Bookshelf
                                        books={this.state.books.filter(b => b.shelf === "read")}
                                        bookshelfTitle="Read"
                                        updateBookShelf={this.updateBookshelves}
                                    />
                                </div>
                            </div>
                            <div className="open-search">
                                <Link to="/search">Add a book</Link>
                            </div>
                        </div>

                    )}
                />
            </div>
        )
    }
}

export default BooksApp
