import React from 'react'

const Banner = ({ data }) => {
    console.log(data)
    const book = data.find((book) => book);
    const {bookName , bookId , image, author , review} = book ;
    console.log(book)

    return (
            <div className="hero-content shadow-2xl h-[80vh] my-20 rounded-2xl justify-around  px-10 gap-10 flex-col lg:flex-row-reverse">
                <div className=' flex justify-center items-center'>
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl h-75"
                />
                </div>
                <div className='text-center'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <button className="btn btn-primary bg-green-500 border-none my-4">View The List</button>
                </div>
            </div>
    )
}

export default Banner