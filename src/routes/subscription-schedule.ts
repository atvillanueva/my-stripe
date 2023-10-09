import express, { Request } from "express";
import Stripe from "stripe";
import stripe from "@/stripe";

const router = express.Router();

router.get(
  "/subscription-schedules/:subscriptionScheduleId",
  async (
    req: Request<
      {
        subscriptionScheduleId: string;
      },
      Stripe.Response<Stripe.SubscriptionSchedule>
    >,
    res,
    next
  ) => {
    try {
      const { params } = req;
      const subscriptionSchedule = await stripe.subscriptionSchedules.retrieve(
        params.subscriptionScheduleId
      );

      res.json(subscriptionSchedule);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/subscription-schedules/:subscriptionScheduleId",
  async (
    req: Request<
      {
        subscriptionScheduleId: string;
      },
      Stripe.Response<Stripe.SubscriptionSchedule>,
      Stripe.SubscriptionScheduleUpdateParams
    >,
    res,
    next
  ) => {
    try {
      const { params, body } = req;
      const subscriptionSchedule = await stripe.subscriptionSchedules.update(
        params.subscriptionScheduleId,
        body
      );

      res.json(subscriptionSchedule);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
