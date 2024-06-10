import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ScreenAppointmentForm from "./screens/Appointment/Form.jsx";
import ScreenRootLayout from "./screens/RootLayout.jsx";
import ScreenCalculatePage from "./screens/Calculate/Page.jsx";
import ScreenHomePage from "./screens/HomePage.jsx";
import ScreenDiamondCheckInput from "./screens/DiamondCheck/CheckInput.jsx";
import ScreenDiamondCheckResult from "./screens/DiamondCheck/CheckResult.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenRootLayout />,
    children: [
      {
        path: "/",
        element: <ScreenHomePage />,
      },
      {
        path: "/appointment",
        element: <ScreenAppointmentForm />,
      },
      {
        path: "check",
        children: [
          {
            index: true,
            element: <ScreenDiamondCheckInput />,
          },
          {
            path: ":id",
            element: <ScreenDiamondCheckResult />,
          },
        ],
      },
      {
        path: "/calculate",
        element: <ScreenCalculatePage />,
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
