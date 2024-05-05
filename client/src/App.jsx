import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/Layout.jsx";
import HomePage from './routes/homePage/HomePage';
import ListPage from "./routes/listPage/ListPage.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import ProfilePage from "./routes/profilePage/ProfilePage.jsx";
import Login from "./routes/loginPage/LoginPage.jsx";
import Register from "./routes/register/Register.jsx";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
      ]
    },
  ]);



  return (
    <RouterProvider router={router} />
  )
}

export default App;