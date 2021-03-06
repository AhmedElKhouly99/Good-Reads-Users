import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CategoryIcon from "@mui/icons-material/Category";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Book from "../Books/book";
import Category from "../Categories/Category";
import Author from "../Authors/Author";
import FullScreenBook from '../Books/BookView';
const Bookmodal = React.memo(FullScreenBook);
export default function CategoryBooks({ categoryId }) {
  const [books, setBooks] = React.useState([]);
  const [openBook, setOpenBook] = useState({ open: false, book: undefined });
 
  console.log(categoryId);

  useEffect(() => {
    axios
      .get("https://good-reads-server.herokuapp.com/users/category", {
        params: {
          categoryId: categoryId,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

   if (books && (openBook != undefined)) {
    return (
      <>
        <div className="row justify-content-around">
          {books.map((book) => {
            return <Book book={book} setOpenBook={setOpenBook} />;
          })}
        </div>
        <Bookmodal openBook={openBook} />
      </>
    );
  }
}
