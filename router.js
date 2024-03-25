import { Router } from "express";
import multer from "multer";
import  * as requestHandler  from "./requestHandler.js";
const router=Router();

const upload = multer({});

router.route('/adminregister').post(upload.any(),requestHandler.adminRegister);


export default router;