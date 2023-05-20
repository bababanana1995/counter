import React, {useState} from "react";
import s from './Counter.module.css'
import {SuperButton} from "../SuperButton/SuperButton";


type CounterPropsType = {
    maxValue: number
    minValue: number

}
export const Counter = (props: CounterPropsType) => {
    const [count, setCount] = useState(props.minValue)
    const incrementButtonHandler = () => {
        count < props.maxValue && setCount(count + 1)
    }
    const decrementtButtonHandler = () => {
        count > props.minValue && setCount(count - 1)
    }
    const resetButtonHandler = () => {
        setCount(props.minValue)
    }
    return (
        <div className={s.counterBox}>

            <div className={s.reset}>
                <SuperButton disable={count === props.minValue}
                             name={'reset'}
                             callBack={resetButtonHandler}/>
            </div>
            <div className={count === 5 ? `${s.counter} ${s.red}` : s.counter}>{count}</div>
            <div className={s.buttons}>
                <SuperButton disable={count === props.maxValue}
                             name={"+1"}
                             callBack={incrementButtonHandler}/>
                <SuperButton disable={count === props.minValue}
                             name={"-1"}
                             callBack={decrementtButtonHandler}/>

            </div>
        </div>
    )
}
