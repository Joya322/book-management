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

  return (
    <div className="pt-4 pb-8">
      <h2 className="text-3xl text-center py-5 bg-gray-200 rounded-2xl">
        Listed books
      </h2>

      <div className="flex justify-center">
        <button className="btn bg-[rgba(35,190,10,1)] px-4 text-white font-medium mt-6">
          Sort By <IoIosArrowDown />
        </button>
      </div>

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
