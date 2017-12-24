import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'


/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
 **/

/**
 * This is a high level test that will verify that EVERYTHING
 * renders as expected.
 * *
 * NOTE - I am currently getting local storage error because
 * it is not defined for testing.  After submission I would like to figure this out.
 * TODO: Figure out why I am getting a local storage error
 */
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, div)
})

