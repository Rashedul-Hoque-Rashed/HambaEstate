import "./Navbar.scss"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>HambaEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
            <a href="/">Sing in</a>
                <a href="/" className="register">Sing up</a>
            </div>
        </nav>
    )
}

export default Navbar;