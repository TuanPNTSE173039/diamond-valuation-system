import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ScreenAppointmentForm from "./screens/Appointment/Form.jsx";
import ScreenRootLayout from "./screens/RootLayout.jsx";
import ScreenCalculatePage from "./screens/Calculate/Page.jsx";
import ScreenHomePage from "./screens/HomePage.jsx";
import ScreenDiamondCheckInput from "./screens/DiamondCheck/CheckInput.jsx";
import ScreenDiamondCheckResult from "./screens/DiamondCheck/CheckResult.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenRootLayout />,
    children: [
      {
        index: true,
        element: <ScreenHomePage />,
      },
      {
        path: "appointment",
        element: <ScreenAppointmentForm />,
      },
      {
        path: "diamond-calculate",
        element: <ScreenCalculatePage />,
      },
      {
        path: "diamond-check",
        element: <ScreenDiamondCheckInput />,
      },
      {
        path: "diamond-check/:id",
        element: <ScreenDiamondCheckResult />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
