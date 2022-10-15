import React from 'react';
import Post from './Post/Post';



function MyPosts(props){
    const newPostElement = React.createRef();
    function addPost(){
        
        const text = newPostElement.current.value;
        props.addPost(text)
        // console.log(props.addPost(text));
    };
    const postsElements = props.postsData.map(p=><Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
    return(
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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