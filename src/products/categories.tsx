import Category from "@/screens/categories/Men";
import { ReactElement } from "react"

type ProductType = {
    name ?: string;
    src ?: string;
    path : string;
    element ?: ReactElement
}

export const ROUTES = {
    categoryMen : "/c-111",
    categoryWoman : "/c-112",
    categoryBrand : "/c-113",
    categoryNew : "/c-114",
    categoryAccessories : "/c-115",
    categoryDiscounts : "/c-116",
}


export const categories:ProductType[] = [
    {
        name: "Men",
        src : "categorymen.png",
        path:ROUTES.categoryMen,
        element : <Category name={"Men"}/>
    },
    {
        name: "Woman",
        src : "categoryWoman.png",
        path:ROUTES.categoryWoman,
        element : <Category name={"Woman"}/>
    },
    {
        name: "Brand",
        src : "categoryBrand.png",
        path:ROUTES.categoryBrand,
        element : <Category name={"Brand"}/>
    },
    {
        name: "New",
        src : "categoryNew.png",
        path:ROUTES.categoryNew,
        element : <Category name={"New"}/>
    },{
        name: "Accessories",
        src : "categoryAccessories.png",
        path:ROUTES.categoryAccessories,
        element : <Category name={"Accessories"}/>
    },
    {
        name: "Discounts",
        src : "categoryDiscounts.png",
        path:ROUTES.categoryDiscounts,
        element : <Category name={"Discountsname"}/>
    }
]
