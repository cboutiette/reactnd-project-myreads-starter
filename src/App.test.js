import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import Book from "./Book";

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
 **/

/**
 * This is a high level test that will verify that EVERYTHING
 * renders as expected
 */
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, div)
})

it('renders Book without crashing', () => {
    <Book
        className="book-cover book-title-image"
        title="sampleTitle"
        authors={["Author1", "Author2"]}
        coverUrl='url("https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjT-diHu57YAhUB6YMKHfgMB2oQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F39617671699188795%2F&psig=AOvVaw3G6gJUpHOC2U9jsUYJnNYb&ust=1514061045243693")'/>
})


