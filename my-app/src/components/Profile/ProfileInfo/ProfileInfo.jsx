import classes from './ProfileInfo.module.css'

function ProfileInfo(){
    return(
        <div >
            <div className={classes.img__box}>
                <img className={classes.img} src="https://images6.alphacoders.com/568/568500.jpg"/>
            </div>
            <div className={classes.description_box}>
            ava+description
            </div>
        </div>
    );
};
export default ProfileInfo;