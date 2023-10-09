import express, { Request } from "express";
import Stripe from "stripe";
import stripe from "../stripe";

const router = express.Router();

router.post(
  "/test-clocks",
  async (
    req: Request<any, any, Stripe.TestHelpers.TestClockCreateParams>,
    res,
    next
  ) => {
    try {
      const { body } = req;
      const testClock = await stripe.testHelpers.testClocks.create(body);

      res.json(testClock);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/test-clocks/:testClockId",
  async (
    req: Request<
      { testClockId: string },
      Stripe.Response<Stripe.TestHelpers.TestClock>,
      Stripe.TestHelpers.TestClockAdvanceParams
    >,
    res,
    next
  ) => {
    try {
      const { params, body } = req;
      const testClock = await stripe.testHelpers.testClocks.advance(
        params.testClockId,
        body
      );

      res.json(testClock);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/test-clocks/:testClockId",
  async (
    req: Request<
      { testClockId: string },
      Stripe.Response<Stripe.TestHelpers.DeletedTestClock>
    >,
    res,
    next
  ) => {
    try {
      const { params } = req;
      const testClock = await stripe.testHelpers.testClocks.del(
        params.testClockId
      );

      res.json(testClock);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
