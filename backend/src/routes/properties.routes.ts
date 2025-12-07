import { Router } from "express";
import { PropertiesController } from "../controllers/properties.controller";

const router = Router();
const controller = new PropertiesController();

router.get("/", (req, res, next) => controller.getAll(req, res, next));

router.get("/:id", (req, res, next) => controller.getById(req, res, next));



export default router;