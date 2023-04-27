import { Textfield } from "@/components"
import SwiperComponent from "@/components/swiper"
import { categories } from "@/products/categories"
import categoryCard from "@/components/card/categoryCard";
import { homeslideproduct } from "@/products/homeSlideProducts"
import { SwiperSlide } from "swiper/react"
import CategoryCard from "@/components/card/categoryCard";
import HomeAboutUs from "@/components/homeAboutUs";
import DiscountCard from "@/components/card/discountCard";
import { homeDiscount } from "@/products/homeDiscount";

const HomeScreen = () => {
  
    return (
        <div>
            <div className="p-6">
              <SwiperComponent></SwiperComponent>
            </div>
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 justify-items-center items-center p-5 gap-6 lg:gap-20 lg:grid-cols-3">
              {categories.map((element)=><CategoryCard path={element.path} name={element.name} src={element.src}></CategoryCard>)}
            </div>
            <HomeAboutUs></HomeAboutUs>
            <h1 className="text-center text-4xl font-bold mt-10 mb-16">News and promotions</h1>
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 justify-items-center gap-20">
            {homeDiscount.map((element)=><DiscountCard src={element.src}></DiscountCard>)}
            </div>
        </div>
    )
  }
  
  export default HomeScreen
  