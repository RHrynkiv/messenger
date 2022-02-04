import React from 'react'
import style from './Sidebar.module.css'

type PeopleArrayType = {
    id: string
    img: string
    message: string
    name: string
    date: string
    chosen: boolean
}
type PeopleType = {
    People: Array<PeopleArrayType>
    ChangeItem: (id: string) => void;
}


function Sidebar(props: PeopleType) {
    return (
        <div className={style.wrapper}>
            <div className={style.chat}>Chats</div>
            {
                props.People.map((e, i) => {
                    return (
                        <div key={i} className={e.chosen ? style.chosen_item : style.chat_item}
                             onClick={() => props.ChangeItem(e.id)}>
                            <img className={style.ava} src={e.img} alt=";-)"/>
                            <div className={style.name}>{e.name}</div>
                            <div className={style.date}>{e.date}</div>
                            <div className={style.message}>{e.message}</div>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Sidebar;