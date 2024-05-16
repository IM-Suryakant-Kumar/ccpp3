import "express-async-errors";
import "dotenv/config";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middlewares";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

// routers

// error handler middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// server listening
const PORT = process.env.PORT;
const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
