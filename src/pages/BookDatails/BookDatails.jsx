import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router'

const BookDatails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const bookData = data.find((b) => b.bookId == id);
     const { bookId, bookName, image, author, review, rating, pages, category, publisher, tags, totalPages, yearOfPublishing } = bookData ;
    return (
            <div>
                <div className=" bg-base-100 flex flex-col h-full card   w-96 shadow-sm">
                    <figure className='bg-gray-400 border border-gray-900 py-8'>
                        <img
                            className='h-50'
                            src={image}
                            alt={bookName} />
                    </figure>
                    <div className="card-body flex-1">
                        <div>
                            {tags.map(tag => <button className='btn py-1 mx-1'>{tag}</button>)}
                        </div>
                        <div>
                            <h2 className="card-title text-2xl font-bold">
                                {bookName}
                            </h2>
                            <h4 className='text-xl font-semibold text-gray-400'>By : {author}</h4>
                        </div>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{category}</div>
                            <div className="badge badge-outline">
                                <h1>Rating</h1>
                                <span>Star</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BookDatails