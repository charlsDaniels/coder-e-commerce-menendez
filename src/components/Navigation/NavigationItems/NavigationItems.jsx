import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import CartWidget from './CartWidget';

const navigationItems = () => (
    <ul className="NavigationItems">
        <div className='Categories hide-on-small-only'>
            <NavigationItem>Notebooks</NavigationItem>
            <NavigationItem>Celulares</NavigationItem>
            <NavigationItem>Tablets</NavigationItem>
        </div>
        <div>
            <CartWidget />
        </div>
    </ul>
);

export default navigationItems;