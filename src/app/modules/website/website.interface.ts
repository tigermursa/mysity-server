import { Model } from "mongoose";



export interface WebsiteWithStatic extends Model<Website> {
    isUserExists(id: string): Promise<Website | null>;
}

export type Website = {
    image: string;
    name: string;
    category: string;
    link: string;
    isDeleted: boolean;
};






