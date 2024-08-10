import { useEffect , useState } from "react";
const GetDataFromServer=(setResponse)=>{
    useEffect (()=>{
        async function check_cookie()
        {
            try{
                const res=await fetch("http://localhost/chat-app-server/get_session.php",{
                    method:"GET",
                    credentials: 'include',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                
                });
                const user_data=await res.json();
                if(user_data['status']=="s")
                {
                    setResponse({
                        "f_name":user_data['f_name'],
                        "l_name":user_data['l_name'],
                        "username":user_data['username'],
                        "email":user_data['email'],
                        'created_at':user_data['created_at']})
                }
                else
                {
                    useNavigate("./");
                }
            }catch(error)
            {
                console.log(error)
            }
        }
        check_cookie();
    },[])
}
const ResponseHook = ()=>{
    return useState({"f_name":'',"l_name":'',
        "username":'',"email":'',
        'created_at':''})
}
export {GetDataFromServer,ResponseHook}