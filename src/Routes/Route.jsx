import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/Home/DoctorProfile/DoctorProfile";
import Login from "../Pages/Login.jsx/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointments from "../Pages/Dashboard/Dashboard/MyAppoinments/MyAppointments";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[{
            path:'/',
            element:<Home></Home>
        },{
            path:'/doctorProfile/:id',
            element:<PrivateRoute><DoctorProfile></DoctorProfile></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/doctors/collection/${params.id}`)
        },{
            path:'/login',
            element:<Login></Login>
        },{
            path:'/signup',
            element:<SignUp></SignUp>
        },{
            path:'/appointment',
            element:<PrivateRoute><Appointment></Appointment></PrivateRoute>
        }]
    },{
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<Error></Error>,
        children:[{
            path:'/dashboard/myAppointments',
            element:<MyAppointments></MyAppointments>
        }]
    }
])

export default router