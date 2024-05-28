import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/home_page/HomePage.jsx";
import DiamondCheckPage from "./components/check_diamond/diamond_check/DiamondCheckPage.jsx";
import DiamondCheckResultPage from "./components/check_diamond/diamond_check_result/DiamondCheckResultPage.jsx";
import ScreenAppointmentForm from "./screens/Appointment/Form.jsx";
import ScreenRootLayout from "./screens/RootLayout.jsx";
import ScreenCalculatePage from "./screens/Calculate/Page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenRootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/appointment",
        element: <ScreenAppointmentForm />,
      },
      {
        path: "/diamond-calculate",
        element: <ScreenCalculatePage />,
      },
      {
        path: "/diamond-check",
        element: <DiamondCheckPage />,
      },
      {
        path: "/diamond-check/:id",
        element: <DiamondCheckResultPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
