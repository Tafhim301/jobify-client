import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AddJob from "../Components/AddJob/AddJob";
import PrivateRoutes from "./PrivateRoutes";
import SingleJobDetails from "../Components/SingleJobDetails/SingleJobDetails";
import AllJobs from "../Components/AllJobs/AllJobs";
import MyJobs from "../Components/MyJobs/MyJobs";
import UpdateMyJob from "../Components/MyJobs/UpdateMyJob";
import BlogPage from "../Components/BlogPage/BlogPage";
import AppliedJobs from "../Components/AppliedJobs/AppliedJobs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        path:"/",
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addJob',
        element:<PrivateRoutes><AddJob></AddJob></PrivateRoutes>,
        
      },
      {
        path:'/myJobs',
        element:<PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
        
      },
      {
        path:'/job/:id',
        element:<PrivateRoutes><SingleJobDetails></SingleJobDetails></PrivateRoutes>,
        loader: async({params}) => fetch(`https://jobify-server-psi.vercel.app/job/${params.id}`)
      },
      {
        path:'/allJobs',
        element: <AllJobs></AllJobs>,
        loader: async() => fetch('https://jobify-server-psi.vercel.app/allJobs')

      },
      {
        path:'/updateJob/:id',
        element: <PrivateRoutes><UpdateMyJob></UpdateMyJob></PrivateRoutes>,
        loader: async({params}) => fetch(`https://jobify-server-psi.vercel.app/job/${params.id}`)

      },
      {
        path:'/blogs',
        element:<BlogPage></BlogPage>,
        loader: () => fetch('blogs.json')
      },
      {
        path:'/appliedJobs',
        element:<PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>,
      }
    ]
    },
  ]);