import { Login } from "./client/registerassion/login"
import { Signup } from "./client/registerassion/signup"
import { Outlet, Link } from 'react-router-dom';
import './App.scss '
function Registraition(props)
{
    return(
        <div className='body'>
            <div id="register-container" className="container-fluid" >
                <div className="row justify-content-center">
                    <div className="col-7 col-xl-4" >
                        <div id="menu">
                            <Outlet />
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}
export default Registraition;