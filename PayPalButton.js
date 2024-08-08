import React, { useRef, useEffect } from "react";
import loadPayPalScript from "./loadPayPalScript";

const PayPalButton = ({ onSuccess, onError }) => {
  const paypalRef = useRef();

  useEffect(() => {
    const initPayPal = async () => {
      try {
        await loadPayPalScript();

        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "100.00",
                      currency_code: "USD",
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              console.log("Payment approved:", data);
              const order = await actions.order.capture();
              console.log("Captured order:", order);
              onSuccess(order);
            },
            onError: (err) => {
              console.error("Payment error:", err);
              onError(err);
            },
          })
          .render(paypalRef.current);
      } catch (error) {
        console.error("Failed to load PayPal script:", error);
      }
    };

    initPayPal();
  }, [onSuccess, onError]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;
