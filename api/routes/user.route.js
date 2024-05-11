import express from "express";
import { deleteUsers, getUser, getUsers, updateUsers, savePost } from "../controllers/user.controller.js";
import { verifyToken } from './../middleware/verifyToken.js';


const router = express.Router();

router.get("/", getUsers);
router.get("/:id", verifyToken, getUser);
router.put("/:id", verifyToken,  updateUsers);
router.delete("/:id", verifyToken,  deleteUsers);
router.post("/save", verifyToken,  savePost);

export default router;