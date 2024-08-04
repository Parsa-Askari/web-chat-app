import { Route ,Routes } from 'react-router-dom';
import Registraition from '../App.jsx';
import { Login } from '../registerassion/login.jsx';
import { Signup } from '../registerassion/signup.jsx';

const AppRoutes = (
    <Routes>
        <Route path="/" element={<Registraition/>}>
            <Route index element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Route>
    </Routes>

);
export default AppRoutes