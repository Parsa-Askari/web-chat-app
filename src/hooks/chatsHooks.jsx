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
                console.log(res)
            }catch(error)
            {
                console.log(error);
            }
            
        }
        
        getUserData();
        return ()=>{
            SetChatsList({})
        }

    },[])    
}

export {GetDataFromServer};