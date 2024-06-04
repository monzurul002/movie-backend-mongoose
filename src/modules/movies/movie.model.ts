import mongoose, { model } from 'mongoose';
import { TMovie, TReview } from './movie.interface';
const { Schema } = mongoose;
const reviewSchema = new Schema<TReview>({
    email: {
        type: String,
        required: true
    },
    rating:
    {
        type: Number,
        required: true
    },
    comment:
    {
        type: String,
        required: true
    },
})

const movieSchema = new Schema<TMovie>({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required."]
    },
    releaseDate: {
        type: Date,

    },
    genre: {
        type: String,
        required: true
    },
    reviews: {
        type: [reviewSchema]
    }
    ,
    slug: {
        type: String,
        required: true
    },
    viewCount: {
        type: Number,
        default: 0
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

})

export const Movie = model<TMovie>("Movie", movieSchema)