export interface Products{
    name?:string
        price?:string
        quantity?:string
        brand?:string
        description?:string
        thumbnail?:[]
        images?:[]
        category?:string
        subcategory?:string
}
export interface Category {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    slugname: string;
    }