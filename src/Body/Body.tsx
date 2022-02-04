import React, {ChangeEvent, useState} from "react";
import style from './Body.module.css'


type AllMessageType = {
    message: string
    date?: string
    hours: number
    minutes: number
    MyMessage: boolean
}
type PropsType = {
    id: string
    name: string
    img: any
    AllMessage: Array<AllMessageType>
    SendMessage: (NewText: string, PeopleId: string) => void;
}
let lastMessage;

function Body(props: PropsType) {
    let [Value, setValue] = useState("")
    const ChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let Text = e.currentTarget.value
        setValue(Text)

    }
    const SendMessage = () => {
        props.SendMessage(Value, props.id)
        setValue("")
    }
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <img className={style.header__photo} src={props.img} alt="Ava"/>
                <div className={style.header__text}>{props.name}</div>
            </div>
            <div className={style.body}>

                {
                    props.AllMessage.map((m, i) => {
                        if (!m.MyMessage) {
                            return (
                                <div className={style.message} key={i}>
                                    <img className={style.img} src={props.img} alt="Ava"/>
                                    <div className={style.text}>{m.message}</div>
                                    <div className={style.date}>{m.date} {m.hours}:{m.minutes}</div>
                                </div>
                            );
                        } else {
                            return (
                                <div  className={style.MyMessage} key={i}>
                                    <div className={style.MyText}>{m.message}</div>
                                    <div className={style.MyDate}>{m.date} {m.hours}:{m.minutes}</div>
                                </div>
                            )
                        }
                    })}

            </div>
            <div className={style.footer}>

                <input className={style.footer__input} value={Value}
                       onKeyPress={(e) => {if (e.charCode === 13)SendMessage()}}
                       onChange={(e) => ChangeValue(e)}
                       placeholder="Type your message" type="text"/>

                <button className={style.footer__button} onClick={SendMessage}>x</button>
            </div>

        </div>
    );
}


export default Body;