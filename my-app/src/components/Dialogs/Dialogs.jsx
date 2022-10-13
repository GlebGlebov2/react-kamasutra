import classes from './Dialogs.module.css';
import { NavLink, Routes, Route } from 'react-router-dom';

function DialogsItem(props){
    const path = "/dialogs/" + props.id;
    return(
        <li className={classes.dialogs_item}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
};

function MessagesItem(props){
    const path = "/dialogs/" + props.id;
    return(
        <li className={classes.messages_item}>{props.message}</li>
    );
};

function Dialogs(props){
    const dialogsData=[
        {id:1, name:'Акыл'},
        {id:2, name:'Фарух'},
        {id:3, name:'Махмуд'},
    ];
    const messagesData=[
        {id:1, message:'Сообщение 1'},
        {id:2, message:'Сообщение 2'},
        {id:3, message:'Сообщение 3'},
    ];

    const dialogsElements = dialogsData.map(d=><DialogsItem name={d.name} key={d.id}/>);

    const messagesElements = messagesData.map(m =><MessagesItem message={m.message} key={m.id}/>);
    return(
        <div className={classes.dialogs}>
            <ul className={classes.dialogs_list}>
            {dialogsElements}
            </ul>
            <ul className={classes.messages_list}>
                {messagesElements}
            </ul>
        </div>
    );
};
export default Dialogs;