import ProductCard from "@/components/card/productCard";
import { menCategoryProducts } from "@/products/menCategoryproduct";
import { Link } from "react-router-dom";

interface ICategory {
    name:string
}

const Category = (props:ICategory) => {
    return ( 
        <div className="container mx-auto px-10">
            <h1 className="text-5xl mb-10 font-light text-center">{props.name}</h1>
            <div className="grid gap-10 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center">
                {menCategoryProducts.map((i)=><Link to={i.path}><ProductCard src={i.src} name={i.name} price={i.price}></ProductCard></Link>)}
                {menCategoryProducts.map((i)=><Link to={i.path}><ProductCard src={i.src} name={i.name} price={i.price}></ProductCard></Link>)}
                {menCategoryProducts.map((i)=><Link to={i.path}><ProductCard src={i.src} name={i.name} price={i.price}></ProductCard></Link>)}
                {menCategoryProducts.map((i)=><Link to={i.path}><ProductCard src={i.src} name={i.name} price={i.price}></ProductCard></Link>)}
                {menCategoryProducts.map((i)=><Link to={i.path}><ProductCard src={i.src} name={i.name} price={i.price}></ProductCard></Link>)}
                {menCategoryProducts.map((i)=><Link to={i.path}><ProductCard src={i.src} name={i.name} price={i.price}></ProductCard></Link>)}
                {menCategoryProducts.map((i)=><Link to={i.path}><ProductCard src={i.src} name={i.name} price={i.price}></ProductCard></Link>)}
            </div>
        </div>
     );
}
 
export default Category;