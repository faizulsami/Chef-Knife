import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ViewsRecipes from "../Pages/View Recipes/ViewsRecipes";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blogs/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('https://assignment-10-server-faizulsami.vercel.app/dishes')
            },
            {
                path:'view_recipes/:id',
                element:<PrivateRoute><ViewsRecipes></ViewsRecipes></PrivateRoute>,
                loader:({params}) => fetch(`https://assignment-10-server-faizulsami.vercel.app/dishes/${params.id}`)
            },
            {
                path:'*',
                element:<ErrorPage></ErrorPage>
            },
            {
                path:'login',
                element:<Login></Login>,
            },
            {
                path:'register',
                element:<Register></Register>,
            },
            {
                path:'blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>,
            }
        ]
    }
])

export default router;