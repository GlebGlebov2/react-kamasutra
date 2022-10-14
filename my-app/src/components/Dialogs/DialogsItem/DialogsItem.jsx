import classes from './DialogsItem.module.css';
import { NavLink, Routes, Route } from 'react-router-dom';

function DialogsItem(props){
    const path = "/dialogs/" + props.id;
    return(
        <li className={classes.dialogs_item}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
};

export default DialogsItem;