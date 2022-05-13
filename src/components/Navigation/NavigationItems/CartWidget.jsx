import './NavigationItems.css';

const cartWidget = () => {
    return (
        <div className="Cart hide-on-med-and-down">
            <button href="#" className="btn-floating white">
                <i className="material-icons blue-text">shopping_cart</i>
            </button>
            <span className="Badge center">
                2
            </span>
        </div>
    )
}

export default cartWidget;