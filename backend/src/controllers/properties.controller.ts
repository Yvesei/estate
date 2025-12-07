import { Request, Response, NextFunction } from "express";
import { PropertiesService } from "../services/properties.service";
import { createPropertySchema, updatePropertySchema } from "../schemas/property.schema";
import { ZodError } from "zod";

export class PropertiesController {
  private service: PropertiesService;

  constructor() {
    this.service = new PropertiesService();
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const properties = await this.service.getAllProperties();
      res.status(200).json({
        success: true,
        data: properties,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const property = await this.service.getPropertyById(id);

      if (!property) {
        res.status(404).json({
          success: false,
          error: "not found",
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: property,
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedData = createPropertySchema.parse(req.body);
      const property = await this.service.createProperty(validatedData);

      res.status(201).json({
        success: true,
        data: property,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          error: "Validation failed",
          details: error.issues,
        });
        return;
      }
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const validatedData = updatePropertySchema.parse(req.body);

      const property = await this.service.updateProperty(id, validatedData);

      if (!property) {
        res.status(404).json({
          success: false,
          error: "Property not found",
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: property,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          error: "Validation failed",
          details: error.issues,
        });
        return;
      }
      next(error);
    }
  }
}