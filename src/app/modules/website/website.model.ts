import { Schema, model } from "mongoose";
import { Website, WebsiteWithStatic } from "./website.interface";

const websiteSchema = new Schema<Website, WebsiteWithStatic>(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: String, required: true },
        link: { type: String, required: true },
        isDeleted: { type: Boolean, default: false }
    },
);


//Query middle wears
websiteSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
websiteSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
// the single value wont be available by aggregate by..aggregate works on pipeline
websiteSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } }); // if not equal = true , don't come
    next();
});

// NEW STATIC METHOD
websiteSchema.statics.isUserExists = async function (name: string): Promise<Website | null> {
    const existingUser = await this.findOne({ name: name });
    return existingUser;
};
const WebsiteModel = model<Website, WebsiteWithStatic>('data', websiteSchema);

export default WebsiteModel;