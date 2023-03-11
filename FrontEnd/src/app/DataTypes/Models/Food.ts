export interface Food{
    id:string,
    name:string,
    price:number,
    tags:string[] | undefined,
    favorite:boolean,
    stars:number,
    imageUrl:string,
    origins:string[],
    cookTime:string
}