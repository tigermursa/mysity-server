import express from "express";
import { WebsiteController } from "./website.controller";

const router = express.Router()


router.post("/create", WebsiteController.createWebsite);
router.get("/get", WebsiteController.getAllWebsites)
router.get("/:studentId", WebsiteController.getSingleWebsite)
router.delete("/:studentId", WebsiteController.deleteWebsite)
router.patch("/:studentId", WebsiteController.updateWebsite)

export const WebsiteRoutes = router;