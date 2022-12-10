export type MovieCardProps = {
    title:string,
    url:string,
    imdbID?:string
    onClick:()=>void
    type?:'horizontal' | 'vertical'
}