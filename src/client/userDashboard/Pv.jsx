import "./styles/Pv.scss";
import { useState } from "react";
import { GetDataFromServer ,handleSendMsg ,RecordMsg} from "../../hooks/pvHooks";
function CoreBox(props)
{
    return(
        <div className="chat-box">
            <div id="header" className={"flex-wrap "+props.headerclass}>
                <div className="profile-box col my-1" >
                    <div className="pv-profile-box">
                    
                    </div>
                    <span className="d-inline d-sm-none">
                        {props.messenger_small}
                    </span>
                    <span className="d-none d-sm-inline">
                        {props.messenger}
                    </span>
                </div>
                
                <div className="pv-sent-time col">
                    {props.sent_at.split(" ")[1]}
                </div>
            </div>
            <div id="body">
                {props.msg}
            </div>
        </div>
    )
}
function FriendMsgBox(props){
    return(
        <div className="row mb-3">
            <div className="col-10 col-sm-9">
                <CoreBox {...props} headerclass={"friend"}/>
            </div>
            <div className="col-2 col-sm-3"></div>      
        </div>
    )
   
}
function MyMsgBox(props)
{
    return(
        <div className="row mb-3">
            <div className="col-2 col-sm-3"></div>  
            <div className="col-10 col-sm-9">
                <CoreBox {...props} headerclass={"my"}/>
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
                                    messenger_small={"you"} 
                                    messenger={"you"} 
                                    sent_at={item["sent_at"]} 
                                    msg={item['msg']}/>)
                    }
                    else{
                        return (<FriendMsgBox 
                                    key={index}
                                    messenger_small={item['messenger_render']}  
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