import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/Home/DoctorProfile/DoctorProfile";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[{
            path:'/',
            element:<Home></Home>
        },{
            path:'/doctorProfile/:id',
            element:<DoctorProfile></DoctorProfile>,
            loader:({params})=> fetch(`http://localhost:5000/doctors/collection/${params.id}`)
        }]
    }
])

export default router