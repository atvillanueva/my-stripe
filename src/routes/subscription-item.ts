import express, { Request } from "express";
import Stripe from "stripe";
import stripe from "@/stripe";

const router = express.Router();

router.post(
  "/subscription-items",
  async (
    req: Request<
      never,
      Stripe.Response<Stripe.SubscriptionItem>,
      Stripe.SubscriptionItemCreateParams
    >,
    res,
    next
  ) => {
    try {
      const { body } = req;
      const subscriptionItem = await stripe.subscriptionItems.create(
        body
      );
      res.json(subscriptionItem);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/subscription-items/:subscriptionItemId",
  async (
    req: Request<
      { subscriptionItemId: string },
      Stripe.Response<Stripe.SubscriptionItem>,
      Stripe.SubscriptionItemUpdateParams
    >,
    res,
    next
  ) => {
    try {
      const { params, body } = req;
      // Use "SUBSCRIPTION ITEM ID" from stripe to update the quantity of the product
      // Use "PRICING API ID" from stripe to add a new product into subscription
      const subscriptionItem = await stripe.subscriptionItems.update(
        params.subscriptionItemId,
        body
      );
      res.json(subscriptionItem);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
