import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

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
            <img className='logo' src={'https://images-na.ssl-images-amazon.com/images/G/01/goodreads/Goodreads-Logo-AuthPortal._CB646706455_.png'} />
            <h2 className='my-3'>Login</h2>
            <form className='col-8' onSubmit={e => handleLogin(e)}>
                <div className='form-group my-3'>
                    <label className=''>Email</label>
                    <input className='form-control'
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        name='email' type={'email'} required placeholder='Enter your email...' />
                </div>

                <div className='form-group my-3'>
                    <label>Password</label>
                    <input className='form-control'
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        name='password' type={'password'} required placeholder='Enter your password...' />
                </div>

                <div class="form-check my-3">
                    <input id="keepMe" type="checkbox" class="form-check-input" name="isLogin" />
                    <label class="form-check-label" style={{ float: 'left' }}>Keep me logined</label>
                </div>

                <input type="submit" class="btn btn-primary button-28 my-3" value="LOGIN"></input>
                <ul typeof='disc' id='validate'>

                </ul>
            </form>
            <p><Link to={'/signup'}><a className='link'>Create new account</a></Link></p>

        </div>
    )
}
