import './NavigationItems.css';

const cartWidget = () => {
    return (
        <>
            <a href="#" className="btn-floating white">
                <i className="material-icons blue-text">shopping_cart</i>
            </a>
            <span className="CartBadge">
                2
            </span>
        </>
    )
}

export default cartWidget;