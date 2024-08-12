import { faTreeCity } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
async function getChatData(SetChatHistory,username)
{
    try{
        const history=await fetch("http://localhost/chat-app-server/GetChatsHistory.php",{
            method:"POST",
            credentials:"include",
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({"username":username,"second_user":localStorage.getItem("chat_target")})
            
        });
        const history_json=await history.json();
        SetChatHistory(history_json)
        
    }catch(error){console.log(error)}
}

const GetDataFromServer=(SetUsername,SetChatHistory)=>{
    useEffect(()=>{
        async function getUserData()
        {
            try{
                const user_data=await fetch("http://localhost/chat-app-server/get_session.php",{
                    method:"GET",
                    credentials:"include",
                    headers:{
                        'Content-Type' : 'application/json',
                    },
                });
                const user_data_json=await user_data.json()

                getChatData(SetChatHistory,user_data_json['username'])
                
                SetUsername(user_data_json['username'])
                
            }catch(error)
            {
                console.log(error);
            }
        }
        getUserData()
    },[])
}
const RecordMsg = (SetUserMsg,event)=>{
    const value=event.target.value
    SetUserMsg(value)
}
const handleSendMsg=async(msg,username,SetChatHistory,SetUserMsg)=>{
    try{
        await fetch("http://localhost/chat-app-server/insert_to_chat.php",{
            method:"POST",
            credentials:"include",
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({"username":username,
                                "second_user":localStorage.getItem("chat_target"),
                                "msg":msg})
        });
        getChatData(SetChatHistory,username)
        SetUserMsg("")
        
    }catch(error)
    {
        console.log(error);
    }
}
export {GetDataFromServer,handleSendMsg,RecordMsg};