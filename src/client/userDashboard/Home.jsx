import { Outlet } from 'react-router';
import './styles/Home.scss';
import profilr_avatar from "./assets/profile.png";
import classNames from 'classnames';
import { HandleOptions } from '../../hooks/mainHooks';
import { useNavigate } from "react-router-dom";
import { NewChatBtn , OptionBtn } from '../../components/UI/buttons';
import { useState ,useEffect} from 'react';
import { memo } from 'react';
function Sidbar({option})
{
    const navigate=useNavigate()
    return (
        <aside className='col-3'>
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

                <div className='options' onClick={(event)=>HandleOptions(navigate,event)}>
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
                    <OptionBtn activate={option} className='option'  id='settings'>
                        <div>
                            <span className='fa fa-cog option__icon'></span>settings
                        </div>
                    </OptionBtn>
                </div>
            </div>
        </aside>
    )
}
function Header({children})
{
    return(
        
        <header className='row'>
            {children}
        </header>
    )
}
function HomeRender({option,HeaderContnet})
{
    return(
        <div className='body pt-5'>
            <main className='container-md main-container'>
                <div className='row '>
                    <Sidbar option={option}/>
                    <div className='col-9 '>
                        <Header>
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