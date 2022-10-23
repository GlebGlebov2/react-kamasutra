import classes from './Dialogs.module.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';
import { sendMessageCreator, state, updateNewMessageBodyCreator } from '../../redux/state';




function Dialogs(props){

    let state = props.store.getState().messagesPage;
    

    const dialogsElements = state.dialogsData.map(d=><DialogsItem name={d.name} id={d.id} key={d.id} />);

    const messagesElements = state.messagesData.map(m =><MessagesItem message={m.message} id={m.id} key={m.id} />);

    const newMessageBody = state.newMessageBody;
    
    function onSendMessageClick(){
        props.store.dispatch(sendMessageCreator())
    };
    function onNewMessageChange(event){
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };
    return(
        <div className={classes.dialogs}>
            <ul className={classes.dialogs_list}>
                {dialogsElements}
            </ul>
            <ul className={classes.messages_list}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea 
                        onChange={onNewMessageChange}
                        value={newMessageBody} 
                        placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </ul>
        </div>
    );
};
export default Dialogs;