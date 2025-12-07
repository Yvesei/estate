import { Request, Response, NextFunction } from "express";
import { PropertiesService } from "../services/properties.service";

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
}