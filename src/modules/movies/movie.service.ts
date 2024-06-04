import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import { format } from "date-fns";
import slugify from "slugify";
const createMovie = async (payload: TMovie) => {

    const date = format(payload.releaseDate, "dd-MM-yyyy");
    const slug = slugify(`${payload.title}-${date}`, { lower: true })

    const result = await Movie.create({ ...payload, slug });
    return result
}

const getAllMovie = async () => {
    const result = await Movie.find();
    return result
}
const getMovieBySlug = async (slug: string) => {
    // title,releasea
    const result = await Movie.findOne({ slug })
    return result
}

// const getMovieById = async (id: string) => {
//     const result = await Movie.findById({ _id: id })
//     return result
// }
export const MovieServices = {
    createMovie, getAllMovie, getMovieBySlug
}