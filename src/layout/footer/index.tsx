import { DribbleSvgIcon, EmailSvgIcon, InstagramSvgIcon, Logo, TwitterSvgIcon, YoutubeSvgIcon } from "@/assets/svgs"
import { Link } from "react-router-dom"

export const Footer = () =>{
    return (
        <div className="bg-slate-800 text-white p-10">
            <div className="flex container m-auto flex-col gap-2.5">
                    <div className="mx-10">
                        <Logo></Logo>
                    </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 min-h-52 justify-between mx-10">
                    <p className="max-w-xs ">Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
                    <ul className=" flex  flex-col gap-8 ">
                        <span className="font-bold text-lg">Company</span>
                        <li className="font-normal text-base"> <Link to={""}>О нас</Link></li>
                        <li className="font-normal text-base"><Link to={""}>Контактыс</Link></li>
                        <li className="font-normal text-base"><Link to={""}>Помощь</Link></li>
                        <li className="font-normal text-base"><Link to={""}>Стать продавцом</Link></li>
                    </ul>
                    <ul className=" flex  flex-col gap-4">
                        <span className="font-bold text-lg">Покупательям</span>
                        <li className="font-normal text-base"><Link to={""}>Вопросы и ответы</Link></li>
                        <li className="font-normal text-base"><Link to={""}>Доставка и возврат товара</Link></li>
                        <li className="font-normal text-base"><Link to={""}>Оферта</Link></li>
                    </ul>
                    <ul className=" flex  flex-col gap-5">
                        <span className="font-bold text-lg">Связаться</span>
                        <li className="flex gap-2.5 items-center"> <EmailSvgIcon/> <span className="font-normal text-base">support@veevva.com</span>  </li>
                        <ul className="flex gap-2.5">
                            <button><li><InstagramSvgIcon/></li></button>
                            <button><li><DribbleSvgIcon/></li></button>
                            <button><li><TwitterSvgIcon/></li></button>
                            <button><li><YoutubeSvgIcon/></li></button> 
                        </ul>
                    </ul>
                </div>
                <div className="flex justify-between mx-10">
            <span>2021 © Veevva Все права защищены. </span>
            <span>Правила пользования  Политика конфиденциальности</span>
                </div>
            </div>
        </div>
    )
}