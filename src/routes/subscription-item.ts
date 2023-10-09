import express, { Request } from "express";
import Stripe from "stripe";
import stripe from "@/stripe";

const router = express.Router();

router.post(
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
