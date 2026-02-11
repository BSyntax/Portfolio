import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { ProjectsContextProvider } from "./context/ProjectsProvider";
import RootLayout from "./components/layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <ProjectsContextProvider>
      <RouterProvider router={router} />
    </ProjectsContextProvider>
  );
}

export default App;
