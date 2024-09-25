import { Router } from "express";
import { getPersona, getPersonas, postPersona } from "../controllers/personas";
const router=Router();

router.get('/',getPersonas);
router.get('/:id',getPersona);
router.post('/',postPersona);

export default router;