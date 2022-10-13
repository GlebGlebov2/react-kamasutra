import classes from './Navbar.module.css';
import {Link, NavLink} from 'react-router-dom';


const cls = ({ isActive }) => (isActive ? classes.link_active : classes.link)

function Navbar(){
    return(
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/profile" className={cls}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" className={cls}>Messages</NavLink></li>
                
                    
                
            </ul>
        </nav>
    );

};

export default Navbar;