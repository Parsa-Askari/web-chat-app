import "./styles/Info.scss";
import { useEffect , useState } from "react";
function InfoMainContent()
{
    const[response,setResponse]=useState({"f_name":'',"l_name":'',
                                        "username":'',"email":'',
                                        'created_at':''})
    useEffect (()=>{
        async function check_cookie()
        {
            try{
                const res=await fetch("http://localhost/chat-app-server/get_session.php",{
                    method:"POST",
                    credentials: 'include',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body : JSON.stringify({"cols":["username"]}),
                });
                const out=await res.json();
                
            
            }catch(error)
            {
                console.log(1)
            }
        }
        check_cookie();
    },[])
    return (
        
        <section className='row' id="info-section">
            <div className="content " id="main-info-content">
                <div className="row info__row" id="names">
                    <div className="col info">
                        <div className="info__label">
                            First Name
                        </div>
                        <div className="info__box">
                            1
                        </div>
                    </div>
                    <div className="col info">
                        <div className="info__label">
                            Last Name
                        </div>
                        <div className="info__box">
                            2
                        </div>
                    </div>
                </div>
                <div className="row info__row" id="site-infos">
                    <div className="col info">
                        <div className="info__label">
                            Email
                        </div>
                        <div className="info__box">
                            1
                        </div>
                    </div>
                    <div className="col info">
                        <div className="info__label">
                            Username
                        </div>
                        <div className="info__box">
                            2
                        </div>
                    </div>
                </div>
                <div className="row info__row" id="site-infos">
                    <div className="col-6 info">
                        <div className="info__label">
                            Account Created At
                        </div>
                        <div className="info__box" id="info-date">
                            1
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        
    )
}
function InfoHeaderContnet()
{
    return (
        <h3 className="header-title">
            Personal Info
        </h3>
    )
}
export {InfoMainContent,InfoHeaderContnet};