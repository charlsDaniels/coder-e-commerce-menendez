import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        {props.items.map(item => (
            <NavigationItem key={item.name} linkTo={item.linkTo}>{item.descrip}</NavigationItem>
        ))}
    </ul>
);

export default navigationItems;