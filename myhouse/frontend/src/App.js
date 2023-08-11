import { React } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/normalize.css/normalize.css";

import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import RealtyPage from "./pages/RealtyPage";
import ErrorPage from "./pages/ErrorPage";
import ContactsPage from "./pages/ContactsPage";
import LogInPage from "./pages/LogInPage";
import LogOutPage from "./pages/LogOutPage";
import RealtyDetailPage from "./pages/RealtyDetailPage";
import RealtyManagementPage from "./pages/RealtyManagementPage";
import RealtyRemovePage from "./pages/RealtyRemovePage";
import RealtyAddPage from "./pages/RealtyAddPage";
import RealtyUpdatePage from "./pages/RealtyUpdatePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/realty",
      element: <RealtyPage />,
    },
    {
      path: "/realty/:id",
      element: <RealtyDetailPage />,
    },
    {
      path: "/contacts",
      element: <ContactsPage />,
    },
    {
      path: "/login",
      element: <LogInPage />,
    },
    {
      path: "/logout",
      element: <LogOutPage />,
    },
    {
      path: "/realty-management",
      element: <RealtyManagementPage />,
    },
    {
      path: "/realty-management/add",
      element: <RealtyAddPage />,
    },
    {
      path: "/realty-management/update",
      element: <RealtyUpdatePage />,
    },
    {
      path: "/realty-management/remove",
      element: <RealtyRemovePage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;