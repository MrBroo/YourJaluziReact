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

function CenteredBlogCard({ imageUrl, title, ...rest }) {
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
          borderRadius="15px 15px 0 0"
          position="relative"
          width="100%"
          zIndex={1}
        />
      </MKBox>
      <MKBox py={2} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
          {title}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CenteredBlogCard;
