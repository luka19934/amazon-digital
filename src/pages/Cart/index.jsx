import { Add, DeleteForever, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import useCart from "../../hooks/UseCart";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { add, decrement, remove, totalPrice, cart, numProducts } = useCart();
  const navigate = useNavigate();

  if (!numProducts)
    return <h1 className="emptyCartText">There are no items in the cart...</h1>;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow
                key={item.product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <div
                    className="productImageAndTitle"
                    onClick={() => navigate(`/product/${item.product.id}`)}
                  >
                    <img src={item.product.thumbnail} width={100} />
                    <h5>{item.product.title}</h5>
                  </div>
                </TableCell>
                <TableCell align="left">${item.product.price}</TableCell>
                <TableCell align="left">
                  <div className="quantitySelector">
                    <IconButton
                      disabled={item.quantity < 2}
                      onClick={() => decrement(item.product.id)}
                    >
                      <Remove />
                    </IconButton>
                    <span>{item.quantity}</span>
                    <IconButton
                      disabled={item.quantity >= item.product.stock}
                      onClick={() => add(item.product)}
                    >
                      <Add />
                    </IconButton>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    size="large"
                    onClick={() => remove(item.product.id)}
                  >
                    <DeleteForever />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="total">
        Total: <b style={{ color: "green" }}>${totalPrice}</b>
      </div>
    </>
  );
};

export default Cart;
