import { ReactElement } from "react"

type ProductType = {
    src ?: string;
    path : string;
    element ?: ReactElement
}

export const ROUTES = {
    Discount1 : "/D-111",
    Discount2 : "/D-112",
    Discount3 : "/D-113",
}


export const homeDiscount:ProductType[] = [
    {
        src : "Discount1.png",
        path:ROUTES.Discount1,
        element : <h1>hello</h1>
    },
    {
        src : "Discount2.png",
        path:ROUTES.Discount2,
        element : <h1>hello</h1>
    },
    {
        src : "Discount3.png",
        path:ROUTES.Discount3,
        element : <h1>hello</h1>
    },
]
