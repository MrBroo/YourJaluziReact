// eslint-disable-next-line import/no-cycle
import Presentation from "./pages/Presentation/Presentation";
// eslint-disable-next-line import/no-cycle
import AboutUsPage from "./pages/Presentation/pages/AboutUsPage";
// eslint-disable-next-line import/no-cycle
import PortfolioPage from "./pages/Presentation/pages/PortfolioPage";

const routes = [
  {
    name: "Бош Сахифа",
    route: "/",
    component: <Presentation />,
  },
  {
    name: "Биз ҳақимизда",
    route: "/pages/landing-pages/aboutUs",
    component: <AboutUsPage />,
  },
  {
    name: "Портфолио",
    route: "/pages/landing-pages/portfolio",
    component: <PortfolioPage />,
  },
];

export default routes;
