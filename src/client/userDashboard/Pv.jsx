import "./styles/Pv.scss";
import { useState } from "react";
import { GetDataFromServer ,handleSendMsg ,RecordMsg} from "../../hooks/pvHooks";
function FriendMsgBox(props){
    return(
        <div className="row mb-3">
            <div className="col">
                <div className="second-chat-box">
                    <div id="header">
                        <div className="profile-box">
                            <div className="pv-profile-box">
                            
                            </div>
                            <span>
                                {props.messenger}
                            </span>
                        </div>
                        
                        <div className="pv-sent-time">
                            {props.sent_at}
                        </div>
                    </div>
                    <div id="body">
                            {props.msg}
                    </div>
                </div>
            </div>
            <div className="col"></div>      
        </div>
    )
   
}
function MyMsgBox(props)
{
    return(
        <div className="row mb-3">
            <div className="col"></div>  
            <div className="col">
                <div className="first-chat-box">
                    <div id="header">
                        <div className="profile-box">
                            <div className="pv-profile-box">
                            
                            </div>
                            <span>
                                {props.messenger}
                            </span>
                        </div>
                        
                        <div className="pv-sent-time">
                            {props.sent_at}
                        </div>
                    </div>
                    <div id="body">
                        {props.msg}
                    </div>
                </div>
            </div> 
        </div>
    )
    
}
function PvMainContent()
{
    const[username,SetUsername]=useState("")
    const[chatHistory,SetChatHistory]=useState([])
    const[userMsg,SetUserMsg]=useState("")
    GetDataFromServer(SetUsername,SetChatHistory)
    return (
        <section id="pv-section">
            <div className="msgs">
                {chatHistory.map(function(item,index){
                    console.log(item)
                    if(item['messenger']==username)
                    {
                        return (<MyMsgBox
                                    key={index} 
                                    messenger={"you"} 
                                    sent_at={item["sent_at"]} 
                                    msg={item['msg']}/>)
                    }
                    else{
                        return (<FriendMsgBox 
                                    key={index}
                                    messenger={item['messenger']} 
                                    sent_at={item["sent_at"]} 
                                    msg={item['msg']}/>)
                    }
                })}  
            </div>

            <div className="row send-box d-flex justify-content-center">
                <div className="col d-flex align-items-center">
                    <input onChange={(event)=>RecordMsg(SetUserMsg,event)} className="send" type="text" value={userMsg} />
                    <div onClick={()=>handleSendMsg(userMsg,username,SetChatHistory,SetUserMsg)} className="send-btn btn btn-dark fa fa-paper-plane"></div>
                </div>
            </div>
        </section>
    )
}
function PvHeaderContnet()
{
    return (
        <h3 className="header-title">
            Chats
        </h3>
    )
}
export {PvMainContent,PvHeaderContnet};