import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import '../Login/Login.css';
import TextField from '@mui/material/TextField';

export default function Login({ updateTokenHandler }) {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleLogin = (event) => {
        console.log(user);
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            // event.preventDefault();
            // document.getElementById('validate').innerHTML = form.validationMessage;
        } else {
            console.log(user);
            console.log("line 20");
            axios.post("https://good-reads-server.herokuapp.com/user/login", user)
                .then(function (response) {
                    console.log(response.data);
                    updateTokenHandler(response.data, document.getElementById('keepMe').checked);
                    navigate('/');
                })
                .catch(function (error) {
                    // document.getElementById('validate').innerHTML = `<li>${error.response.data}</li>`;
                    //   document.getElementById('login').reset()
                    console.log(error);
                });
        }
        // setValidated(true);
    };

    return (
        <div className='row justify-content-center login-temp'>
            {/* <img  className='logo' src={'https://images-na.ssl-images-amazon.com/images/G/01/goodreads/Goodreads-Logo-AuthPortal._CB646706455_.png'} /> */}
            <h2 className='my-3 loginTxt'>Login</h2>
            <form className='col-8' onSubmit={e => handleLogin(e)}>
                <div className='form-group my-3'>
                    <label >Email</label>
                    <TextField className='form-control' id="standard-basic" variant="standard"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        name='email' type={'email'} required placeholder='name@gmail.com' />
                </div>
                <br></br>
                <div className='form-group my-3'>
                    <label>Password</label>
                    <TextField className='form-control' id="standard-basic" variant="standard"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        name='password' type={'password'} required  />
                </div>

                <div class="form-check my-3">
                    <input id="keepMe" type="checkbox" class="form-check-input" name="isLogin" />
                    <label class="form-check-label" style={{ float: 'left' }}>Keep me logged in</label>
                </div>

                <input type="submit" class="btn btn-outline-primary button-28 my-5 loginBtn" variant="outlined" value="Login"></input>
                <div class="errorDiv">
                <ul typeof='disc' id='validate'>

                </ul>
                </div>
            </form>
            <p><Link to={'/signup'}><a className='link registerLink'>Create new account</a></Link></p>

        </div>
    )
}
