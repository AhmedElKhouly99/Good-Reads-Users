import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import CategoryBooks from "./CategoryView";

export default function Categories() {
  const [categories, setCategories] = useState(undefined);
  const [render, setRender] = React.useState({
    open: false,
    category: undefined,
  });
  // let categoryProvider = {};

  useEffect(() => {
    axios
      .get("https://good-reads-server.herokuapp.com/user/categories")
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (render.open == true) {
    console.log(render.category);
    return <CategoryBooks categoryId={render.category._id} />;
  } else {
    if (categories)
      return (
        <div className="row justify-content-around">
          {categories.map((cat) => {
            return <Category key={cat._id} cat={cat} setRender={setRender} />;
          })}
        </div>
      );
  }
}
