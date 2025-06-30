import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.mjs"
import categoryRouter from "./routes/categoryRoutes.mjs"
import taskRouter from "./routes/taskRoutes.mjs"
import cors from "cors";

const app = express();

//CORS
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true,               // allow credentials (cookies)
  })
);

//parsers
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/tasks", taskRouter);



app.use((err, req, res, next) => {
  const {
    statusCode = 500,
    status = "error",
    message = "Internal server error",
  } = err;

  res.status(statusCode).json({
    status: status,
    message: message,
  });
});

export default app;
