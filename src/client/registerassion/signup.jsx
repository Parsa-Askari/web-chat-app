import { Link } from 'react-router-dom';
import login_logo from './assets/login_avatar.png';
import { useState ,useEffect } from 'react';
import { alerts } from '../../utils/alerts';
import { useNavigate } from "react-router-dom";
import { faEyeSlash , faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
function Signup()
{
    const navigate = useNavigate();
    const [formData,SetFormData]=useState({
                                    'username':'' ,'f_name':'','l_name':'',
                                    'email':'','password':'','repeat_password':''});
    const [filled , SetFilled]=useState(false);
    const [passHidden , SetPassHidden]=useState(true);
    const handleInput = (event) =>{
        const {name , value} = event.target;
        SetFormData({...formData , [name]:value})
        
    }
    const handleHiddenPass = (event)=>
    {
        SetPassHidden(!passHidden)
    }
    useEffect (()=>{
        const allFilled = Object.values(formData).every(value => value.trim() !== '');
        console.log(formData)
        SetFilled(allFilled);
    },[formData])
    
    async function handleSubmit(event)
    {
        event.preventDefault();
        try{
            const res=await fetch("http://localhost/chat-app-server/signupAuth.php",{
                method:"Post",
                headers:{
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(formData),
            });
            const alert_data = await res.json();
            console.log(alert_data)
            const alert_f=alerts[alert_data['alert_type']]
            const alert_title=alert_data['title']
            const alert_desc=alert_data['desc']
            
            alert_f(alert_title,alert_desc,5000,'OK',null)
            if(alert_data['r_type']=="s"){navigate("/login");}
        }catch(error)
        {
            console.log(error)
            // console.error(error)
        }
    }
    return(
        
        <form method="post" onSubmit={handleSubmit} className="mb-5">
            <div className='d-flex justify-content-center mb-3'>
                <div className='d-flex flex-column align-items-center header'>
                    <img src={login_logo}/>
                    <label >
                        <h3>Signup</h3> 
                    </label>
                </div>
            </div>
            <div className="inputs mb-5">
                <div className="mb-4 contents">
                    <div className="row">
                        <div className="col">
                            <label className="form-label label" id="first-name-label">First Name</label>
                            <input 
                                onChange={handleInput}
                                type="text" className="form-control input" 
                                name='f_name'
                                placeholder="Enter Your First Name" 
                                aria-describedby="first-name-label" 
                                required/>
                        </div>
                        <div className="col">
                            <label className="form-label label" id="last-name-label">Last Name</label>
                            <input 
                                onChange={handleInput}
                                type="text" className="form-control input" 
                                name='l_name'
                                placeholder="Enter Your Last Name" 
                                aria-describedby="last-name-label" 
                                required
                                />
                        </div>
                    </div>
                </div>
                <div className="mb-4 contents">
                    <label className="form-label label" id="email-label">Email</label>
                    <input 
                        onChange={handleInput}
                        type="text" className="form-control input" 
                        name='email'
                        placeholder="Enter Your Email" 
                        aria-describedby="Email-label" 
                        required
                        />
                </div>
                <div className="mb-4 contents">
                    <label className="form-label label" id="username-label">Username</label>
                    <input
                        onChange={handleInput} 
                        data-toggle="tooltip"
                        title="should be atleast 8 characters only english letters and numbers"
                        type="text" className="form-control input" 
                        name='username'
                        placeholder="Enter Your Username" 
                        aria-describedby="username-label" 
                        required
                        />
                </div>
                <div className="mb-3 contents">
                    <label className="form-label label" id="password-label">Password</label>
                    <div className='input-group'>
                        
                        <input 
                            onChange={handleInput}
                            data-toggle="tooltip"
                            title="should be atleast 8 characters only english letters and numbers"
                            type={passHidden ?  "password" : "text"} 
                            className="form-control input" 
                            name='password'
                            placeholder="Enter Your password" 
                            aria-describedby="show-pass" 
                            required
                            />
                            <div onClick={handleHiddenPass} id="show-pass" className="input-group-addon">
                                {passHidden ? 
                                    <i className="fa fa-eye-slash" aria-hidden="true"></i> 
                                    : 
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                }
                                
                            </div>
                            
                    </div>
                </div>
                <div className="mb-3 contents">
                    <label className="form-label label" id="repeat-password-label">Repeat Password</label>
                    <input 
                        onChange={handleInput}
                        type={passHidden ?  "password" : "text"} 
                        className="form-control input" 
                        placeholder="Repeat Your password" 
                        name='repeat_password'
                        aria-describedby="repeat-password-label" 
                        required
                        />
                </div>
            </div>
            <div className="buttons">
                <div className="row mb-2">
                    <div className="col-6 mb-2">
                        <div className="d-flex justify-content-center form-check contents ">
                            <input className="form-check-input" type="checkbox" value="" id="remember-me" />
                            <label className="form-check-label label px-1 align-self-center" htmlFor="remember-me">
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
                        <button type="submit" id="login-submit" className="btn btn-outline-warning" disabled={!filled}>submit</button>
                    </div>
                </div>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <div className="row justify-content-center">
                        <div className="col-9 d-flex justify-content-center">
                            <button type="button" id="signup-redirect" className="btn btn-outline-info">Login</button>
                        </div>
                    </div>
                </Link>
                
            </div>
        </form>
        

    )

}
export default memo(Signup)