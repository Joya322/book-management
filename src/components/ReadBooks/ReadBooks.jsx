import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdBook } from "react-icons/io";

const ReadBooks = ({ book }) => {
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
  } = book;
  
  return (
    <div
      className="card lg:card-side p-6
     mb-6 rounded-2xl gap-10 border border-[rgba(19,19,19,0.15)]"
    >
      <figure className="p-[30px] bg-[rgba(19,19,19,0.05)] rounded-2xl">
        <img className="skew-y-6 h-[170px]" src={image} alt="Album" />
      </figure>
      <div className="text-[rgba(19,19,19)] flex flex-col gap-4">
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p className="font-medium opacity-80">By : {author}</p>
        <div className="flex gap-3 items-center">
          <p className="font-bold">Tag</p>
          {tags.map((tag, i) => (
            <p
              key={i}
              className="font-medium text-[rgba(35,190,10)] bg-[rgba(35,190,10,0.05)] rounded-[30px] py-2 px-4"
            >
              #{tag}
            </p>
          ))}

          <p className="flex gap-1 justify-center items-center opacity-80">
            <CiLocationOn /> Year of Publishing: {yearOfPublishing}
          </p>
        </div>

        <div className="flex items-center gap-5 opacity-60">
          <p className="flex items-center gap-1">
            <FaUserGroup /> Publisher: {publisher}
          </p>
          <p className="flex items-center gap-1">
            <IoMdBook /> Pages: {totalPages}
          </p>
        </div>

        <p className="border-b"></p>

        <div className="flex gap-3">
          <div className="bg-[rgba(50,142,255,0.15)] text-[rgba(50,142,255,1)] rounded-[30px] py-2 px-5">
            Category: {category}
          </div>

          <div className="bg-[rgba(255,172,51,0.15)] text-[rgba(255,172,51,1)] rounded-[30px] py-2 px-5">
            Rating: {rating}
          </div>

          <button className="btn text-lg font-medium py-4 px-5 bg-[rgba(35,190,10,1)] text-white rounded-[30px]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
