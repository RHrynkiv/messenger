import React, {useState} from 'react';
import './App.css';
import Header from "./Header/Header";
import Sidebar from './Sidebar/Sidebar';
import Body from './Body/Body';
import {v1} from 'uuid';
import img1 from './Images/images(1).png';
import img2 from './Images/images.jpg';
import img3 from './Images/images(2).jpg';
import img4 from './Images/images(3).jpg';
import img5 from './Images/images(4).jpg';
import img6 from './Images/images(5).jpg';
import img7 from './Images/images(6).jpg';

let PeopleId1 = v1();
let PeopleId2 = v1();
let PeopleId3 = v1();
let PeopleId4 = v1();
let PeopleId5 = v1();
let PeopleId6 = v1();
let PeopleId7 = v1();

type ItemsType = {
    items: string
}
type DataType = {
    id: string
    img: any
    name: string
    message: string
    date: any
    chosen: boolean
}

let myData = {
    [PeopleId1]: [
        {message: "My message ", date: "02/11/22", hours: 4, minutes: 12, seconds: 10, MyMessage: true},
        {message: "Okay", date: "02/11/22", hours: 6, minutes: 11, seconds: 10, MyMessage: true}],

    [PeopleId2]: [
        {message: 'Hello, I`m Josefina', date: "02/09/22", hours: 1, seconds: 10, minutes: 37, MyMessage: true},
        {message: "How are you?", date: "02/09/22", hours: 1, minutes: 39, seconds: 10, MyMessage: true}],

    [PeopleId3]: [
        {message: 'Hello,I`m Velazquez', date: "02/07/22", hours: 8, seconds: 10, minutes: 56, MyMessage: true},
        {message: "How are you?", date: "02/07/22", hours: 8, minutes: 58, seconds: 10, MyMessage: true}],
    [PeopleId4]: [
        {message: 'Hello,I`m Alan', date: "09/16/22", hours: 0, minutes: 31, seconds: 10, MyMessage: true},
        {message: "How are you?", date: "09/16/22", hours: 0, minutes: 33, seconds: 10, MyMessage: true}],
    [PeopleId5]: [
        {message: 'Hello,I`m Andrey', date: "06/10/21", hours: 4, minutes: 33, seconds: 10, MyMessage: true},
        {message: "How are you?", date: "06/10/21", hours: 4, minutes: 35, seconds: 10, MyMessage: true}],
    [PeopleId6]: [
        {message: 'Hello,I`m Alice', date: "12/10/21", hours: 2, minutes: 32, seconds: 10, MyMessage: true},
        {message: "How are you?", date: "12/10/21", hours: 2, minutes: 34, seconds: 10, MyMessage: true}],
    [PeopleId7]: [
        {message: 'Hello,I`m Sil', date: "01/10/21", hours: 1, minutes: 31, seconds: 10, MyMessage: true},
        {
            message: "You will be in IT, i promise you",
            date: "01/10/21",
            hours: 1,
            seconds: 10,
            minutes: 33,
            MyMessage: true
        }],
}

