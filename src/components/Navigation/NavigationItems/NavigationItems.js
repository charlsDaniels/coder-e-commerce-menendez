import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem>Registrarse</NavigationItem>
        <NavigationItem>Ingresar</NavigationItem>
    </ul>
);

export default navigationItems;