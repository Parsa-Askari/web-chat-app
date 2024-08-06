import { Outlet } from 'react-router';
import './styles/Home.scss';
function Sidbar({option})
{
    return (
        <aside className='col-3'>
            <div className='img-box' id='profile-avatar-box'>
                <img className='img' id='profilr-avatar'/>
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
        <div className='body'>
            <main className='container-md'>
                <div className='row'>
                    <Sidbar option={option}/>
                    <div className='col-9'>
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