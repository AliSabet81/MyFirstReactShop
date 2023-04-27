import { SearchSvgIcon } from "@/assets/svgs";
import { Textfield } from "@/components";
import { ROUTES } from "@/routes";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import SignInModal from "@/Modals/sign";
import SignModal from "@/Modals/sign";
import SwiperComponent from "@/components/swiper";
import HomeScreen from "@/screens/home";

interface ILayout {
    children : ReactElement;
}

export const Layout = ({children}: ILayout) =>{
    return(
        <div className="mt-4">
        <Header></Header>
        <main className=" py-16">{children}</main>
        <Footer></Footer>
        </div>
    )
}