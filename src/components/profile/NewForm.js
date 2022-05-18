import classes from "./NewForm.module.css";
import { useRef, useState } from "react";

function NewForm() {
  const [hamada, setHamada] = useState(true);
  const [hamada2, setHamada2] = useState(true);
  const [hamada3, setHamada3] = useState(true);
  const [hamada4, setHamada4] = useState(true);
  const [hamada5, setHamada5] = useState(true);
  const [hamada6, setHamada6] = useState(true);
  const [hamada7, setHamada7] = useState(true);
  const [hamada8, setHamada8] = useState(true);
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpassRef = useRef();
  const dateRef = useRef();
  const countryRef = useRef();
  const imageRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFname = fnameRef.current.value;
    const enteredlname = lnameRef.current.value;
    const enteredemail = emailRef.current.value;
    const enteredpassword = passwordRef.current.value;
    const enteredconfirmpass = confirmpassRef.current.value;
    const entereddate = dateRef.current.value;
    const enteredcountry = countryRef.current.value;
    const enteredimage = imageRef.current.value;
    const newData = {
      FirstName: enteredFname,
      LastName: enteredlname,
      Email: enteredemail,
      Password: enteredpassword,
      ConfirmPassword: enteredconfirmpass,
      DateOfBirth: entereddate,
      Country: enteredcountry,
      Image: enteredimage,
    };
    fetch("https://first-project-307f7-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      body: JSON.stringify(newData),
    });
  }
  // fetch(
  //   'https://first-project-307f7-default-rtdb.firebaseio.com/data.json'
  // )
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  /* <h1 className={classes.h1}>PROFILE</h1> */
  return (
    <div>
      <div className={classes.myProfileDiv}>
        <img
          className={classes.myprofileimg}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Goodreads_logo.svg/1280px-Goodreads_logo.svg.png"
        ></img>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="first">
            Fisrt Name
          </label>
          <input
            type="text"
            required
            id="first"
            ref={fnameRef}
            disabled={hamada}
            className={classes.myprofileinput}
          />
          <button
            onClick={() => {
              setHamada(false);
            }}
            type="button"
            className={classes.myprofilebutton}
            id="first"
          >
            <img
              className={classes.myProfileIcon}
              src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1652713213~hmac=288a792c3a9a865c6305d6d8349c070a"
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
            disabled={hamada2}
            className={classes.myprofileinput}
          />
          <button
            onClick={() => {
              setHamada2(false);
            }}
            type="button"
            className={classes.myprofilebutton}
            id="last"
          >
            <img
              className={classes.myProfileIcon}
              src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1652713213~hmac=288a792c3a9a865c6305d6d8349c070a"
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
            disabled={hamada3}
            className={classes.myprofileinput}
          />
          <button
            onClick={() => {
              setHamada3(false);
            }}
            type="button"
            className={classes.myprofilebutton}
            id="email"
          >
            <img
              className={classes.myProfileIcon}
              src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1652713213~hmac=288a792c3a9a865c6305d6d8349c070a"
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
            disabled={hamada4}
            className={classes.myprofileinput}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="password"
            onClick={() => {
              setHamada4(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1652713213~hmac=288a792c3a9a865c6305d6d8349c070a"
            ></img>
          </button>
        </div>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="confirmpassword">
            Confirm Password
          </label>
          <input
            type="text"
            required
            id="confirmpassword"
            ref={confirmpassRef}
            disabled={hamada5}
            className={classes.myprofileinput}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="confirmpassword"
            onClick={() => {
              setHamada5(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1652713213~hmac=288a792c3a9a865c6305d6d8349c070a"
            ></img>
          </button>
        </div>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="birth">
            Date Of Birth
          </label>
          <input
            type="date"
            required
            id="birth"
            ref={dateRef}
            disabled={hamada6}
            className={classes.myprofileinput}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="birth"
            onClick={() => {
              setHamada6(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1652713213~hmac=288a792c3a9a865c6305d6d8349c070a"
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
            disabled={hamada7}
            className={classes.myprofileinput}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="country"
            onClick={() => {
              setHamada7(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1652713213~hmac=288a792c3a9a865c6305d6d8349c070a"
            ></img>
          </button>
        </div>
        <div className={classes.control}>
          <label className={classes.myprofilelabel} htmlFor="image">
            {" "}
            Image
          </label>
          <input
            type="url"
            required
            id="image"
            ref={imageRef}
            disabled={hamada8}
            className={classes.myprofileinput}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="image"
            onClick={() => {
              setHamada8(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1652713213~hmac=288a792c3a9a865c6305d6d8349c070a"
            ></img>
          </button>
        </div>
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
