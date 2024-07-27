import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import AppliedJob from './Components/AppliedJob/AppliedJob.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import JobDetails from './Components/JobDetails/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied-job",
        loader: ()=>fetch("/public/jobs.json"),
        element: <AppliedJob></AppliedJob>
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      },
      {
        path:"/job-details/:jobId",
        loader:()=> fetch("../jobs.json"),
        element: <JobDetails></JobDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
