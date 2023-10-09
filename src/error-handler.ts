import { Request, Response, NextFunction } from "express";

function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.clear();
  console.log(error);

  res.status(500).json(error);
}

export default errorHandler;
