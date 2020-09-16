import React from "react";

const style = {
  margin: "20px",
  padding: "5px 5px 0px 5px",
};

export default () => {
  return (
    <form
      method="POST"
      action="https://bitcoin.fidystep.com/api/v1/invoices"
      style={style}
    >
      <input
        type="hidden"
        name="storeId"
        value="FouwDZirxFEfBdjJHyAUh7r5yajGUsZHAnYLWLbNryEP"
      />
      <input type="hidden" name="price" value="1" />
      <input type="hidden" name="currency" value="USD" />
      <input
        type="image"
        name="submit"
        src="https://bitcoin.fidystep.com/img/paybutton/pay.svg"
        alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"
      ></input>
    </form>
  );
};
