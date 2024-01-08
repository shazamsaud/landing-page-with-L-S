import  express  from "express";
import { updateUser } from "../controller/user-controller.js";



const userRouter = express.Router();


userRouter.post('/update/:id',updateUser);

export default userRouter;