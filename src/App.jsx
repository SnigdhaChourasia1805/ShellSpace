import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import {ErrorPage} from "./PAGES/Error Page/ErrorPage"
import { AppLayout } from "./Components/Layout/AppLayout";

import LoginPage from "./PAGES/Login/Login";
// import { Home } from "./PAGES/Home";

import { SignupForm } from "./PAGES/Login/SignUp";
import { Home } from "./PAGES/Home Page/Home";
import { LeaderBoard } from "./PAGES/LeaderBoard/LeaderBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "practice",
        // element: <Practice />,
      },
      {
        path: "challenge",
        // element: <Challenge />,
      },
      {
        path: "leaderboard",
        element: <LeaderBoard />,
      },
      {
        path:"login",
        element:<LoginPage />,
      },
      {
        path:"signup",
        element:<SignupForm />
        }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;