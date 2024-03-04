import express from "express";
import cors from "cors";
import { WebsiteRoutes } from "./app/modules/website/website.route";


const app = express();

// Parsers
app.use(express.json());  // JSON parse will happen
app.use(cors());

// Application routes
// app.use('/api/v1/students', StudentRoutes); // Uncomment and replace with the correct import if needed
app.use('/api/v1/website', WebsiteRoutes);

app.get('/', (req, res) => {
    res.send('Hello World! How are you?');
});

export default app;
