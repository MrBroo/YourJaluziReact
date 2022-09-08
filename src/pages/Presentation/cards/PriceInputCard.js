import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import MKBox from "../../../components/MKBox";
import ProductCard from "./ProductCard";

// eslint-disable-next-line react/prop-types
function PriceInputCard({ price }) {
  return (
    <Grid container>
      <MKBox py={1} pl={3}>
        {price}
      </MKBox>
    </Grid>
  );
}

// Typechecking props for the CenteredBlogCard
ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
};
export default PriceInputCard;
