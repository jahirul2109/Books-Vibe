import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { CiStar } from "react-icons/ci";
import { addItem, getItem } from '../../storeDB/localStoreDB';
import { addItemWish, getItemWish } from '../../storeDB/wishListDB';

const BookDatails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const bookData = data.find((b) => b.bookId == id);
    const { bookId, bookName, image, author, review, rating, pages, category, publisher, tags, totalPages, yearOfPublishing } = bookData;
    const [disableBtn, setDisableBtn] = useState(getItem().includes(bookId));
    const [disableWish, setDisableWish] = useState(getItemWish().includes(bookId));
    const handelRead = () => {
        setDisableBtn(true)
        addItem(bookId)
    }
    const handleWishList = () => {
        addItemWish(bookId)
        setDisableWish(true)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <title>{bookName}</title>
            <div className="hero-content flex-col lg:flex-row">
                <div className='bg-taupe-300 overflow-hidden  py-6 w-5/12 rounded-2xl max-h-svh relative flex justify-center items-center'>
                    <img
                        src={image}
                        className=" rounded-lg object-cover h-130 shadow-2xl"
                    />
                </div>
                <div className='flex flex-col justify-between max-h-svh relative w-7/12 '>
                    <div className='border-b-2 mb-4'>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6 text-xl">
                            By Author {author}
                        </p>
                    </div>
                    <div className='border-b-2 '>
                        <p className='text-gray-300 font-semibold mb-10'>{category}</p>
                        <p className='text-xs'>
                            <span className='font-bold'>Review :</span>
                            {review}
                        </p>
                        <h1 className='font-bold flex gap-3 items-center my-2 mx-3'>Tag
                            {tags.map(tag => <button className='btn text-xs rounded-full '>#{tag}</button>)}
                        </h1>
                    </div>
                    <div className='flex gap-20 my-6'>
                        <div className='text-gray-300'>
                            <h1> Number Of Pages:</h1>
                            <h1> Publisher: </h1>
                            <h1> Year Of Publishing: </h1>
                            <h1> Rating: </h1>
                        </div>
                        <div>
                            <h1>{totalPages}</h1>
                            <h1>{publisher}</h1>
                            <h1>{yearOfPublishing}</h1>
                            <h1>{rating} </h1>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <button className="btn btn-primary"
                            disabled={disableBtn}
                            onClick={handelRead}>Read</button>
                        <button className="btn btn-primary"
                            disabled={disableWish}
                            onClick={handleWishList}>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDatails