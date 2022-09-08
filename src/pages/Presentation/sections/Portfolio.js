import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// eslint-disable-next-line import/no-duplicates
import { useState } from "react";
import axios from "axios";
// eslint-disable-next-line import/no-duplicates
import { useEffect } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import MKBox from "../../../components/MKBox";
import MKBadge from "../../../components/MKBadge";
import MKTypography from "../../../components/MKTypography";
import BackgroundBlogCard from "../../../examples/Cards/BlogCards/BackgroundBlogCard";
import MKButton from "../../../components/MKButton";

function Portfolio() {
  const [portfolioList, setPortfolio] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://45.79.22.179:5852/api/yourjaluzi/portfoliofront/list").then((response) => {
      setPortfolio(response.data.data);
    });
  }, []);

  const renderData = portfolioList.map(({ name, about, imageUrl }) => (
    <Grid item xs={12} md={6} lg={4} key={name}>
      <BackgroundBlogCard image={imageUrl} title={name} description={about} />
    </Grid>
  ));
  return (
    <MKBox component="section" pb={2}>
      <Container>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 4, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Янгиланган"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Биз хизмат кўрсатган ҳонадонлар
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Замонавий дизайнга ега жалюзилар
          </MKTypography>
        </Grid>
      </Container>
      <Container>
        <Grid item container spacing={3}>
          {renderData}
        </Grid>
        <Grid mt={7} container justifyContent="center" mx="auto">
          <MKButton
            variant="gradient"
            onClick={() => navigate(`/pages/landing-pages/portfolio`)}
            color="info"
          >
            барчасини кўриш
          </MKButton>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Portfolio;
