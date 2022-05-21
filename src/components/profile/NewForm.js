import classes from "./NewForm.module.css";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import FileBase64 from "react-file-base64";


function NewForm() {
  const [sFirstName, setFirstName] = useState(true);
  const [sLastName, setLastName] = useState(true);
  const [sEmail, setEmail] = useState(true);
  const [sPassword, setPassword] = useState(true);

  const [sDOB, setDOB] = useState(true);
  const [sCountry, setCountry] = useState(true);
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dateRef = useRef();
  const countryRef = useRef();
  const [user, setUser] = useState({});
  const [img,setImg] = useState('');
  const [userDOB, setUserDOB] = useState(new Date());

  function submitHandler(event) {
    event.preventDefault();

    const enteredFname = fnameRef.current.value;
    const enteredlname = lnameRef.current.value;
    const enteredemail = emailRef.current.value;
    const enteredpassword = passwordRef.current.value;
    const entereddate = dateRef.current.value;
    const enteredcountry = countryRef.current.value;

    const newData = {
      firstName: enteredFname,
      lastName: enteredlname,
      email: enteredemail,
      password: enteredpassword === "" ? undefined : enteredpassword,
      date_of_birth: entereddate,
      country: enteredcountry,
      image: img,
    };
    if (newData.image === "") {
      delete newData.image;
    }
    axios
      .patch("https://good-reads-server.herokuapp.com/user", newData, {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      })
      .then(function (response) {
        setFirstName(true);
        setLastName(true);
        setCountry(true);
        setEmail(true);
        setPassword(true);
        setDOB(true);
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
        setUser(response.data);

        setUserDOB(new Date(response.data.date_of_birth));
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let myDate = userDOB.getFullYear()+ "-" + ("0" + (userDOB.getMonth() + 1)).slice(-2) + "-" + ("0" + userDOB.getDate()).slice(-2)
    
  return (
    <div>
      <div className={classes.myProfileDiv}>
        <img
          className={classes.myprofileimg}
          src={
            user.image
              ? user.image
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Goodreads_logo.svg/1280px-Goodreads_logo.svg.png"
          }
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
              src="edi.png"
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
              src="edi.png"
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
              src="edi.png"
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
              src="edi.png"
              alt="Edit"
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
            disabled={sDOB}
            className={classes.myprofileinput}
            defaultValue= {myDate}
          />
          <button
            type="button"
            className={classes.myprofilebutton}
            id="birth"
            onClick={() => {
              console.log(userDOB);
              setDOB(false);
            }}
          >
            <img
              className={classes.myProfileIcon}
              src="edi.png"
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
              src="edi.png"
              alt="Edit"
            ></img>
          </button>
        </div>
        <div className={classes.control}>
                <div   className={classes.myprofileinput}>
                  <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => {
                      setImg(base64);
                    }}
                  />{" "}
               
              </div>
    
        </div>

        <div className={classes.actions}>
          <button id="update" className={classes.myprofileupdatebutton}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewForm;
