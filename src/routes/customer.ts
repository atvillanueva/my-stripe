import express, { Request } from "express";
import Stripe from "stripe";
import stripe from "@/stripe";

const router = express.Router();

router.post(
  "/customers",
  async (
    req: Request<
      never,
      Stripe.Response<Stripe.Customer>,
      Stripe.CustomerCreateParams
    >,
    res,
    next
  ) => {
    try {
      const { body } = req;
      const customer = await stripe.customers.create(body);

      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
