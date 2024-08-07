import { Outlet } from 'react-router';
import './styles/Home.scss';
import profilr_avatar from "./assets/profile.png";
import classNames from 'classnames';
function Sidbar({option})
{
    return (
        <aside className='col-3'>
            <div className='content' id='sidebar-content'>
                <div className='img-box' id='profile-avatar-box'>
                    <img className='img' id='profilr-avatar' src={profilr_avatar}/>
                </div>
                <button className='btn mt-3 mb-3' id='new_chat'>
                    <span className='fa fa-plus'></span> New Chat
                </button>
                <div className='input-group search-box mb-5'>
                    <label className="input-group-text" id="search-label">
                        <span className='fa fa-search'></span> 
                    </label>
                    <input type='text' className='form-control' id='search' placeholder='Search' aria-describedby="search-label"/>
                </div>
                <div className='options'>
                    <div className={classNames('option',{'active':option=="info"})} id='info'>
                        <div>
                            <span className='fa fa-info-circle option__icon'></span>Personal Info 
                        </div>
                    </div>
                    <div className={classNames('option',{'active':option=="chats"})} id='chats'>
                        <div>
                            <span className='fa fa-commenting-o option__icon'></span>Chats
                        </div>
                    </div>
                    <div className={classNames('option',{'active':option=="contacts"})} id='contacts'>
                        <div>
                            <span className='fa  fa-address-book-o option__icon'></span>Contacts
                        </div>
                    </div>
                    <div className={classNames('option',{'active':option=="settings"})} id='settings'>
                        <div>
                            <span className='fa fa-cog option__icon'></span>settings
                        </div>
                    </div>
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
function HomeRender({option,InfoHeaderContnet})
{
    return(
        <div className='body pt-5'>
            <main className='container-md main-container'>
                <div className='row '>
                    <Sidbar option={option}/>
                    <div className='col-9 '>
                        <Header>
                            <InfoHeaderContnet />
                        </Header>    
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    )
}
export {HomeRender}