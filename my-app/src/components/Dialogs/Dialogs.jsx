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
    return(
        <div className={classes.dialogs}>
            <ul className={classes.dialogs_list}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name="Махмуд" id="3"/>
            </ul>
            <ul className={classes.messages_list}>
                <MessagesItem message={messagesData[0].message} id={messagesData[0].id}/>
                <MessagesItem message={messagesData[1].message} id={messagesData[1].id}/>
                <MessagesItem message="Сообщение 3"/>
            </ul>
        </div>
    );
};
export default Dialogs;