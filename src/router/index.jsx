import { createBrowserRouter } from "react-router-dom";

import { Main } from "../layouts"
import { Home } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
          {
            index: true,
            element: <Home />,
          }
        ],
      },
      
    ]);