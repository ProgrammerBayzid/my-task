import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Components/Pages/AddTask";
import ComplatedTask from "../Components/Pages/ComplatedTask";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import Main from "../Components/Pages/Main";
import MyTask from "../Components/Pages/MyTask";
import Profile from "../Components/Pages/Profile";
import Singup from "../Components/Pages/Singup";

export const route = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>,
              
            },
            {
                path: '/completedtask',
                element: <ComplatedTask></ComplatedTask>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
        ]
    }
])