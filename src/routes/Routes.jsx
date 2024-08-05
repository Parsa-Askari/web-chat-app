import { Route ,Routes } from 'react-router-dom';
import Registraition from '../App.jsx';
import { Login } from '../client/registerassion/login.jsx';
import { Signup } from '../client/registerassion/signup.jsx';
import { HomeRender } from '../client/userDashboard/Home.jsx';
const AppRoutes = (
    <Routes>
        <Route path="/" element={<Registraition/>}>
            <Route index element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Route>
        <Route path='/dashboard' element={<HomeRender/>}/>
    </Routes>

);
export default AppRoutes