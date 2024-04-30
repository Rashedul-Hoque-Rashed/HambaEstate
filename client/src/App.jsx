import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/Layout.jsx";
import HomePage from './routes/homePage/HomePage';
import ListPage from "./routes/listPage/ListPage.jsx";

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
      ]
    },
  ]);



  return (
    <RouterProvider router={router} />
  )
}

export default App;