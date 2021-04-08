import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

const CartItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h4" style={{ fontWeight: "500" }}>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
