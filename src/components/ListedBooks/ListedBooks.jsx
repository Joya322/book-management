import { IoIosArrowDown } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredList } from "../../utility/addToDB";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishListBooks/WishListBooks";

const ListedBooks = () => {
  const allBooks = useLoaderData();

  const [readListBooks, setReadListBooks] = useState([]);

  const [wishListBooks, setWishListBooks] = useState([]);

  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    // readList
    const storedReadList = getStoredList("read-list");

    const readList = allBooks.filter((book) =>
      storedReadList.includes(String(book.bookId))
    );

    setReadListBooks(readList);

    // wish list
    const storedWishList = getStoredList("wish-list");

    const wishList = allBooks.filter((book) =>
      storedWishList.includes(String(book.bookId))
    );

    setWishListBooks(wishList);
  }, []);

  const handleSortBy = (sortType) => {
    setSortBy(sortType);
    // sortBy Rating
    if (sortType === "Rating") {
      // sortedReadListBooks
      const sortedReadListBooks = [...readListBooks].sort(
        (a, b) => b.rating - a.rating
      );

      setReadListBooks(sortedReadListBooks);

      // sortedWishListBooks
      const sortedWishListBooks = [...wishListBooks].sort(
        (a, b) => b.rating - a.rating
      );
      setWishListBooks(sortedWishListBooks);
    }

    // sortBy Number of pages
    else if (sortType === "Number of pages") {
      // sortedReadListBooks
      const sortedReadListBooks = [...readListBooks].sort(
        (a, b) => b.totalPages - a.totalPages
      );

      setReadListBooks(sortedReadListBooks);

      // sortedWishListBooks
      const sortedWishListBooks = [...wishListBooks].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setWishListBooks(sortedWishListBooks);
    }

    // sortBy Publisher year
    else if (sortType === "Publisher year") {
      // sortedReadListBooks
      const sortedReadListBooks = [...readListBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );

      setReadListBooks(sortedReadListBooks);

      // sortedWishListBooks
      const sortedWishListBooks = [...wishListBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setWishListBooks(sortedWishListBooks);
    }
  };

  return (
    <div className="pt-4 pb-8">
      <h2 className="text-3xl text-center py-5 bg-gray-200 rounded-2xl">
        Listed books
      </h2>

      {/* dropdown button */}
      <details className="dropdown flex justify-center">
        <summary className="btn my-6 bg-[rgba(35,190,10,1)] text-white font-medium text-center pt-2">
          {sortBy ? `Sort By: ${sortBy}` : "Sort By"}
        </summary>
        <ul className="menu dropdown-content bg-gray-200 rounded-box z-[1] w-52 p-2 shadow top-10 ml-3">
          <li>
            <a onClick={() => handleSortBy("Rating")}>Rating</a>
          </li>
          <li>
            <a onClick={() => handleSortBy("Number of pages")}>
              Number of pages
            </a>
          </li>
          <li>
            <a onClick={() => handleSortBy("Publisher year")}>Publisher year</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-8">
            {readListBooks.map((book) => (
              <ReadBooks book={book} key={book.bookId}></ReadBooks>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-8">
            {wishListBooks.map((book) => (
              <WishListBooks book={book} key={book.bookId}></WishListBooks>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
