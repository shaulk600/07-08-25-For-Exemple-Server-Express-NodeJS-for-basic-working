import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: './.env' })

import configRoute from "./routes/configRoute.js";

const PORT = process.env.PORT;
const app = express();

// עבור body for HTML
app.use(express.urlencoded({extended:true}));

app.use(express.json());
// app.use();
configRoute(app);

//במידה וקיים תיקיית 
// public עבור html
//  - ישלח דיפולטיבי
// זה חייב להיות אחרי הניתובים 
app.use(express.static('./public'));
app.use((req, res) => {
    res.status(404).json({ msg: 'Route not found' })
})

app.listen(PORT, () => {
    console.log(`server to -other- running port: ${PORT}`);
})