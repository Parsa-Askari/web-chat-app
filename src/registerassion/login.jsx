
function Login()
{
    return(
        
        <form method="post" className="mb-5 mt-5">
            <div className="inputs mb-5">
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
            </div>
            <div className="buttons">
                <div className="row mb-2">
                    <div className="col-6 mb-2">
                        <div class="d-flex justify-content-center form-check contents ">
                            <input class="form-check-input" type="checkbox" value="" id="remember-me" />
                            <label class="form-check-label label px-1 align-self-center" for="remember-me">
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
                        <button type="button" id="login-submit" class="btn btn-outline-warning">submit</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9 d-flex justify-content-center">
                        <button type="button" id="signup-redirect" class="btn btn-outline-info">submit</button>
                    </div>
                </div>
            </div>
        </form>
        

    )

}
export {Login}