/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 ========================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CenteredBlogCard from "../cards/CategoryCard";
import MKBadge from "../../../components/MKBadge";
import MKTypography from "../../../components/MKTypography";

function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios.get("http://45.79.22.179:5852/api/yourjaluzi/category/list").then((response) => {
      setCategoryList(response.data.data);
    });
  }, []);
  const navigate = useNavigate();

  const renderData = categoryList.map(({ imageUrl, name, id }) => (
    <Grid item xs={12} md={6} lg={4} key={name}>
      <CenteredBlogCard
        title={name}
        onClick={() => navigate(`/pages/landing-pages/${id}`)}
        imageUrl={imageUrl}
      />
    </Grid>
  ));
  return (
    <>
      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: "center", py: 4, mx: "auto", px: 0.75 }}
      >
        <MKBadge
          variant="contained"
          color="info"
          badgeContent="Янгиланган"
          container
          sx={{ mb: 2 }}
        />
        <MKTypography variant="h2" fontWeight="bold">
          Жалюзилар
        </MKTypography>
      </Grid>
      <Grid container spacing={3}>
        {renderData}
      </Grid>
    </>
  );
}

export default Category;
