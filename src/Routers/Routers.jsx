import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import Home from '../pages/Home/Home'
import Books from '../pages/Books/Books'

const Routers = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path : '/',
                loader :()=> fetch ('./books.json'),
                Component : Home 
            } ,
            {
                path : 'books',
                Component : Books 
            }

        ]
    }
])


export default Routers