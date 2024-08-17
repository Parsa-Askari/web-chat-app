import { Outlet } from 'react-router';
import './styles/Home.scss';
import profilr_avatar from "./assets/profile.png";
import { handleOptions ,handleMobileMenu } from '../../hooks/mainHooks';
import { useNavigate } from "react-router-dom";
import { NewChatBtn , OptionBtn } from '../../components/UI/buttons';
import { useState ,useEffect} from 'react';
import { memo } from 'react';
function Sidbar({option,asideClassname,SetAsideClassname})
{
    const navigate=useNavigate()
    // ss
    const sidebar_name={"desktop":"sidebar col-3 d-none d-sm-flex",
                        "mobile": "sidebar mobile mt-5"
    }
    return (
        <aside className={sidebar_name[asideClassname]}>
            <div className='content' id='sidebar-content'>
                <div className='img-box' id='profile-avatar-box'>
                    <img className='img' id='profilr-avatar' src={profilr_avatar}/>
                </div>
                
                <NewChatBtn className='btn mt-3 mb-3' id='new_chat'>
                    <span className='fa fa-plus'></span> New Chat
                </NewChatBtn>
                
                <div className='input-group search-box mb-5'>
                    <label className="input-group-text" id="search-label">
                        <span className='fa fa-search'></span> 
                    </label>
                    <input type='text' className='form-control' id='search' placeholder='Search' aria-describedby="search-label"/>
                </div>

                <div className='options' onClick={(event)=>handleOptions(navigate,event)}>
                    <OptionBtn activate={option} className='option' id='info'>
                        <div>
                            <span className='fa fa-info-circle option__icon'></span>Personal Info 
                        </div>
                    </OptionBtn>
                    <OptionBtn activate={option} className='option' id='chats'>
                        <div>
                            <span className='fa fa-commenting-o option__icon'></span>Chats
                        </div>
                    </OptionBtn>
                    <OptionBtn activate={option} className='option' id='contacts'>
                        <div>
                            <span className='fa  fa-address-book-o option__icon'></span>Contacts
                        </div>
                    </OptionBtn>
                    <OptionBtn activate={option} className='option'  id='logout'>
                        <div>
                            <span className='fa fa-sign-out option__icon'></span>Logout
                        </div>
                    </OptionBtn>
                </div>
                <div id='close-mobile-menu' className='d-sm-none d-flex' onClick={(event)=>handleMobileMenu(event,SetAsideClassname)}>
                    <p>
                        <i className="fa fa-chevron-circle-left" ></i>
                    </p>
                    
                </div>
                
            </div>
        </aside>
    )
}
function Header({children,SetAsideClassname})
{
    
    return(
        
        <header className='row'>
            <div  className='col-2 d-block d-sm-none' id='mobile-menu' onClick={(event)=>handleMobileMenu(event,SetAsideClassname)}>
                <p id='menu-bg' className='mt-2'><span className='fa fa-bars' id='hamb-btn'></span></p>
            </div>
            <div className='col-10 col-sm-2'>
                {children}
            </div>
            
        </header>
    )
}
function HomeRender({option,HeaderContnet})
{
    const [asideClassname,SetAsideClassname]=useState("desktop")
    return(
        <div className='body pt-5'>
            <main className='container-md main-container'>
                <div className='row'>
                    <Sidbar option={option} asideClassname={asideClassname} SetAsideClassname={SetAsideClassname}/>
                    <div className='col-12 col-sm-9'>
                        <Header SetAsideClassname={SetAsideClassname}>
                            <HeaderContnet />
                        </Header>    
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    )
}
export default memo(HomeRender)