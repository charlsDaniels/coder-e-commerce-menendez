import './NavBar.css';
import Brand from '../../Brand/Brand';
import NavigationItems from '../NavigationItems/NavigationItems';

const navBar = () => {
    return (
        <header className="NavBar">
            <Brand />
            <NavigationItems />
        </header>
    )
}

export default navBar;