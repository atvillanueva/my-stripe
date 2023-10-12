import express, { Request } from "express";
import Stripe from "stripe";
import stripe from "@/stripe";

const router = express.Router();

interface ModifyPlanBody {
  subscriptionId: string;
  planId: number;
  isRTGAddonEnabled: boolean;
}

router.post("/modify-plan", async (req: Request<never, any, ModifyPlanBody>, res, next) => {
  try {
    const { body } = req;
    const subscription = await stripe.subscriptions.retrieve(
      body.subscriptionId
    );

    // const currentPhaseItems = subscription.
  } catch (error) {
    next(error);
  }
});

export default router;