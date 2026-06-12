import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import Home from '../pages/Home/Home'
import Books from '../pages/Books/Books'
import BookDatails from '../pages/BookDatails/BookDatails'
import Listed from '../pages/Listed'
import PageToread from '../pages/PageToRead/PageToread'
import Login from '../compontes/Header/Login'
import Registation from '../compontes/Header/Registation'

const Routers = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('../books.json'),
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
            } , 
            {
                path : "listed",
                loader: () => fetch('../books.json'),
                Component : Listed 
            } , 
            {
                path : 'pageRead',
                loader: () => fetch('../books.json'),
                Component : PageToread
            },
            {
                path : '/login',
                Component : Login 
            },
            {
                path : '/registation',
                Component : Registation 
            }

        ]
    }
])


export default Routers