import express from "express";
import propertiesRoutes from "./routes/properties.routes";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:3900",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

app.use("/properties", propertiesRoutes);

export default app;