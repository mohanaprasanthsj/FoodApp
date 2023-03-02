import './header.css';
const Header =()=>{
    return(
        <div className="header">
            <div className="logo">
                <h3>Food App</h3>
            </div>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Contact</li>
                        <li>Help</li>
                    </ul>
                </div>
        </div>
    )
}

export default Header;