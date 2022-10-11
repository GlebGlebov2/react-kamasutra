import classes from './Post.module.css'
function Post(){
    return(
        <li>
        <img className={classes.img} src="https://avatars.mds.yandex.net/i?id=b0f61490dc951095997737c5c701e1f5-7083727-images-thumbs&n=13&exp=1"></img>
        post 1
        </li>
    );
};
export default Post;