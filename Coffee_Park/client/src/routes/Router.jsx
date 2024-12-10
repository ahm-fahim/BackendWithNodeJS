import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const response = await fetch("http://localhost:5001/foodsItem");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json(); // Assuming the server returns JSON
        },
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
