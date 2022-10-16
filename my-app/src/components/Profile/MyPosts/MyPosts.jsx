import React from 'react';
import Post from './Post/Post';



function MyPosts(props){
    const newPostElement = React.createRef();
    const postsElements = props.postsData.map(p=><Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    function addPost(){
        // const text = newPostElement.current.value;
        props.addPost();
        // props.updateNewPostText('оуо оуо оуо рядом петино говно');
    };
    
    
    function onPostChange(){
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
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