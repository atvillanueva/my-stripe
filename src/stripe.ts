import env from "./env";
import Stripe from "stripe";

const stripe = new Stripe(env.STRIPE_SECRET_API_KEY, {
  apiVersion: "2023-08-16",
});

export default stripe;
