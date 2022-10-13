import classes from './MyPosts.module.css';
import Post from './Post/Post';
function MyPosts(props){
    const postData =[
        {id:1, message:'Здроу', likesCount:3},
        {id:2, message:'покау', likesCount:54},
    ];
    return(
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>add post</button>
            </div>
            <ul>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </ul>
        </div>
    );
};
export default MyPosts;