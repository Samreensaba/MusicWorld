/** @format */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51LT2I7HBWrHfBKEe3zRLC7eh7KrL1jpOqHx2aGEojpvQhSOQ3uHhQOuE7AkKhCZisIxpoGygP6GzJE43fN5C07iw00TDjY0fuq";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
