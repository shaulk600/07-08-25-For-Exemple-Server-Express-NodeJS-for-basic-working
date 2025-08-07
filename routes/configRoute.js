// import {  } from "../"; // עבור CTRL
// import {  } from "./outerRoute.js"; // עבור route other

export default function configRoutes(app) {

    app.use('/', (req,res)=>{
        res.status(200).json({msg: 'OK'})
    });

}