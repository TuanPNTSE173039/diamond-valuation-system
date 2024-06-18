// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import CalculatePage from "./components/Calculate/Page.jsx";
import DiamondCheckInputPage from "./components/DiamondCheck/CheckInput/Page.jsx";
import DiamondCheckResultPage from "./components/DiamondCheck/CheckResult/Page.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import ValuationRequestList from "./components/ManageAppointment/List.jsx";
import RootLayout from "./components/RootLayout.jsx";
import AppointmentForm from "./components/Appointment/Form.jsx";
import RequestItem from "./components/ManageAppointment/Item.jsx";
import AuthSignIn from "./components/Auth/SignIn.jsx";
import AuthGuard from "./components/Auth/AuthGuard.jsx";
import GuestGuard from "./components/Auth/GuestGuard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "appointment",
        element: (
          <AuthGuard>
            <AppointmentForm />
          </AuthGuard>
        ),
      },
      {
        path: "check",
        children: [
          {
            index: true,
            element: <DiamondCheckInputPage />,
          },
          {
            path: ":certificateID",
            element: <DiamondCheckResultPage />,
          },
        ],
      },
      {
        path: "calculate",
        element: <CalculatePage />,
      },
      {
        path: "appointments",
        element: (
          <AuthGuard>
            <ValuationRequestList />
          </AuthGuard>
        ),
        children: [
          {
            path: ":requestID",
            element: <RequestItem />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: (
          <GuestGuard>
            <AuthSignIn />
          </GuestGuard>
        ),
      },
      // {
      //   path: "register",
      //   element: (
      //       <GuestGuard>
      //         <Register />
      //       </GuestGuard>
      //   ),
      // },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
