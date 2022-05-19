import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../Signup/SignUp.css';
import TextField from '@mui/material/TextField';

const radios = document.getElementsByName('gender');
const pass = document.getElementsByName('password');
let confPass = false;

export default function SignUp() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
        lastName: "",
        firstName: "",
        date_of_birth: new Date(),
        gender: "",
        country: ""
    });

    const handleLogin = (event) => {
        console.log(user);
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false || !confPass) {
            // event.preventDefault();
            // document.getElementById('validate').innerHTML = form.validationMessage;
        } else {
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    user.gender = radios[i].value
                    break;
                }
            }
            console.log(user);
            console.log("line 20");
            axios.post("https://good-reads-server.herokuapp.com/user/signup", user)
                .then(function (response) {
                    console.log(response.data);
                    navigate('/login');
                })
                .catch(function (error) {
                    document.getElementById('validate').innerHTML = `<li>${error.response.data}</li>`;
                    console.log(error);
                });
        }
        // setValidated(true);
    };
    return (
        <div className='row justify-content-center signup-temp'>
            {/* <img className='logo' src={'https://images-na.ssl-images-amazon.com/images/G/01/goodreads/Goodreads-Logo-AuthPortal._CB646706455_.png'} /> */}
            <h2 className='my-3 registerTxt'>Sign Up</h2>
            <form className='col-8' onSubmit={e => handleLogin(e)}>
                <div className='form-group my-3'>
                    {/* <label className=''>First Name</label> */}
                    <TextField id="filled-size-small" variant="filled" size="small" label="First Name" className='form-control'
                        onChange={e => setUser({ ...user, firstName: e.target.value })}
                        name='fname' type={'text'} required placeholder='Enter your first name...' />
                </div>
                <div className='form-group my-3'>
                    {/* <label className=''>Last Name</label> */}
                    <TextField id="filled-size-small" variant="filled" size="small" label="Last Name"ut className='form-control'
                        onChange={e => setUser({ ...user, lastName: e.target.value })}
                        name='lname' type={'text'} required placeholder='Enter your last name...' />
                </div>
                <div className='form-group my-3'>
                    {/* <label className=''>Email</label> */}
                    <TextField id="filled-size-small" variant="filled" size="small" label="Email" className='form-control'
                        onChange={e => setUser({ ...user, email: e.target.value })}
                        name='email' type={'email'} required placeholder='name@gmail.com' />
                </div>

                <div className='form-group my-3'>
                    {/* <label>Password</label> */}
                    <TextField id="filled-size-small" variant="filled" size="small" label="Password" className='form-control'
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        name='password' type={'password'} required placeholder='Enter your password...' />
                </div>
                <div className='form-group my-3'>
                    {/* <label>Confirm Password</label> */}
                    {/* id='passConfirm' */}
                    {/* input id='passConfirm' */}
                    <TextField id="passConfirm filled-size-small" variant="filled" size="small" label="Confirm Password" 
                        onChange={e => {
                            if (pass[0].value !== e.target.value) {
                                pass[1].setAttribute('class', 'form-control is-invalid');
                                document.getElementById('validate').innerHTML = `<li>Please enter a valid password !</li>`;
                                confPass = false;
                            } else {
                                confPass = true;
                                document.getElementById('validate').innerHTML = ""
                                pass[1].setAttribute('class', 'form-control');
                            }

                        }}
                        className='form-control' name='password' type={'password'} required placeholder='Confirm your password...' />
                </div>
                {/* <div className='form-group my-3'>

                </div> */}


                <div className='form-group my-3'>
                    <label>Date of birth</label>
                    <input className='form-control'
                        onChange={e => setUser({ ...user, date_of_birth: e.target.value })}
                        name='dbt' type={'date'} required />
                </div>
                <div className='form-group my-3'>
                    {/* <label>Country</label> */}
                    <TextField id="filled-size-small" variant="filled" size="small" label="Country" className='form-control'
                        onChange={e => setUser({ ...user, country: e.target.value })}
                        name='country' type={'text'} required placeholder='Enter your country...' />
                </div>
                <p>Choose your gender:</p>
                <div class="form-check">
                    
                    <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value={'male'} />
                    <label class="form-check-label alignLable" for="flexRadioDefault1">
                        male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value={'female'} />
                    <label class="form-check-label alignLable" for="flexRadioDefault2">
                        female
                    </label>
                </div>
                <div class="errorDiv">
                <ul typeof='disc' id='validate' class='text-danger'>

                </ul>
                </div>
                <input type="submit" class="btn btn-outline-primary button-28 my-3 registerBtn"  value="REGISTER"></input>
            </form>

            <p className='loginLink'>Already have an account? <Link to={'/'}><a className='link'>Sign in</a></Link></p>
        </div>
    )
}
