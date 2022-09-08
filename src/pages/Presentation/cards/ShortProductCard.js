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
import * as React from "react";

function ShortProductCard({ imageUrl, title, price, sunProtection, ...rest }) {
  return (
    <Card
      {...rest}
      sx={{
        cursor: "pointer",
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(1deg) translate3d(0px, -12px, 0px)",
        },
      }}
    >
      <MKBox position="relative" borderRadius="lg">
        <MKBox
          component="img"
          src={imageUrl}
          alt={title}
          height="cover"
          width="100%"
          position="relative"
          zIndex={1}
        />
      </MKBox>
      <MKBox pb={3} pt={1}>
        <Grid container justifyContent="center" mx="auto">
          <MKTypography display="inline" variant="h4" fontWeight="bold" pb={2}>
            {title}
          </MKTypography>
        </Grid>
        <Grid item container px={1} justifyContent="center" mx="auto">
          <MKTypography component="span" variant="h5" fontWeight="bold" mr={0.5}>
            Нархи:
          </MKTypography>
          <MKTypography component="span" variant="h5" fontWeight="light">
            {price} сўм
          </MKTypography>
        </Grid>
        <Grid item container px={1} justifyContent="center" mx="auto">
          <MKTypography component="span" variant="h5" fontWeight="bold" mr={0.5}>
            Қуёшдан химоя:
          </MKTypography>
          <MKTypography component="span" textTransform="capitalize" variant="h5" fontWeight="light">
            {sunProtection}
          </MKTypography>
        </Grid>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
ShortProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sunProtection: PropTypes.string.isRequired,
};

export default ShortProductCard;
