import React from 'react'

const Banner = ({ data }) => {
    console.log(data)
    const book = data.find((book) => book);
    const {bookName , bookId , image, author , review} = book ;
    console.log(book)

    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl h-75"
                />
                <div className='text-center'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <button className="btn btn-primary bg-green-500 border-none my-4">View The List</button>
                </div>
            </div>
        </div>
    )
}

export default Banner