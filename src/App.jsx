import { Login } from "./registerassion/login"
import { Signup } from "./registerassion/signup"
import { Outlet, Link } from 'react-router-dom';
function Registraition(props)
{
    return(
        <div id="register-container" className="container-fluid" >
            <div className="row justify-content-center">
                <div className="col-7 col-xl-4" >
                    <div id="menu">
                        <Outlet />
                    </div>
                   
                </div>
            </div>
            
        </div>
        
    )
}
export default Registraition;