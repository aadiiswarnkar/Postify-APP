import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store  from './Store/Store.js'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router'
import Home from './Pages/Home.jsx'
import AuthLayout from './Components/AuthLayout.jsx'
import Login from './Components/Login.jsx'
import AddPost from './Pages/AddPost.jsx'
import Signup from './Pages/Signup.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
import Allpost from './Pages/Allpost.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication = {false}>
            <Login />
          </AuthLayout>
        )
      },
        {
          path:"/signup",
          element:(
            <AuthLayout authentication = {false}>
              {/* <SignUp /> */}
              <Signup />
            </AuthLayout>
          )
        },
        {
          path:"/allpost",
          element:(
            <AuthLayout authentication>
            
              <Allpost />
            </AuthLayout>
          )
        },
        {
          path:"/addpost",
          element:(
            <AuthLayout authentication>
           
              <AddPost />
            </AuthLayout>
          )
        },
        {
          path:"/editpost/:slug",
          element:(
            <AuthLayout authentication>
            
              <EditPost />
            </AuthLayout>
          )
        },
        {
          path:"/post/:slug",
          element:<Post />
        }




    ]
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    {/* <App /> */}
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
