import React from "react";
import Options from "./Options";
import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderEntry = () => {
  const { totals } = useOrderDetails();
  return (
    <>
      <div>
        <Options optionType="scoops" />
        <Options optionType="toppings" />
        <h2>Grand total:{formatCurrency(totals.scoops + totals.toppings)}</h2>
      </div>
    </>
  );
};

export default OrderEntry;