let Messages = {
    [PeopleId1]: [
        {message: "How are you?", date: "02/11/22", hours: 4, minutes: 11, seconds: 10, MyMessage: false},
        {message: "We have a plan", date: "02/11/22", hours: 4, minutes: 13, seconds: 10, MyMessage: false}],

    [PeopleId2]: [
        {message: 'Hello, I`m Josefina', date: "02/09/22", hours: 1, minutes: 36, seconds: 10, MyMessage: false},
        {message: "How are you?", date: "02/09/22", hours: 1, minutes: 38, seconds: 10, MyMessage: false},
        {
            message: "Quickly, come to my office",
            date: "02/09/22",
            hours: 1,
            seconds: 10,
            minutes: 40,
            MyMessage: false
        }],
    [PeopleId3]: [
        {message: 'Hello,I`m Velazquez', date: "02/07/22", hours: 9, minutes: 55, seconds: 10, MyMessage: false},
        {message: "How are you?", date: "02/07/22", hours: 9, minutes: 57, seconds: 10, MyMessage: false},
        {
            message: "We are raising money, come on!",
            date: "02/09/22",
            hours: 9,
            seconds: 10,
            minutes: 59,
            MyMessage: false
        }],
    [PeopleId4]: [
        {message: 'Hello,I`m Alan', date: "09/16/22", hours: 7, minutes: 30, seconds: 10, MyMessage: false},
        {message: "How are you?", date: "09/16/22", hours: 7, minutes: 32, seconds: 10, MyMessage: false},
        {
            message: "You will be in IT, i promise you",
            date: "09/16/22",
            hours: 13,
            minutes: 34,
            seconds: 10,
            MyMessage: false
        }],
    [PeopleId5]: [
        {message: 'Hello,I`m Andrey', date: "06/10/21", hours: 6, minutes: 32, seconds: 10, MyMessage: false},
        {message: "How are you?", date: "06/10/21", hours: 6, minutes: 34, seconds: 10, MyMessage: false},
        {
            message: "Do you want to buy my car?",
            date: "06/10/21",
            hours: 6,
            seconds: 10,
            minutes: 36,
            MyMessage: false
        }],
    [PeopleId6]: [
        {message: 'Hello,I`m Alice', date: "12/10/21", hours: 4, minutes: 32, seconds: 10, MyMessage: false},
        {message: "How are you?", date: "12/10/21", hours: 5, minutes: 34, seconds: 10, MyMessage: false},
        {
            message: "You will be in IT, i promise you",
            date: "10/10/21",
            hours: 5,
            minutes: 36,
            seconds: 10,
            MyMessage: false
        }],
    [PeopleId7]: [
        {message: 'Hello,I`m Sil', date: "01/10/21", hours: 1, minutes: 32, seconds: 10, MyMessage: false},
        {
            message: "You will be in IT, i promise you",
            date: "01/10/21",
            hours: 1,
            minutes: 34,
            seconds: 10,
            MyMessage: false
        }],
}


const data = [
    {
        id: PeopleId1,
        img: img6,
        name: 'Tony Soprano',
        message: "",
        date: 'Feb 11, 2022',
        chosen: true
    },
    {
        id: PeopleId2,
        img: img2,
        name: 'Josefina',
        message: "",
        date: 'Feb 9, 2022',
        chosen: false
    },
    {
        id: PeopleId3,
        img: img3,
        name: 'Velazquez',
        message: "",
        date: 'Feb 7, 2022',
        chosen: false
    }, {
        id: PeopleId4,
        img: img4,
        name: 'Alan Igorevich',
        message: "",
        date: 'Sep 16, 2021',
        chosen: false
    }, {
        id: PeopleId5,
        img: img5,
        name: 'Andrey Andreyovich',
        message: "",
        date: 'jun 19, 2021',
        chosen: false
    }, {
        id: PeopleId6,
        img: img1,
        name: 'Alice Freeman',
        message: "",
        date: 'jun 12, 2021',
        chosen: false
    }, {
        id: PeopleId7,
        img: img7,
        name: 'Silvio',
        message: "",
        date: 'jun 01, 2021',
        chosen: false
    }
]


const Allpeople = [...data]


let item: ItemsType = {
    items: ''
}


