import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ViewsRecipes from "../Pages/View Recipes/ViewsRecipes";

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
                element:<ViewsRecipes></ViewsRecipes>,
                loader:({params}) => fetch(`https://assignment-10-server-faizulsami.vercel.app/dishes/${params.id}`)
            }
        ]
    }
])

export default router;