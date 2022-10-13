import classes from './MyPosts.module.css';
import Post from './Post/Post';
function MyPosts(props){
    const postsData =[
        {id:1, message:'Здроу', likesCount:3},
        {id:2, message:'покау', likesCount:54},
    ];
    const postsElements = postsData.map(p=><Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
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
                {postsElements}
            </ul>
        </div>
    );
};
export default MyPosts;