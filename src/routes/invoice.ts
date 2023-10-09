import express, { Request } from "express";
import Stripe from "stripe";
import stripe from "@/stripe";

const router = express.Router();

router.post(
  "/invoices/upcoming",
  async (
    req: Request<
      never,
      Stripe.Response<Stripe.UpcomingInvoice>,
      Stripe.InvoiceRetrieveUpcomingParams
    >,
    res,
    next
  ) => {
    try {
      const { body } = req;
      // const invoice = await stripe.invoices.retrieveUpcoming({
      // subscription_prorate: true,
      // customer: req.body.customerId,
      // subscription: req.body.subscriptionId,
      // subscription_items: [
      //   {
      //     id: subscription.items.data[0].id,
      //     clear_usage: true,
      //     deleted: true,
      //   },
      //   {
      //     price: process.env[req.body.newPriceId],
      //     deleted: false,
      //   },
      // ],
      // });
      const invoice = await stripe.invoices.retrieveUpcoming(body);

      res.send(invoice);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
