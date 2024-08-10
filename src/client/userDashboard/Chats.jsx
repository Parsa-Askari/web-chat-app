import "./styles/Chats.scss";
import { GetDataFromServer ,ResponseHook} from "../../hooks/infoHooks";
import { NewChatBtn } from "../../components/UI/buttons";
function ChatsMainContent()
{
    const[response,setResponse]=ResponseHook()
    GetDataFromServer(setResponse)
    return (
        <section className='row' id="chats-section">
            <div className="content " id="main-chats-content">
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