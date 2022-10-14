import classes from './MessagesItem.module.css';

function MessagesItem(props){
    return<li className={classes.messages_item}>{props.message}</li>;
};

export default MessagesItem;