import { RouterProvider } from "react-router-dom";
import PetsPage from "./pages";
import router from "./appRouter";

function App() {
  return (
    <RouterProvider router={router}>
      <PetsPage />
    </RouterProvider>
  );
}

export default App;
