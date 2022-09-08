/**
 =========================================================
 * Material Kit 2 React - v2.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// eslint-disable-next-line import/no-cycle
import * as React from "react";
// eslint-disable-next-line import/no-cycle
import Presentation from "../../../pages/Presentation/Presentation";
// eslint-disable-next-line import/no-cycle
import AboutUsPage from "../../../pages/Presentation/pages/AboutUsPage";
// eslint-disable-next-line import/no-cycle
import PortfolioPage from "../../../pages/Presentation/pages/PortfolioPage";

// eslint-disable-next-line react/prop-types
function CenteredFooter({ company, routes, socials, light }) {
  const { href, name } = company;

  // eslint-disable-next-line no-shadow
  const renderRoutes = routes.map((route) => (
    <MKTypography
      key={route.name}
      component={Link}
      href={route.route}
      textAlign="center"
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {route.name}
    </MKTypography>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" pt={2} pb={3}>
      <MKTypography
        pb={2}
        textAlign="center"
        color={light ? "white" : "secondary"}
        fontWeight="bold"
      >
        АЖОЙИБ ТАКЛИФ 24 СОАТ ИЧИДА <br /> ЎРНАТАМИЗ ЁКИ ЖАЛЮЗИ МУТЛАҚО БЕПУЛ
      </MKTypography>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderRoutes}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={2}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            Project by{" "}
            <MKTypography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              {name}
            </MKTypography>
            .
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  company: {
    href: "https://taplink.cc/ibrokhim",
    name: "Fayzullayev",
  },
  routes: [
    {
      name: "Бош Сахифа",
      route: "/presentation",
      component: <Presentation />,
    },
    {
      name: "Биз Ҳақимизда",
      route: "/pages/landing-pages/aboutUs",
      component: <AboutUsPage />,
    },
    {
      name: "Портфолио",
      route: "/pages/landing-pages/portfolio",
      component: <PortfolioPage />,
    },
    {
      name: "Биз Билан Алоқа",
      route: "https://www.instagram.com/osonjaluzi/",
    },
  ],
  socials: [
    {
      icon: <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />,
      link: "https://www.facebook.com/Oson-Jaluzi-106546972064507/",
    },
    {
      icon: <i className="fab fa-tiktok" style={{ fontSize: "1.25rem" }} />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />,
      link: "https://www.instagram.com/osonjaluzi/",
    },
    {
      icon: <i className="fab fa-telegram" style={{ fontSize: "1.25rem" }} />,
      link: "https://t.me/osonjaluzi",
    },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  routes: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default CenteredFooter;
