import { PalmtreeIcon, InfoIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "African Adventures",
    to: "/",
    icon: <PalmtreeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
];
