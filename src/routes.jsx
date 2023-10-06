import {
  createBrowserRouter,
} from "react-router-dom";

import App from './Pages/App.jsx'
import Layout from "./Layout/index.jsx";
import NotFound from "./Pages/NotFound.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";

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
        path: "/product_detail/:name",
        element: <ProductDetail />
      },
      {
        path: "*",
        element: <NotFound />
      },
    ]
  }
]);

export default router