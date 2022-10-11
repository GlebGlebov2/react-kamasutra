import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
function Profile(){
    return(
        <div className={classes.content}>
            <div className={classes.img__box}>
                <img className={classes.img} src="https://images6.alphacoders.com/568/568500.jpg"></img>
            </div>
            <div>
            ava+description
            </div>
            <MyPosts/>
        </div>
    );
};
export default Profile;