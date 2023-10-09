import express from "express";

import customerRouter from "@/routes/customer";
import invoiceRouter from "@/routes/invoice";
import subscriptionItemRouter from "@/routes/subscription-item";
import subscriptionScheduleRouter from "@/routes/subscription-schedule";
import subscriptionRouter from "@/routes/subscription";
import testClockRouter from "@/routes/test-clock";

const router = express.Router();

router.use(customerRouter);
router.use(invoiceRouter);
router.use(subscriptionItemRouter);
router.use(subscriptionScheduleRouter);
router.use(subscriptionRouter);
router.use(testClockRouter);

export default router;
