import HomeView from "./components/HomeView";
import LoginView from "./components/LoginView";
import WrongUrlView from "./components/WrongUrlView";
import AboutUsView from "./components/AboutUsView";

const routes = [
  {
    path: "/home/:page",
    name: "Home",
    component: HomeView,
    exact: true,
  },
  {
    path: "/about-us",
    name: "Home",
    component: AboutUsView,
    exact: true,
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
    exact: true,
  },
  {
    path: "/*",
    name: "Wrong",
    component: WrongUrlView,
  },

  {
    component: WrongUrlView,
  },
];

export default routes;