function App() {

    let time = new Date();

    window.fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            return response.json();
        })
        .then((dat) => {
            item.items = dat.value
        });


    let [MyData, setMyData] = useState(myData)
    let [Data, setData] = useState<Array<DataType>>(data)
    let [AllPeople, setAllPeople] = useState(Allpeople)
    let [messages, setMessages] = useState(Messages)
    let [OnesMessages, setOnesMessages] = useState([...messages[PeopleId1]])
    let [OnesMyMessages, setOnesMyMessages] = useState([...MyData[PeopleId1]])
    let AllMessages = [...OnesMessages, ...OnesMyMessages];
    AllMessages.sort((a, b) => {
        if (a.hours === b.hours) {
            if (a.minutes === b.minutes) {
                return (a.seconds - b.seconds)
            } else {

                return (a.minutes - b.minutes)
            }
        } else {
            return (a.hours - b.hours)
        }
    })
    let [OnesPeople, setOnesPeople] = useState([
        {
            id: PeopleId1,
            img: img6,
            name: 'Tony Soprano',
            message: "",
            date: 'Feb 11, 2022',
            chosen: true
        }])
    let [people, setPeople] = useState<Array<DataType>>(Data)

    const SendMessage = (NewValue: string, PeopleId: string) => {
        window.fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                return response.json();
            })
            .then((dat) => {
                item.items = dat.value
            });
        if (NewValue) {

            let NewMyMessage = {
                message: NewValue,
                date: `${time.getDate()}/0${time.getMonth() + 1}/${time.getFullYear() - 2000}`,
                hours: time.getHours(),
                minutes: time.getMinutes(),
                seconds: time.getSeconds(),
                MyMessage: true
            }
            MyData[PeopleId] = [...MyData[PeopleId], {...NewMyMessage}]
            setMyData(MyData)
            setOnesMyMessages([...MyData[PeopleId]])
            let SavedData = [...Data].filter((d) => d.id === PeopleId)
            let NewData = [...Data].filter((d) => d.id !== PeopleId)
            Data = [...SavedData, ...NewData]
            setData(Data)
            setPeople(Data)
            setAllPeople(Data)

            setTimeout(function () {
                let NewMessage = {
                    message: item.items,
                    date: `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear() - 2000}`,
                    hours: time.getHours(),
                    minutes: time.getMinutes(),
                    seconds: time.getSeconds() + 5,
                    MyMessage: false
                }
                messages[PeopleId] = [...messages[PeopleId], {...NewMessage}]
                setMessages(messages)
                setOnesMessages([...messages[PeopleId]])
                SavedData = [...Data].filter((d) => d.id === PeopleId)
                NewData = [...Data].filter((d) => d.id !== PeopleId)
                Data = [...SavedData, ...NewData]
                setData(Data)
                setPeople(Data)
                setAllPeople(Data)
            }, 5000);
        }


    }

    const Search = (SearchText: string) => {
        let SearchPeople = [...Data]
        let ThisPeople: any = [];
        if (SearchText) {
            let a = 0;
            SearchPeople.map((s) => {
                let Array = s.name.split('')
                let Text = SearchText.split('')
                if (Text) {
                    let k = 0;
                    for (let i = 0; i < Text.length; i++) {
                        if (Text[i] === Array[i]) {
                            k++
                            if (k === Text.length) {
                                ThisPeople[a] = {...s};
                                a++;
                            }
                        }
                    }
                } else {
                    setPeople(SearchPeople)
                }
            })
            if (ThisPeople) {
                setPeople([...ThisPeople])
            } else {
                setPeople([...AllPeople])
            }
        } else {
            setPeople([...AllPeople])
        }
    }


    const ChangeItem = (PeopleID: string) => {
        let NewOnesMessages = messages[PeopleID]
        let NewOnesMyMessages = MyData[PeopleID]
        people.map((p) => {
            p.chosen = p.id === PeopleID;
        })
        setPeople([...people])
        setOnesPeople(people.filter((p) => p.id === PeopleID))
        setOnesMessages([...NewOnesMessages])
        setOnesMyMessages([...NewOnesMyMessages])
    }


    const ChangeMessages = () => {
        let AllData = [];
        Data.map((d) => {
            AllData = [...messages[d.id], ...MyData[d.id]];
            AllData.sort((a, b) => {
                if (a.hours === b.hours) {
                    if (a.minutes === b.minutes) {
                        return (a.seconds - b.seconds)
                    } else {

                        return (a.minutes - b.minutes)
                    }
                } else {
                    return (a.hours - b.hours)
                }
            })
            d.message = AllData[AllData.length - 1].message;
            d.date = AllData[AllData.length - 1].date;
        })
    }
    ChangeMessages();
    localStorage.setItem("AllMessages",JSON.stringify(AllMessages))

    return (
        <div className="BODY">
            <Header Search={Search}/>
            <Sidebar People={people} ChangeItem={ChangeItem}/>
            {
                OnesPeople.map((p, i) => {
                    return (<Body key={i}
                                  img={p.img}
                                  id={p.id}
                                  name={p.name}
                                  AllMessage={AllMessages}
                                  SendMessage={SendMessage}/>)
                })
            }
        </div>
    );
}


export default App;
