import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar/Navbar.js";
import Categories from "./components/Categories/Categories";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import Authors from "./components/Authors/Authors";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute";
import SignUp from "./components/Signup/SignUp";
import FullScreenDialog from "./components/Books/BookView";
import NewForm from "./components/profile/NewForm";

import NewBook from "./components/Books/newBook";
import Footer from "./components/footer/footer";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : undefined
  );

  const updateTokenHandler = (val, keep) => {
    console.log(keep);
    setToken(val.token);
    if (keep === true) {
      localStorage.setItem("token", val.token);
    }
    console.log(token);
    sessionStorage.setItem("token", val.token);
  };
  useEffect(() => {
    sessionStorage.setItem("token", token);
  }, [token]);

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <ResponsiveAppBar token={token}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home token={token} />} />
              <Route
                path="/categories"
                element={
                  <PrivateRoute>
                    <Categories />
                  </PrivateRoute>
                }
              />
              <Route
                path="/books"
                element={
                  <PrivateRoute>
                    <Books />
                  </PrivateRoute>
                }
              />
              <Route
                path="/bookprofile"
                element={
                  <PrivateRoute>
                    <NewBook />
                  </PrivateRoute>
                }
              />
              <Route
                path="/authors"
                element={
                  <PrivateRoute>
                    <Authors />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Profile"
                element={
                  <PrivateRoute>
                    <NewForm />
                  </PrivateRoute>
                }
              />
              <Route path="/Logout" element={<Login />} />
            </Routes>
          </div>
        </ResponsiveAppBar>
        <Routes>
          <Route
            path="/login"
            element={
              <Login updateTokenHandler={updateTokenHandler} />
              // <FullScreenDialog />
            }
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
// npm install && serve -s build
export default App;
// react-scripts start
