import React from 'react'
import Book from '../Book/Book'

const Books = ({ data }) => {

  return (
    <div className='w-11/12 mx-auto flex-1'>
      <h1 className='text-5xl font-extrabold text-center my-5'>Books</h1>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10'>
        {data.map((singleBook) => <Book singleBook={singleBook}></Book>)}
      </div>
    </div>
  )
}

export default Books