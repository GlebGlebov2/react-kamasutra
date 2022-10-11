import classes from './Navbar.module.css'
function Navbar(){
    return(
        <nav className={classes.nav}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;