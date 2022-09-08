// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BackgroundBlogCard({ image, title, description }) {
  return (
    <Card
      sx={{
        backgroundImage: ({ palette: { black }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.5))}, url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <MKBox pt={3} px={3} pb={1}>
        <MKBox mt="200px">
          <MKTypography
            textTransform="uppercase"
            variant="h5"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["2xl"],
              },
            })}
          >
            {title}
          </MKTypography>
          <MKTypography variant="body2" textTransform="uppercase" color="white" mt="-3px">
            {description}
          </MKTypography>
        </MKBox>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the BackgroundBlogCard
BackgroundBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BackgroundBlogCard;
