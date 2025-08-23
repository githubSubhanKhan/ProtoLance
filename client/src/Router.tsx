import { createBrowserRouter, Navigate } from "react-router-dom";
import Applayout from "./components/layouts/AppLayout";
import NoMatch from "./pages/NoMatch";
import Error500 from "./pages/Error500";
import Services from "./components/layouts/Services";
import AboutUs from "./components/layouts/AboutUs";
import OurWork from "./components/layouts/OurWork";
import Testimonials from "./components/layouts/Testimonials";
import ContactUs from "./components/layouts/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },

  {
    path: "/work",
    element: <OurWork/>,
  },

  {
    path: "/testimonials",
    element: <Testimonials/>,
  },
  {
    path: "/contact",
    element: <ContactUs/>,
  },
  {
    path: "/error", // ✅ NEW
    element: <Error500 />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
], {
  basename: global.basename
});