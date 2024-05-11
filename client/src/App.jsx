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
import NewPostPage from "./routes/NewPostPage/NewPostPage.jsx";
import { listPageLoader, singlePageLoader } from "./lib/loaders.js";

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
          element: <ListPage />,
          loader: listPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader
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
          element: <ProfilePage />,
          loader: listPageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add",
          element: <NewPostPage />
        },
      ]
    }
  ]);



  return (
    <RouterProvider router={router} />
  )
}

export default App;