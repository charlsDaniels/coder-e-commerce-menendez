import './NavigationItem.css';

const navigationItem = (props) => (
    <li className="NavigationItem">
        <a href='#'
        >{props.children}</a>
    </li>
);

export default navigationItem;