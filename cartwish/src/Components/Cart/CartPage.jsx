import React from "react";

import "./CartPage.css";

import remove from "../../assets/img/remove.png";
import Table from "../Common/Table";
import user from "../../assets/img/user.webp";
import QuantityInput from "../SingleProduct/QuantityInput";

const CartPage = () => {
  return (
    <section className="align-center cart-page">
      <div className="align-center user-info">
        <img src={user} alt="user profile" />
        <div>
          <p className="user-name">Harley</p>
          <p className="user-email">harley@gmail.com</p>
        </div>
      </div>
      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody>
          <tr>
            <td>iPhone 6</td>
            <td>$999</td>
            <td className="align-center table-quantity-input">
              <QuantityInput />
            </td>
            <td>$999</td>
            <td>
              <img
                src={remove}
                alt="remove icon"
                className="cart-remove-icon"
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <table className="cart-bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>$999</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart-bill-final">
            <td>Total</td>
            <td>$1004</td>
          </tr>
        </tbody>
      </table>
      <button className="search-button checkout-button">Check Out</button>
    </section>
  );
};

export default CartPage;
