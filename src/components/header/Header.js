import React from 'react'
import "./header.css"
import coincap from "./../../img/coincap.svg"
function Header() {
    return (
        <div className="header">
            <div className="header_item 1">
                <p>Coins</p>
                <p>Exchanges</p>
                <p>Swap</p>
            </div>
            <div className="header_item 2"><img src={coincap} alt="logo" className="logo"/></div>
            <div className="header_item 3">
                <p><i className="fas fa-search"></i></p>
                <p><i className="fas fa-cog"></i></p>
                <p><button>Connect Wallet</button></p>
            </div>
        </div>
    )
}

export default Header
