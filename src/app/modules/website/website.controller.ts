import { Request, Response } from "express";
import WebsiteValidationZodSchema from "./website.validation";
import { WebsiteServices } from "./website.services";

const createWebsite = async (req: Request, res: Response) => {
    try {
        //data will come
        const sites = req.body;
        //will call services 
        const zodErrorData = WebsiteValidationZodSchema.parse(sites);
        const result = await WebsiteServices.createWebsiteIntoDB(zodErrorData);
        //sending response 
        res.status(200).json({
            success: true,
            message: "website card data created successfully !",
            data: result,
        })
    } catch (err: any) {
        res.status(200).json({
            success: false,
            message: "something went wrong into the input data !",
            error: err.message,
        })
    }
};


const getAllWebsites = async (req: Request, res: Response) => {
    try {
        const result = await WebsiteServices.getAllWebsiteFromDB()
        //sending response 
        res.status(200).json({
            success: true,
            message: "Websites Getting ",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: true,
            message: "something went wrong ! ",
            error: error.message,
        })
    }
};


const getSingleWebsite = async (req: Request, res: Response) => {
    try {
        const siteId = req.params.studentId;
        const result = await WebsiteServices.getSingleWebsiteFromDB(siteId);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Single Websites Getting ",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: true,
            message: "something went wrong ! ",
            error: error.message,
        })
    }
}

const deleteWebsite = async (req: Request, res: Response) => {
    try {
        const siteId = req.params.studentId;
        const result = await WebsiteServices.deleteWebsiteFromDB(siteId);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            data: result,
        })
    } catch (error: any) {
        res.status(500).json({
            success: true,
            message: "something went wrong ! ",
            error: error.message,
        })
    }
}


//update 
const updateWebsite = async (req: Request, res: Response) => {
    try {
        const siteId = req.params.studentId;
        const updatedData = req.body; // Assuming the updated data is present in the request body
        const result = await WebsiteServices.updateWebsiteFromDB(siteId, updatedData);
        //sending response 
        res.status(200).json({
            success: true,
            message: "Website updated successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while updating the website",
            error: error.message,
        });
    }
};



export const WebsiteController = {
    createWebsite,
    getAllWebsites,
    getSingleWebsite,
    deleteWebsite,
    updateWebsite
}