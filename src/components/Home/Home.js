import * as React from "react";
import PopularAuthors from "../Popular/PopularAuthors";
import PopularCategories from "../Popular/PopularCategories";
import PopularBooks from "../Popular/PopularBooks";
import VerticalTabs from "./TabPanel";

export default function Home({ token }) {
  if (!token) {
    return (
      <>
        <div
          className="row justify-content-center"
          style={{ marginTop: "10%" }}
        >
          <PopularAuthors />
          <PopularBooks />
          <PopularCategories />
        </div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "10%" }}
        >
          {/* <PopularAuthors /> */}
          {/* <PopularBooks /> */}
          {/* <PopularCategories /> */}
        </div>
      </>
    );
  }
  return <VerticalTabs></VerticalTabs>;
}
