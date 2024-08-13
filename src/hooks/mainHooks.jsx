const handleOptions =(nav,event)=>{
    const targetElement=event.target.closest(".option");
    if(targetElement==null){
        return ;
    }
    const id=targetElement.hasAttribute("id") ? targetElement.id : "";
    if(id=="info"){
        nav("/dashboard/info")
    }
    else if(id=="chats"){
        nav("/dashboard/chats")
    }
    else if(id=="contacts"){
        nav("/dashboard/contacts")
    }
    else if(id=="logout"){
        nav("/dashboard/logout")
    }
    else{
        console.log("path not found in navigate");
    }
}
const handleMobileMenu=(event,SetAsideClassname)=>{
    const id=event.target.closest("div").id
    console.log(id)
    if(id=="close-mobile-menu"){
        SetAsideClassname("desktop")
    }
    else if(id=="mobile-menu"){
        SetAsideClassname("mobile")
    }
    
}
export {handleOptions,handleMobileMenu};