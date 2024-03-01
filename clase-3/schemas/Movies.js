const z = require('zod')


const movieScheam = z.object({
    title: z.string({
        invalid_type_error:'Movie title must be a string',
        required_error: 'Movie title is required. Please, check url'
    }),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(0),
    rate: z.number().min(0).max(10).default(5),
    poster: z.string().url({
        message: 'Poster must be a valid URL'
    }),
    genre: z.array(
        z.enum(['Action', 'Aventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi','Infantil',
        'Cartoon']),
        {
            required_error: 'Movie genre is required.',
            invalid_type_error: 'Movie gnre must be an array of enum Gnre'
        }
        

    )



})

function validateMovie (Input) {
    return movieScheam.safeParse(Input)
    
}

function validatePartialMovie(Input) {
    return movieScheam.partial().safeParse(Input)
    
}

module.exports = {
    validateMovie,
    validatePartialMovie
}