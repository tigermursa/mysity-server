import { ObjectId } from "mongoose";
import { Website } from "./website.interface";
import WebsiteModel from "./website.model";

//post
const createWebsiteIntoDB = async (data: Website) => {
    if (await WebsiteModel.isUserExists(data.name)) {
        throw new Error("Sorry this Id user already exist");
    }
    const result = await WebsiteModel.create(data) //builtin static method
    return result;
}



// getAll
const getAllWebsiteFromDB = async () => {
    const result = await WebsiteModel.find();
    return result;
}

// getSingle
const getSingleWebsiteFromDB = async (id: string) => {
    const result = await WebsiteModel.findOne({ _id: id });
    return result;
}

// delete
const deleteWebsiteFromDB = async (_id: string) => {
    const result = await WebsiteModel.updateOne({ _id }, { isDeleted: true });
    return result;
}

//update 
const updateWebsiteFromDB = async (_id: string | ObjectId, updatedData: Partial<Website>) => {
    try {
        const result = await WebsiteModel.updateOne({ _id }, { $set: updatedData });
        return result;
    } catch (error: any) {
        console.error("Error updating Website:", error.message);
        throw new Error("Error updating Website: " + error.message);
    }
};





export const WebsiteServices = {
    createWebsiteIntoDB,
    getAllWebsiteFromDB,
    getSingleWebsiteFromDB,
    deleteWebsiteFromDB,
    updateWebsiteFromDB
}