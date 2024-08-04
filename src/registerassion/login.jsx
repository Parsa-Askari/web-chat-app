import { Link } from 'react-router-dom';
import login_logo from './assets/login_avatar.png';
import { useState } from 'react';
function Login()
{
    const [formData,SetFormData]=useState({'username':null , 'password':null , 'remember-me':false})
    const [response , setResponse]=useState(null)
    const handleInput = (event) =>{
        const {name , value} = event.target;
        SetFormData({...formData , name:value})
    }
    const handleChecked =(event)=>{
        const {name,checked}=event.target
        SetFormData({...formData , name:value})
    }
    return(
        <form method="post" className="mb-5 mt-1">
            <div className='d-flex justify-content-center  '>
                <div className='d-flex flex-column align-items-center header'>
                    <img src={login_logo}/>
                    <label >
                        <h3>Login</h3> 
                    </label>
                </div>

            </div>
            <div className="inputs mb-5">
                <div className="mb-4 contents">
                    <label className="form-label label" id="username-label">Username</label>
                    <input 
                        onChange={handleInput}
                        type="text" className="form-control input" 
                        name='username'
                        placeholder="Enter Your Username" 
                        aria-describedby="username-label" />
                </div>
                <div className="mb-3 contents">
                    <label className="form-label label" id="password-label">Password</label>
                    <input 
                        onChange={handleInput}
                        type="text" className="form-control input" 
                        name='password'
                        placeholder="Enter Your password" 
                        aria-describedby="password-label" />
                </div>
            </div>
            <div className="buttons">
                <div className="row mb-2">
                    <div className="col-6 mb-2">
                        <div className="d-flex justify-content-center form-check contents ">
                            <input onChange={handleChecked} className="form-check-input" type="checkbox" value="" id="remember-me" />
                            <label 
                                className="form-check-label label px-1 align-self-center" 
                                name="remember-me"
                                htmlFor="remember-me">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <a className="link">Forgot My Password</a>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <div className="col-11 d-flex justify-content-center">
                        <button type="submit" name='submit' id="login-submit" className="btn btn-outline-warning">submit</button>
                    </div>
                </div>
                <Link to={"/signup"} style={{ textDecoration: 'none' }}>
                    <div className="row justify-content-center">
                        <div className="col-9 d-flex justify-content-center">
                            <button type="button" id="signup-redirect" className="btn btn-outline-info">signup</button>
                        </div>
                    </div>
                </Link>
            </div>
        </form>
        

    )

}
export {Login}