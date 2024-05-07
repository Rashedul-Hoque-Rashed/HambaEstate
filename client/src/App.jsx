import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout, RequireAuth } from "./routes/layout/Layout.jsx";
import HomePage from './routes/homePage/HomePage';
import ListPage from "./routes/listPage/ListPage.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import ProfilePage from "./routes/profilePage/ProfilePage.jsx";
import Login from "./routes/loginPage/LoginPage.jsx";
import Register from "./routes/register/Register.jsx";
import ProfileUpdatePage from './routes/ProfileUpdatePage/ProfileUpdatePage';

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
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
      ]
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
      ]
    }
  ]);



  return (
    <RouterProvider router={router} />
  )
}

export default App;