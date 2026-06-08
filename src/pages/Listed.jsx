import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { getItem, removDB } from '../storeDB/localStoreDB';
import ListedBooks from './ListedBooks';
import { getItemWish, removDBWish } from '../storeDB/wishListDB';
import WishList from './PageToRead/WishList';

const Listed = () => {
    const [show ,setShow] = useState(true)
    const [wish , setWish]= useState([])
    const [cart, setCart] = useState([])
    const loadData = useLoaderData();
    const getId = getItem();
    const getWishList = getItemWish()
    useEffect(() => {
        const readlist = loadData.filter(book => getId.includes(book.bookId))
        setCart(readlist)
    }, [])

    useEffect(()=> {
        const wishList = loadData.filter(book=> getWishList.includes(book.bookId));
        setWish(wishList);
    }, [])


    const handelUnread = (id) => {
        const remning = cart.filter((book) => book.bookId !== id);
        setCart(remning);
        removDB(id)
    }
    const handleRemoveWish = (id)=> {
        const remaning = wish.filter(book=> book.bookId !== id);
        setWish(remaning);
        removDBWish(id)
    }
    return (
        <div>
            <title>HOME || Listed</title>

            <div className='bg-amber-400 flex justify-center items-center'>
                <button className={`btn ${show ? "btn-active bg-green-500" : ""}`} onClick={()=> {setShow(true)}}>Read list ({cart.length})</button>
                <button className={`btn ${show ? "" : "btn-active bg-green-500"}`} onClick={()=> {setShow(false)}}>Wish list({wish.length})</button>
            </div>
            
            <div className='grid grid-cols-1 gap-4'>
                {show ? cart.map(book => <ListedBooks key={book.bookId} cart = {cart} handelUnread={handelUnread} book={book}></ListedBooks>) : wish.map(book=> <WishList key={book.bookId} book = {book} handleRemoveWish = {handleRemoveWish}></WishList>) }
            </div>
        </div>
    )
}

export default Listed