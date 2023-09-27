import { Typography, Box ,styled} from "@mui/material";
import { Divider } from "@mui/material";
import {LocalOffer as Badge }from "@mui/icons-material";

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    &>p{
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;


const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Divider style={{ margin: "20px" }} />
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </Typography>
        <Typography>
          <StyledBadge />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </Typography>
        <Typography>
          <StyledBadge />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </Typography>
      </SmallText>
      <Divider style={{ margin: "20px" }} />
      <Typography style={{ fontSize: "18px", marginBottom: "10px" }}>
        Product Description
      </Typography>
      <Typography style={{ fontSize: "16px", marginBottom: "10px" }}>
        {product.description}
      </Typography>
    </>
  );
};

export default ProductDetail;
