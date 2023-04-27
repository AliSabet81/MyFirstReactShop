import SettingModal from "@/Modals/setting"
import SignModalComponent from "@/Modals/sign"
import { Logo, MenuSvgIcone, SearchSvgIcon, SettingSvgIcone, SignSvgIcone, } from "@/assets/svgs"
import { Textfield,Button } from "@/components"
import ModalComponent from "@/components/modal"
import { useState } from "react"
import { Link, Routes } from "react-router-dom"

export const Header = () =>{
    const [isLogin,setIsLogin]=useState(true);
    const handle=()=>{
        
    }
    return (
    <div className="flex bg-slate-800 md:m-auto xl:max-w-screen-xl lg:max-w-screen-lg 2xl:max-w-screen-2xl rounded-md shadow m-3 p-3 !px-6 h-16 items-center !md:mx-2 gap-5 mx-10 md:container">
    <span  className="flex-1 mb-3"><Link to={"/"}><Logo></Logo></Link></span>
    <Textfield variant="header" className="hidden md:flex"  endicone={<SearchSvgIcon className="absolute"/>}></Textfield>
    {/* <Button onClick={} className="hidden md:flex" variant="header" icone={<SignSvgIcone/>} name="Регистрация">
    </Button> */}
    <SignModalComponent className="hidden md:flex"/>
    <span className="hidden md:inline text-white h-full bg-white border"></span>
    <div className="hidden md:flex">
    <ModalComponent name="Settings" icone={<SettingSvgIcone/>}><SettingModal/></ModalComponent>
    </div>
    <Button className="md:hidden flex" variant="menu" icone={<MenuSvgIcone/>} name="Menu"></Button>
        <div></div>
    </div>
    )
}