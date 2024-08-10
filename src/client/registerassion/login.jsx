import { json, Link } from 'react-router-dom';
import login_logo from './assets/login_avatar.png';
import { useState } from 'react';
import { alerts } from '../../utils/alerts';
import { useNavigate } from "react-router-dom";
function Login()
{
    const navigate = useNavigate();
    const [formData,SetFormData]=useState({'username':null , 'password':null , 'remember-me':false})
    const [response , setResponse]=useState(null)
    const handleInput = (event) =>{
        const {name , value} = event.target;
        SetFormData({...formData , [name]:value})
    }
    const handleChecked =(event)=>{
        const {name,checked}=event.target
        SetFormData({...formData , [name]:checked})
    }
    
    async function handleSubmit(event)
    {
        event.preventDefault();
        console.log(JSON.stringify(formData))
        try{
            const res=await fetch("http://localhost/chat-app-server/loginAuth.php",{
                method:"Post",
                credentials: 'include',
                headers:{
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(formData),
            });
            const alert_data = await res.json();
            const alert_f=alerts[alert_data['alert_type']]
            const alert_title=alert_data['title']
            const alert_desc=alert_data['desc']
            alert_f(alert_title,alert_desc,5000,'OK',null)
            console.log(alert_data)
            if(alert_data['r_type']=="s"){navigate("/dashboard/info");}
        }catch(error)
        {
            console.log(error)
        }
    }
    return(
        
        <form onSubmit={handleSubmit} className="mb-5 mt-1">
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
                        data-toggle="tooltip"
                        title="should be atleast 8 characters only english letters and numbers"
                        onChange={handleInput}
                        type="text" className="form-control input" 
                        name='username'
                        id='login-username'
                        placeholder="Enter Your Username" 
                        aria-describedby="username-label" />
                </div> 
                <div className="mb-3 contents">
                    <label className="form-label label" id="password-label">Password</label>
                    <input 
                        data-toggle="tooltip"
                        title="should be atleast 8 characters only english letters and numbers"
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
                            <input onChange={handleChecked} name="remember-me" className="form-check-input" type="checkbox" value="" id="remember-me" />
                            <label 
                                className="form-check-label label px-1 align-self-center" 
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