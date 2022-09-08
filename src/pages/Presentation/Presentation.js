/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Presentation page sections
import Category from "pages/Presentation/sections/Category";

// eslint-disable-next-line import/no-cycle
import routes from "routes";

import bgImage from "assets/images/stylish-blinds.jpg";
import * as React from "react";
import Card from "@mui/material/Card";
import Information from "./sections/Information";
import Contact from "./sections/Contact";
// eslint-disable-next-line import/no-cycle
import CenteredFooter from "../../examples/Footers/CenteredFooter/footer";
import TimeLine from "./sections/TimeLine";
import Portfolio from "./sections/Portfolio";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="65vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.secondary.main, 0.4),
              rgba(gradients.secondary.state, 0.4)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid item container sm={16} md={16} lg={9} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              fontWeight="light"
              textAlign="center"
              mt={{ lg: -4, md: -4, sm: -4, xs: -1 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              АЖОЙИБ ТАКЛИФ <br /> 24 СОАТ ИЧИДА ЎРНАТАМИЗ <br /> ЁКИ ЖАЛЮЗИ БЕПУЛ <br />
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -5,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container sx={{ mb: 4, pt: 4 }}>
          <Category />
          <TimeLine />
          <Information />
          <Contact />
          <Portfolio />
        </Container>
      </Card>
      <MKBox>
        <CenteredFooter />
      </MKBox>
    </>
  );
}

export default Presentation;
