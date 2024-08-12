import "./styles/Chats.scss";
import { GetDataFromServer ,handleChatSelect} from "../../hooks/chatsHooks"; 
import { NewChatBtn } from "../../components/UI/buttons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function EmptyChat()
{
    return(
        <div className="no-chat">
            <div id="header">
                <h2>No Chats Yet :(</h2>
            </div>
            <div id="body">
                <button className="btn btn-primary">
                    Start A new Chat
                </button>
            </div>
        </div>
    )
}
function ChatItem(props)
{
    const navigate=useNavigate();
    return(
        <div onClick={(event)=>handleChatSelect(event,navigate)} className="item" id={props.second_user} >
            <div id="header">
                <div id="chat-profile-box"></div>
            </div>
            <div id="body" className="secondry">
                <h3 id="second-name">{props.second_user}</h3>
                <p>{props.msg}</p>
            </div>
            <div id="time">
                <p>{props.sent_at}</p>
            </div>
        </div>
    )

}
function ChatItems({chatsList})
{
    return(
        <div className="items">
            {
                chatsList.map((item,index)=>{
                    return <ChatItem 
                            key={index} 
                            messenger={item['messenger']}
                            second_user={item['second_user']}
                            msg={item['msg']}
                            sent_at={item['sent_at']}/>
                })
            }
        </div>

    )
}
function ChatsMainContent()
{
    const[chatsList,SetChatsList]=useState([]);
    const[username,SetUsername]=useState([]);
    GetDataFromServer(SetChatsList)
    return (
        <section className='row' id="chats-section">
            <div className="content " id="main-chats-content">
                
                {Object.keys(chatsList).length>0 ? 
                    <ChatItems chatsList={chatsList} username={username} />
                    :
                    <EmptyChat />
                }
                
            </div>
            
        </section>
        
    )
}
function ChatsHeaderContnet()
{
    return (
        <h3 className="header-title">
            Chats
        </h3>
    )
}
export {ChatsMainContent,ChatsHeaderContnet};