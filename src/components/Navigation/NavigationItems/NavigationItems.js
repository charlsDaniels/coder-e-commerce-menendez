import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <div className='Categories'>
            {props.items.map(item => (
                <NavigationItem key={item.name} linkTo={item.linkTo}>{item.descrip}</NavigationItem>
            ))}
        </div>
        <div>
            <NavigationItem key="Login" >Ingresar</NavigationItem>
        </div>
    </ul>
);

export default navigationItems;