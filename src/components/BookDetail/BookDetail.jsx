import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredList } from "../../utility/addToDB";

const BookDetail = () => {
  const { bookId: currentBookId } = useParams();

  const data = useLoaderData();

  const clickedBook = data.find(
    (book) => book.bookId === parseInt(currentBookId)
  );

  const {
    image,
    bookName,
    author,
    review,
    category,
    tags,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
  } = clickedBook;

  const handleReadList = () => {
    addToStoredList(currentBookId, "read-list");
  }
  const handleWishList = () => {
    addToStoredList(currentBookId, "wish-list");
  }

  return (
    <div
      className="card lg:card-side py-5
     mb-6 rounded-2xl gap-10"
    >
      <figure className="p-[70px] lg:w-4/12 bg-[rgba(19,19,19,0.05)] rounded-2xl">
        <img className="skew-y-6" src={image} alt="Album" />
      </figure>
      <div className="lg:w-8/12 text-[rgba(19,19,19)]">
        <h2 className="card-title text-4xl font-bold mb-4">{bookName}</h2>
        <p className="text-xl font-medium opacity-80">By : {author}</p>
        <p className="border-b my-5"></p>
        <p className="font-medium text-xl opacity-80">{category}</p>
        <p className="border-b my-5"></p>
        <p className="font-bold">
          Review: <span className="font-medium opacity-70"> {review}</span>
        </p>
        <div className="flex gap-3 mt-6">
          <p className="font-bold">Tag</p>
          {tags.map((tag, i) => (
            <p key={i} className="font-medium text-[rgba(35,190,10)]">
              #{tag}
            </p>
          ))}
        </div>
        <p className="border-b my-5"></p>

        <div className="flex gap-14 mb-7">
          <div className="text-[rgba(19,19,19,0.7)] flex flex-col gap-3">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="text-[rgba(19,19,19)] font-semibold flex flex-col gap-3">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>

        <div className="card-actions flex gap-5 text-lg font-semibold">
          <button
            onClick={handleReadList}
            className="btn btn-primary border border-[rgba(19,19,19,0.3)] px-5 py-4"
          >
            Read
          </button>
          <button
            onClick={handleWishList}
            className="btn btn-primary border border-[rgba(19,19,19,0.3)] px-5 py-4 bg-[rgba(80,177,201,1)] text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
