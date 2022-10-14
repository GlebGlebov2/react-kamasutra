import classes from './Dialogs.module.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';
import { state } from '../../redux/state';




function Dialogs(props){
    // const dialogsData=[
    //     {id:1, name:'Акыл'},
    //     {id:2, name:'Фарух'},
    //     {id:3, name:'Махмуд'},
    // ];
    // const messagesData=[
    //     {id:1, message:'Сообщение 1'},
    //     {id:2, message:'Сообщение 2'},
    //     {id:3, message:'Сообщение 3'},
    // ];

    const dialogsElements = props.state.dialogsData.map(d=><DialogsItem name={d.name} id={d.id} key={d.id} />);

    const messagesElements = props.state.messagesData.map(m =><MessagesItem message={m.message} id={m.id} key={m.id} />);
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