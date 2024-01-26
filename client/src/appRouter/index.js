import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import BreedsPage from "../pages/breedspage/index";
import StartsImage from "../components/startsImage";
import GalleryPage from "../pages/gallery";
import CharacteristicsPage from "../pages/Characteristicspage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement : <ErrorPage/>
    children: [
      {
        path: "/",
        element: <StartsImage />,
      },
      {
        path: "/breeds",
        element: <BreedsPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/characteristics",
        element: <CharacteristicsPage/>,
      },
    ],
  },
]);

export default router;
