import classes from "./NewForm.module.css";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
// import TextField from "@mui/material/TextField";
// import { Label } from "@mui/icons-material";
// import FileBase64 from "react-file-base64";
import "bootstrap/dist/css/bootstrap.min.css";
// import Moment from "moment";
// import { format } from "date-fns";

function NewForm() {
  const [sFirstName, setFirstName] = useState(true);
  const [sLastName, setLastName] = useState(true);
  const [sEmail, setEmail] = useState(true);
  const [sPassword, setPassword] = useState(true);
  const [sConfirmPassword, setConfirmPassword] = useState(true);
  const [sDOB, setDOB] = useState(true);
  const [sCountry, setCountry] = useState(true);
  const [sImage, setImage] = useState(true);
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpassRef = useRef();
  const dateRef = useRef();
  const countryRef = useRef();
  const imageRef = useRef();
  const [user, setUser] = useState({});

  function submitHandler(event) {
    event.preventDefault();

    const enteredFname = fnameRef.current.value;
    const enteredlname = lnameRef.current.value;
    const enteredemail = emailRef.current.value;
    const enteredpassword = passwordRef.current.value;
    // const enteredconfirmpass = confirmpassRef.current.value;
    const entereddate = dateRef.current.value;
    const enteredcountry = countryRef.current.value;
    const enteredimage = imageRef.current.value;
    const newData = {
      firstName: enteredFname,
      lastName: enteredlname,
      email: enteredemail,
      password: enteredpassword === "" ? undefined : enteredpassword,
      date_of_birth: entereddate,
      country: enteredcountry,
      image: enteredimage,
    };
    console.log(enteredpassword);
    axios
      .patch("https://good-reads-server.herokuapp.com/user", newData, {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    axios
      .get(`https://good-reads-server.herokuapp.com/user`, {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      })
      .then(function (response) {
        console.log(response.data);
        setUser(response.data);
        // console.log(format(dateValue, "yyyy-mm-dd"));
        // formatDate = user.date_of_birth.Moment().format("DD-MM-YYYY");
        // console.log(formatDate);
        // let userData = response.data.user;
        // setuser(response.data.data)
        // setNumPages(response.data.pages)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className={classes.myProfileDiv}>
        <img
          className={classes.myprofileimg}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Goodreads_logo.svg/1280px-Goodreads_logo.svg.png"
          alt="Logo"
        ></img>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="first">
            First Name
          </label>
          <input
            type="text"
            required
            id="first"
            ref={fnameRef}
            disabled={sFirstName}
            className={classes.myprofileinput}
            defaultValue={user.firstName}
          />
          <button
            onClick={() => {
              setFirstName(false);
            }}
            type="button"
            className={classes.myprofilebutton}
            id="first"
          >
            <img
              className={classes.myProfileIcon}
              src="edit.png"
              alt="Edit"
            ></img>
          </button>
        </div>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="last">
            Last Name
          </label>
          <input
            type="text"
            required
            id="last"
            ref={lnameRef}
            disabled={sLastName}
            className={classes.myprofileinput}
            defaultValue={user.lastName}
          />
          <button
            onClick={() => {
              setLastName(false);
            }}
            type="button"
            className={classes.myprofilebutton}
            id="last"
          >
            <img
              className={classes.myProfileIcon}
              src="edit.png"
              alt="Edit"
            ></img>
          </button>
        </div>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            required
            id="email"
            ref={emailRef}
            disabled={sEmail}
            className={classes.myprofileinput}
            defaultValue={user.email}
          />
          <button
            onClick={() => {
              setEmail(false);
            }}
            type="button"
            className={classes.myprofilebutton}
            id="email"
          >
            <img
              className={classes.myProfileIcon}
              src="edit.png"
              alt="Edit"
            ></img>
          </button>
        </div>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="password">
            Password
          </label>
          <input
            type="text"
            required
            id="password"
            ref={passwordRef}
            disabled={sPassword}
            className={classes.myprofileinput}
            placeholder="**********"
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="password"
            onClick={() => {
              setPassword(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="edit.png"
              alt="Edit"
            ></img>
          </button>
        </div>
        {/* <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="confirmpassword">
            Confirm Password
          </label>
          <input
            type="text"
            required
            id="confirmpassword"
            ref={confirmpassRef}
            disabled={sConfirmPassword}
            className={classes.myprofileinput}
            // defaultValue={user.password}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="confirmpassword"
            onClick={() => {
              setConfirmPassword(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1652713213~hmac=288a792c3a9a865c6305d6d8349c070a"
            ></img>
          </button>
        </div> */}
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="birth">
            Date Of Birth
          </label>
          <input
            type="date"
            required
            id="birth"
            ref={dateRef}
            disabled={sDOB}
            className={classes.myprofileinput}
            defaultValue="2000-01-01"
            // defaultValue={format(user.date_of_birth, "yyyy-mm-dd")}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="birth"
            onClick={() => {
              setDOB(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="edit.png"
              alt="Edit"
            ></img>
          </button>
        </div>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="country">
            Country
          </label>
          <input
            type="text"
            required
            id="country"
            ref={countryRef}
            disabled={sCountry}
            className={classes.myprofileinput}
            defaultValue={user.country}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="country"
            onClick={() => {
              setCountry(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="edit.png"
              alt="Edit"
            ></img>
          </button>
        </div>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="image">
            Image
          </label>
          <input
            type="string"
            id="image"
            ref={imageRef}
            disabled={sImage}
            className={classes.myprofileinput}
            defaultValue={user.image}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="image"
            onClick={() => {
              setImage(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="edit.png"
              alt="Edit"
            ></img>
          </button>
        </div>

        {/* <div className="chooseImage">
          <Label>Image </Label>
          <div className="input-group">
            <div className="custom-file">
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  // setImage(base64);
                }}
              />{" "}
            </div>
          </div>
        </div> */}

        {/* //.......................// */}
        <div className={classes.actions}>
          {/* <button id="update" className={classes.registerBtn}>
            <p className={classes.registerTxt}>Update</p>
          </button> */}
          <input
            type="submit"
            class="btn btn-outline-primary button-28 my-3 registerBtn"
            value="UPDATE"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default NewForm;
