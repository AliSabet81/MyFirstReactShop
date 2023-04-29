import { similarProduct } from "@/products/similarProduct";
import ProductCard from "../card/productCard";
import { Link } from "react-router-dom";

const SimilarProduct = () => {
    return ( 
        <div className="grid grid-cols-3 gap-24 mt-12 mb-48">
                {similarProduct.map((i)=><Link to={i.path}><ProductCard src={i.src} name={i.name} price={i.price}></ProductCard></Link>)}
        </div>
     );
}
 
export default SimilarProduct;