import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, bookId, author, rating, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-full shadow-xl p-6 border border-[rgba(19,19,19,0.15)]">
        <figure className="bg-[rgba(243,243,243,1)] py-8 rounded-2xl">
          <img className="h-[250px] -skew-y-12" src={image} alt={bookName} />
          {/* <img className="-skew-y-12" width="150px" height="166px" src={image} alt="Book image" /> */}
        </figure>
        <div className="card-body text-[rgba(19,19,19)] font-medium">
          <div className="flex gap-5">
            {tags.map((tag, i) => (
              <button
                key={i}
                className="btn bg-[rgba(35,190,10,0.05)] text-[rgba(35,190,10,1)] px-3"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className="border-b border-dashed pb-5 border-[rgba(19,19,19,0.15)] opacity-80">
            By : {author}
          </p>
          <div className="card-actions justify-between opacity-80">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <CiStar className="text-base text-[rgba(66,66,66,1)]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
