import { Route ,Routes } from 'react-router-dom';
import Registraition from '../App.jsx';
import Login from '../client/registerassion/login.jsx';
import Signup  from '../client/registerassion/signup.jsx';
import  HomeRender  from '../client/userDashboard/Home.jsx';
import {InfoMainContent,InfoHeaderContnet} from "../client/userDashboard/Info.jsx";
import { ChatsMainContent,ChatsHeaderContnet } from '../client/userDashboard/Chats.jsx';
import { LogoutMainContent,LogoutHeader } from '../client/userDashboard/Logout.jsx';
import { PvMainContent,PvHeaderContnet } from '../client/userDashboard/Pv.jsx';
const AppRoutes = (
    <Routes>
        <Route path="/" element={<Registraition/>}>
            <Route index element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Route>
        <Route path='/dashboard/info' element={<HomeRender option={"info"} HeaderContnet={InfoHeaderContnet} />} >
            <Route index element={<InfoMainContent />} />
        </Route>
        <Route path='/dashboard/chats' element={<HomeRender option={"chats"} HeaderContnet={ChatsHeaderContnet} />} >
            <Route index element={<ChatsMainContent />} />
        </Route>
        <Route path='/dashboard/chats/pv' element={<HomeRender option={"chats"} HeaderContnet={PvHeaderContnet} />} >
            <Route index element={<PvMainContent />} />
        </Route>
        <Route path='/dashboard/logout' element={<HomeRender option={"logout"} HeaderContnet={LogoutHeader} />} >
            <Route index element={<LogoutMainContent />} />
        </Route>
    </Routes>

);
export default AppRoutes