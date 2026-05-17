import { Router } from "express";
import { celebrate } from 'celebrate';
import { loginUserSchema, registerUserSchema } from "../validations/authValidation";
import { loginUser, logoutUser, refreshUserSession } from "../controllers/authController";
const router = Router();


router.post('/auth/register', celebrate(registerUserSchema))
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/refresh', refreshUserSession);
router.post('/auth/logout', logoutUser);
