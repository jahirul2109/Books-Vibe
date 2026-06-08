import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { getItem, removDB } from '../storeDB/localStoreDB';
import ListedBooks from './ListedBooks';

const Listed = () => {
    const [cart, setCart] = useState([])
    const loadData = useLoaderData();
    const getId = getItem();
    useEffect(()=> {
        const readlist = loadData.filter(book => getId.includes(book.bookId))
        setCart(readlist)
    }, [])
    const handelUnread = (id) => {
        const remning = cart.filter((book)=> book.bookId !== id);
        setCart(remning);
        removDB(id)
    }
    return (
        <div className='grid grid-cols-1 gap-4'>
            {cart.map(book => <ListedBooks key={book.bookId} handelUnread = {handelUnread} book={book}></ListedBooks>)}
        </div>
    )
}

export default Listed