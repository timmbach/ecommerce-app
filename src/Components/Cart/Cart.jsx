import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart.
      <Link to="/" style={{ textDecoration: "none" }}>
        Try adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            type="button"
            className={classes.emptyButton}
            size="large"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            type="button"
            className={classes.checkoutButton}
            size="large"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading...";

  const isEmpty = !cart.line_items.length;
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
