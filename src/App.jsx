import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CalculatePage from "./components/Calculate/Page.jsx";
import DiamondCheckInputPage from "./components/DiamondCheck/CheckInput/Page.jsx";
import DiamondCheckResultPage from "./components/DiamondCheck/CheckResult/Page.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import ValuationRequestList from "./components/ManageAccount/List.jsx";
import RootLayout from "./components/RootLayout.jsx";
import AppointmentForm from "./components/Appointment/Form.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/appointment",
        element: <AppointmentForm />,
      },
      {
        path: "check",
        children: [
          {
            index: true,
            element: <DiamondCheckInputPage />,
          },
          {
            path: ":id",
            element: <DiamondCheckResultPage />,
          },
        ],
      },
      {
        path: "/calculate",
        element: <CalculatePage />,
      },
      {
        path: "/manage",
        element: <ValuationRequestList />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
  );
}
