import React, {ChangeEvent, useState} from 'react'
import style from './Header.module.css'

type PropsType = {
    Search: (text: string) => void;
}


function Header(props:PropsType) {
    let [value, setValue] = useState("")
    const search = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        props.Search(text)
        setValue(text)
    }
    return (
        <div className={style.wrapper}>
            <img className={style.ava}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQDXB7VoGfx6PRHUrdbTUyZcreWDy3QH-rQ&usqp=CAU"
                 alt="Тут мав бути кіт"/>
            <input className={style.search} placeholder="   Search or start new chat" type="text" value={value}
                   onChange={search}/>
        </div>
    );
}

export default Header;