import { Router } from "express";
import { registration } from '../controllers/controllers.js';

const router = new Router();

router.post("/registration", registration);

export { router };