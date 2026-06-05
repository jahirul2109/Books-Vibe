import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import Home from '../pages/Home/Home'
import Books from '../pages/Books/Books'
import BookDatails from '../pages/BookDatails/BookDatails'

const Routers = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('./books.json'),
                Component: Home
            },
            {
                path: 'books',
                Component: Books
            },
            {
                path: 'bookDatails/:id' ,
                loader : ()=> fetch ('../books.json'),
                Component : BookDatails
            }


        ]
    }
])


export default Routers