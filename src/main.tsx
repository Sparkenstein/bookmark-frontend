import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import PrivateRoute from "./components/PrivateRoutes.tsx";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import { Login } from "./pages/login/Login.tsx";
import { Signup } from "./pages/signup/Signup.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <div>Profile</div>
      </PrivateRoute>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
);
