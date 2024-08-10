import "./styles/Info.scss";

import { GetDataFromServer ,ResponseHook} from "../../hooks/infoHooks";
function InfoMainContent()
{
    const[response,setResponse]=ResponseHook()
    GetDataFromServer(setResponse)
    return (
        
        <section className='row' id="info-section">
            <div className="content " id="main-info-content">
                <div className="row info__row" id="names">
                    <div className="col info">
                        <div className="info__label">
                            First Name
                        </div>
                        <div className="info__box">
                            {response['f_name']}
                        </div>
                    </div>
                    <div className="col info">
                        <div className="info__label">
                            Last Name
                        </div>
                        <div className="info__box">
                        {response['l_name']}
                        </div>
                    </div>
                </div>
                <div className="row info__row" id="site-infos">
                    <div className="col info">
                        <div className="info__label">
                            Email
                        </div>
                        <div className="info__box">
                            {response['email']}
                        </div>
                    </div>
                    <div className="col info">
                        <div className="info__label">
                            Username
                        </div>
                        <div className="info__box">
                            {response['username']}
                        </div>
                    </div>
                </div>
                <div className="row info__row" id="site-infos">
                    <div className="col-6 info">
                        <div className="info__label">
                            Account Created At
                        </div>
                        <div className="info__box" id="info-date">
                            {response['created_at']}
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