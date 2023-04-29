import React from "react";
import { ButtonHTMLAttributes, ReactElement } from "react";

interface IButten extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant ?: "header" | "sign" | "slider" | "menu" | "size" | "color",
    icone ?: string | ReactElement;
}

export const Button = (props:IButten) =>{
    const style = {
        backgroundColor : props.color
    }
    const [buttonHover , setButtonHover] = React.useState (false)
    switch (props.variant) {
        case "header": return(
            <button {...props} className={`${props.className} flex items-center h-12 w-44 justify-between`}>
                <span className="p-2.5">{props.icone}</span>
                <span className="text-white font-bold text-lg">{props.name}</span>
            </button>
        )
        case "menu": return(
            <button {...props} className={`${props.className} flex items-center h-12 w-28 justify-between`}>
                <span className="p-2.5">{props.icone}</span>
                <span className="text-white font-bold text-lg">{props.name}</span>
            </button>
        )
        case "size": return(
            <button className="w-20 h-10 rounded shadow opacity-50 bg-gray-300 hover:bg-gray-600 hover:text-white hover:opacity-70">{props.name}</button>
        )
        case "color": return(
            <button onClick={()=> setButtonHover(!buttonHover)} style={style} className={buttonHover ? "w-10 h-10 rounded-full border-8" : "w-10 h-10 rounded-full border border-gray-800"}>{props.name}</button>
        )
        default:
            return <button  {...props} className={`${props.className} w-full bg-green-500 text-white font-bold rounded-sm text-center py-3`}/>
            break;
    }
}