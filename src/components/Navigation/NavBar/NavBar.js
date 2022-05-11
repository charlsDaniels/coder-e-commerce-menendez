import './NavBar.css';
import Brand from '../../Brand/Brand';
import NavigationItems from '../NavigationItems/NavigationItems';

const navBar = () => {
    const categories = [
        {
            name: 'Vehicles',
            descrip: 'Vehículos',
            linkTo: '',
        },
        {
            name: 'Computers',
            descrip: 'Computadoras',
            linkTo: '',
        },
        {
            name: 'Books',
            descrip: 'Libros',
            linkTo: '',
        },
    ]

    return (
        <header className="NavBar">
            <Brand />
            <NavigationItems items={categories} />
            <NavigationItems items={[{
                name: 'Login',
                descrip: 'Ingresar',
                linkTo: '',
            }]} />
        </header>
    )
}

export default navBar;