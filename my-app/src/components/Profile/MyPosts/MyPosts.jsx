import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

function MyPosts(props){
    const newPostElement = React.createRef();
    const postsElements = props.postsData.map(p=><Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    function addPost(){
        props.dispatch(addPostActionCreator());
    };
    
    function onPostChange(){
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    
    return(
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>add post</button>
            </div>
            <ul>
                {postsElements}
            </ul>
        </div>
    );
};
export default MyPosts;