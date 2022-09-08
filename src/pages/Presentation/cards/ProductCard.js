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

// react-router components

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";

function ProductCard({ imageUrl, title, price, sunProtection, category, color, about }) {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={12} lg={5} py={4} pl={4} pr={{ xs: 4, sm: 4, md: 4, lg: 2 }}>
          <MKBox
            component="img"
            src={imageUrl}
            alt={title}
            height="100%"
            width="100%"
            borderRadius="12px"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <MKBox pt={3} pl={3}>
            <MKTypography
              display="inline"
              variant="h2"
              textTransform="capitalize"
              fontWeight="bold"
            >
              {title}
            </MKTypography>
          </MKBox>
          <MKBox pl={3}>
            <Grid item>
              <MKTypography component="span" variant="h5" fontWeight="bold" mr={1}>
                Ранги:
              </MKTypography>
              <MKTypography
                textTransform="capitalize"
                component="span"
                variant="h5"
                fontWeight="light"
              >
                {color}
              </MKTypography>
            </Grid>
          </MKBox>
          <MKBox pl={3}>
            <Grid item>
              <MKTypography component="span" variant="h5" fontWeight="bold" mr={1}>
                Сатегория:
              </MKTypography>
              <MKTypography
                component="span"
                textTransform="capitalize"
                variant="h5"
                fontWeight="light"
              >
                {category}
              </MKTypography>
            </Grid>
          </MKBox>
          <MKBox pl={3}>
            <Grid item>
              <MKTypography component="span" variant="h5" fontWeight="bold" mr={1}>
                Қуёшдан химоя:
              </MKTypography>
              <MKTypography
                component="span"
                textTransform="capitalize"
                variant="h5"
                fontWeight="light"
              >
                {sunProtection}
              </MKTypography>
            </Grid>
          </MKBox>
          <MKBox pl={3}>
            <Grid item>
              <MKTypography component="span" variant="h5" fontWeight="bold" mr={1}>
                Нархи:
              </MKTypography>
              <MKTypography component="span" variant="h5" fontWeight="light">
                {price} сўм 1 м/кв
              </MKTypography>
            </Grid>
          </MKBox>
          <MKBox py={2} px={3}>
            <Grid item>
              <MKTypography component="span" variant="h5" fontWeight="bold" mr={1}>
                Батафсил:
              </MKTypography>
              <MKTypography component="span" variant="h5" fontWeight="light">
                {about}
              </MKTypography>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sunProtection: PropTypes.string.isRequired,
};

export default ProductCard;
