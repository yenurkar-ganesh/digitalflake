import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Category from "./components/Category/Category.jsx";
ErrorPage;

const router = createBrowserRouter([
  { path: "/", element: <Hero />, errorElement: <ErrorPage /> },
  { path: "/category", element: <Category />, errorElement: <ErrorPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
