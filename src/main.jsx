import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import BookDetail from "./components/BookDetail/BookDetail";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books/:bookId/",
          element: <BookDetail />,
          // worst way
          loader: () =>
            fetch("/book-management/booksData.json").then((res) => res.json()),
        },
        {
          path: "/listedbooks",
          element: <ListedBooks />,
          // worst way
          loader: () =>
            fetch("/book-management/booksData.json").then((res) => res.json()),
        },
        {
          path: "/pagestoread",
          element: <PagesToRead />,
        },
      ],
    },
  ],
  {
    basename: "/book-management/",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
