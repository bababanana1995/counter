import React from "react";
import s from './SuoerButton.module.css'


type SuperButtonPropsType={
    name:string
    callBack:()=>void
    disable:boolean
    buttonClass?:string
}
export const SuperButton=(props:SuperButtonPropsType)=>{
    const onClickHandler=()=>{
        props.callBack()
    }
    return(
        <button className={s.button} disabled={props.disable} onClick={onClickHandler}>{props.name}</button>

    )
}
