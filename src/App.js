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
                        <BookSearch
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
