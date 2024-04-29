import { useState } from "react";
import "./Navbar.scss"

function Navbar() {
    const [open, setOpen] = useState(false);
    console.log(open);
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
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sing in</a>
                    <a href="/">Sing up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;