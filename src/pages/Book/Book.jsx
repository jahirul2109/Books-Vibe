import React from 'react'
import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router'

const Book = ({ singleBook }) => {
    const { bookId, bookName, image, author, review, rating, pages, category, publisher, tags, totalPages, yearOfPublishing } = singleBook
    return (
        <Link to={`/bookDatails/${bookId}`}>
            <div className=" bg-base-100 flex flex-col h-full card   w-96 shadow-sm">
                <figure className='bg-gray-400 border border-gray-900 py-8'>
                    <img
                        className='h-50'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="flex-1 flex flex-col card-body">
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
                            <h1>{rating}</h1>
                            <span> <CiStar></CiStar> </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Book