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
      const upcomingInvoice = await stripe.invoices.retrieveUpcoming(body);

      res.send(upcomingInvoice);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/invoices/upcoming/items",
  async (
    req: Request<
      never,
      Stripe.Response<Stripe.ApiList<Stripe.InvoiceLineItem>>,
      Stripe.InvoiceListUpcomingLinesParams 
    >,
    res,
    next
  ) => {
    try {
      const { body } = req;
      const upcomingInvoiceLineItems = await stripe.invoices.listUpcomingLines(body);

      res.send(upcomingInvoiceLineItems);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
