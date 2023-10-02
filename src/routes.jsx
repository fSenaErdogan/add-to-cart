import {
  createBrowserRouter,
} from "react-router-dom";

import App from './Pages/App.jsx'
import Heyy from './Pages/Heyy.jsx';
import Layout from "./Layout/index.jsx";
import NotFound from "./Pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "a",
        element: <Heyy />
      },
      {
        path: "*",
        element: <NotFound />
      },
    ]
  }
]);

export default router