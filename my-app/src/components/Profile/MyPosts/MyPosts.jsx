import classes from './MyPosts.module.css';
import Post from './Post/Post';
function MyPosts(){
    return(
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <ul>
                <Post message="Здору"/>
                <Post message="покау"/>
                <Post/>
                <Post/>
            </ul>
        </div>
    );
};
export default MyPosts;