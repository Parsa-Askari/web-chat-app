import { Route ,Routes } from 'react-router-dom';
import Registraition from '../App.jsx';
import Login from '../client/registerassion/login.jsx';
import Signup  from '../client/registerassion/signup.jsx';
import  HomeRender  from '../client/userDashboard/Home.jsx';
import {InfoMainContent,InfoHeaderContnet} from "../client/userDashboard/Info.jsx";
import { ChatsMainContent,ChatsHeaderContnet } from '../client/userDashboard/Chats.jsx';
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

    </Routes>

);
export default AppRoutes