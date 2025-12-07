import express from "express";
import propertiesRoutes from "./routes/properties.routes";

const app = express();

app.use(express.json());

app.use("/properties", propertiesRoutes);

export default app;