import './NavBar.css';
import Brand from '../../Brand/Brand';
import NavigationItems from '../NavigationItems/NavigationItems';

const navBar = () => {
    const categories = [
        {
            name: 'Notebooks',
            descrip: 'Notebooks',
            linkTo: '',
        },
        {
            name: 'MobilePhones',
            descrip: 'Celulares',
            linkTo: '',
        },
        {
            name: 'Tablets',
            descrip: 'Tablets',
            linkTo: '',
        },
    ]

    return (
        <header className="NavBar">
            <Brand />
            <NavigationItems items={categories} />
        </header>
    )
}

export default navBar;