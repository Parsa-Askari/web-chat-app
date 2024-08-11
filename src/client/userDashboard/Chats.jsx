import "./styles/Chats.scss";
import { GetDataFromServer } from "../../hooks/chatsHooks"; 
import { NewChatBtn } from "../../components/UI/buttons";
import { useState } from "react";
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
function ChatsMainContent()
{
    const[chatsList,SetChatsList]=useState({});
    GetDataFromServer(SetChatsList)
    return (
        <section className='row' id="chats-section">
            <div className="content " id="main-chats-content">
                {Object.keys(chatsList).length>0 ? "hey":
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
            Personal Info
        </h3>
    )
}
export {ChatsMainContent,ChatsHeaderContnet};