import './NavigationItems.css';

const cartWidget = () => {
    return (
        <div className="Cart">
            <a href="#" className="btn-floating white">
                <i className="material-icons blue-text">shopping_cart</i>
            </a>
                <span className="CartBadge">
                    2
                </span>
        </div>
    )
}

export default cartWidget;