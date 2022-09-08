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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// eslint-disable-next-line import/no-cycle
import routes from "routes";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import bgImage from "assets/images/img6-auto_width_700.jpg";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import MKTypography from "../../../components/MKTypography";
import ShortProductCard from "../cards/ShortProductCard";
import CenteredFooter from "../../../examples/Footers/CenteredFooter/footer";
import Breadcrumbs from "../../../examples/Breadcrumbs";

function AboutUs() {
  const [shortProductList, setShortProductList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getShortProduct = async () => {
      axios
        .get(`http://45.79.22.179:5852/api/yourjaluzi/category/shortProduct/${id}`)
        .then((response) => {
          setShortProductList(response.data.data);
        });
    };
    getShortProduct();
  }, []);

  const navigate = useNavigate();

  const renderData = shortProductList.map(
    // eslint-disable-next-line no-shadow
    ({ imageUrl, name, price, sunProtection, id }) => (
      <Grid item xs={12} sm={6} md={6} lg={3} key={name}>
        <ShortProductCard
          imageUrl={imageUrl}
          title={name}
          price={price}
          sunProtection={sunProtection}
          onClick={() => navigate(`/booking/pages/landing-pages/shortProduct/${id}`)}
        />
      </Grid>
    )
  );
  return (
    <>
      <DefaultNavbar routes={routes} transparent relative />
      <MKBox
        minHeight="20rem"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={9} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Жалюзилар
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent="center" mx="auto">
            <Breadcrumbs
              routes={[{ label: "Бош саҳифа", route: "/presentation" }, { label: "Жалюзилар" }]}
            />
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
        <Container>
          <Grid container py={5} spacing={3}>
            {renderData}
          </Grid>
        </Container>
      </Card>
      <MKBox>
        <CenteredFooter />
      </MKBox>
    </>
  );
}

export default AboutUs;
