export interface Movie {
    _id: number,
    title: string,
    genre: [{ _id: number, name: string }],
    numberInStock: number,
    dailyRentalRate: number,
    publishDate: string,
    liked: boolean
}