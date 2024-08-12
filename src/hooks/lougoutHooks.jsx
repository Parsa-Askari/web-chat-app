import {useEffect} from "react";
import { alerts } from "../utils/alerts";
function getUserData(SetUserData){
    useEffect(()=>{
        const getUserData = async()=>{
            try{
                const res=await fetch("http://localhost/chat-app-server/get_session.php",{
                    method:"GET",
                    credentials:"include",
                    headers:{
                        'Content-Type':'aplication/json',
                    },
                })
                const userdata=await res.json()
                SetUserData(userdata)
    
            }catch(error)
            {
                console.log(error)
            }
        }
        getUserData()
    })
}
const handleLogout=async(nav)=>{
    try{
        const res=await fetch("http://localhost/chat-app-server/lougout.php",{
            method:"GET",
            credentials:"include",
            headers:{
                'Content-Type':'aplication/json',
            },
        })
        alerts['success_toast']("logout","you have loged out!");
        nav("/");

    }catch(error)
    {
        console.log(error)
    }
}

export {getUserData,handleLogout}