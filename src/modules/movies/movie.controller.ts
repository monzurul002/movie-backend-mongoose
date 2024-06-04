import { Request, Response } from "express";
import { MovieServices } from "./movie.service";


const createMovie = async (req: Request, res: Response) => {

    try {
        const result = await MovieServices.createMovie(req.body)

        res.json({
            success: true,
            message: "Movie is created successfully",
            data: result

        })

    }
    catch (err) {
        res.json({
            success: true,
            message: "Movie does n't founded",
            err: err
        })
    }

}

const getAllMovie = async (req: Request, res: Response) => {
    try {

        const result = await MovieServices.getAllMovie()
        res.json({
            success: true,
            message: "All movie founded",
            data: result
        })

    }
    catch (err) {
        res.json({
            success: true,
            message: "All movie doest not founded",
            err: err
        })
    }
}

// const getMovieById = async (req: Request, res: Response) => {
//     try {
//         const { movieId } = req.params
//         const result = await MovieServices.getMovieById(movieId);
//         res.json({
//             success: true,
//             message: "Student has been founded.",
//             data: result
//         })

//     }
//     catch (error) {

//     }
// }
const getMovieBySlug = async (req: Request, res: Response) => {
    try {
        const { slug } = req.params
        const result = await MovieServices.getMovieBySlug(slug);
        res.json({
            success: true,
            message: "Student has been founded by slug.",
            data: result
        })

    }
    catch (error) {

    }
}

export const MovieControllers = {
    createMovie, getAllMovie, getMovieBySlug
}