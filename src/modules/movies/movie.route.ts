import express, { Request, Response } from "express"
import { Movie } from "./movie.model";
import { MovieControllers } from "./movie.controller";


const router = express.Router()

router.post("/", MovieControllers.createMovie)
router.get("/", MovieControllers.getAllMovie)
// router.get("/:movieId", MovieControllers.getMovieById)
router.get("/:slug", MovieControllers.getMovieBySlug)
export const MovieRoutes = router