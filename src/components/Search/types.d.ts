import { Movie } from "../../services/types"

export type SearchProps = {
    movies:Movie[]
    loading:boolean
    notFound:boolean
    search:string | undefined
    setActiveSearch: (data:boolean)=>voild
}