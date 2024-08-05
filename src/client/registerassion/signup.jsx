import { Link } from 'react-router-dom';
import login_logo from './assets/login_avatar.png';
function Signup()
{
    return(
        
        <form method="post" className="mb-5">
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
                                type="text" className="form-control input" 
                                placeholder="Enter Your First Name" 
                                aria-describedby="first-name-label" />
                        </div>
                        <div className="col">
                            <label className="form-label label" id="last-name-label">Last Name</label>
                            <input 
                                type="text" className="form-control input" 
                                placeholder="Enter Your Last Name" 
                                aria-describedby="last-name-label" />
                        </div>
                    </div>
                </div>
                <div className="mb-4 contents">
                    <label className="form-label label" id="email-label">Email</label>
                    <input 
                        type="text" className="form-control input" 
                        placeholder="Enter Your Email" 
                        aria-describedby="Email-label" />
                </div>
                <div className="mb-4 contents">
                    <label className="form-label label" id="username-label">Username</label>
                    <input 
                        type="text" className="form-control input" 
                        placeholder="Enter Your Username" 
                        aria-describedby="username-label" />
                </div>
                <div className="mb-3 contents">
                    <label className="form-label label" id="password-label">Password</label>
                    <input 
                        type="text" className="form-control input" 
                        placeholder="Enter Your password" 
                        aria-describedby="password-label" />
                </div>
                <div className="mb-3 contents">
                    <label className="form-label label" id="repeat-password-label">Repeat Password</label>
                    <input 
                        type="text" className="form-control input" 
                        placeholder="Repeat Your password" 
                        aria-describedby="repeat-password-label" />
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
                        <button type="button" id="login-submit" className="btn btn-outline-warning">submit</button>
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
export {Signup}