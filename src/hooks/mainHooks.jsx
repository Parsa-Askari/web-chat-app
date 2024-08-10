const HandleOptions =(nav,event)=>{
    const targetElement=event.target.closest(".option");
    if(targetElement==null){
        return ;
    }
    const id=targetElement.hasAttribute("id") ? targetElement.id : "";
    if(id=="info"){
        nav("../dashboard/info")
    }
    else if(id=="chats"){
        nav("../dashboard/chats")
    }
    else if(id=="contacts"){
        nav("../dashboard/contacts")
    }
    else if(id=="settings"){
        nav("../dashboard/settings")
    }
    else{
        console.log("path not found in navigate");
    }
}
export {HandleOptions};