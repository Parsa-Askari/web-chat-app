import { useEffect , useState } from "react";
import { memo } from "react";
const GetDataFromServer=(SetChatsList)=>{
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
                const user_data_json=await user_data.json();
                if(user_data_json['status']=="e"){
                    console.log("error")
                    return ;
                }
                const chatsList = await fetch("http://localhost/chat-app-server/get_chats.php",{
                    method:"POST",
                    credentials:"include",
                    headers:{
                        'Content-Type' : 'application/json',
                    },
                    body:JSON.stringify(user_data_json),
                });
                const res=await chatsList.json()
                SetChatsList(res)
                
            }catch(error)
            {
                console.log(error);
            }
        }
        getUserData();
    },[])    
}
const handleChatSelect= (event,nav)=>{
    const id=event.target.closest(".item").id
    localStorage.setItem("chat_target",id);
    nav("/dashboard/chats/pv")
}
export {GetDataFromServer,handleChatSelect};