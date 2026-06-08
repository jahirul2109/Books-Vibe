import React from 'react'

const WishList = ({book , handleRemoveWish}) => {
    const { bookId, bookName, image, author, review, rating, pages, category, publisher, tags, totalPages, yearOfPublishing } = book;
    return (
        <div className="hero bg-base-200 h-fit relative">
            <div className="hero-content  flex-col-reverse lg:flex-row-reverse ">
                <img
                    src={image}
                    className="w-20  rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div>
                        <button className="btn btn-primary" onClick={()=> {handleRemoveWish(bookId)}} >Remove wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList