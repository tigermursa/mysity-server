import { z } from "zod";

const WebsiteValidationZodSchema = z.object({
    image: z.string(),
    name: z.string(),
    category: z.string(),
    link: z.string(),
    isDeleted: z.boolean().default(false),
});

export default WebsiteValidationZodSchema;
