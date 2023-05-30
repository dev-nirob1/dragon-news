import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import NewsDetails from "../Pages/News/News/NewsDetails";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../Pages/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [

            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;