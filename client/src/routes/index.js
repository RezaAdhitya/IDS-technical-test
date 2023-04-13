import { createBrowserRouter } from "react-router-dom";
import AddProductPage from "../pages/AddProductPage";
import DetailProduct from "../pages/DetailProduct";
import EditProductPage from "../pages/EditProductPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/add",
    element: <AddProductPage />
  },
  {
    path: "/edit/:id",
    element: <EditProductPage />,
  },
  {
    path: "/:id",
    element: <DetailProduct />
  },
])

export default router