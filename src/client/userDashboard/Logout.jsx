import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../hooks/lougoutHooks";
import "./styles/Logout.scss"
function LogoutMainContent()
{
    const navigate = useNavigate()
    return(
        <section className='row' id="logout-section">
            <div className="content " id="main-logout-content">
                <div className="item">
                    <h3>Are You Sure You Want to Logout ?</h3>
                    <button onClick={()=>handleLogout(navigate)} className="btn btn-primary">Logout</button>
                </div>
                
            </div>
        </section>
    )

}
function LogoutHeader()
{
    return (
        <h3 className="header-title">
            LogOut
        </h3>
    )
}
export {LogoutMainContent,LogoutHeader}