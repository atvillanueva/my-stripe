import express, { Request } from "express";
import Stripe from "stripe";
import stripe from "@/stripe";

const router = express.Router();

router.get(
  "/subscriptions/:subscriptionId",
  async (
    req: Request<
      { subscriptionId: string },
      Stripe.Response<Stripe.Subscription>
    >,
    res,
    next
  ) => {
    try {
      const { params } = req;
      const subscription = await stripe.subscriptions.retrieve(
        params.subscriptionId
      );

      res.json(subscription);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/subscriptions",
  async (
    req: Request<
      never,
      Stripe.Response<Stripe.Subscription>,
      Stripe.SubscriptionCreateParams
    >,
    res,
    next
  ) => {
    try {
      const { body } = req;
      const subscription = await stripe.subscriptions.create(body);

      res.json(subscription);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/subscriptions/:subscriptionId",
  async (
    req: Request<
      {
        subscriptionId: string;
      },
      Stripe.Response<Stripe.Subscription>,
      Stripe.SubscriptionUpdateParams
    >,
    res,
    next
  ) => {
    try {
      const { params, body } = req;
      // Use "SUNSCRIPTION ITEM ID" from stripe to update the quantity of the product
      // Use "PRICING API ID" from stripe to add a new product into subscription
      const subscription = await stripe.subscriptions.update(
        params.subscriptionId,
        body
      );

      res.json(subscription);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/subscriptions/subscription-schedule",
  async (
    req: Request<
      never,
      Stripe.Response<Stripe.SubscriptionSchedule>,
      Stripe.SubscriptionScheduleCreateParams
    >,
    res,
    next
  ) => {
    try {
      const { body } = req;
      const subscriptionSchedule = await stripe.subscriptionSchedules.create(
        body
      );

      res.json(subscriptionSchedule);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
