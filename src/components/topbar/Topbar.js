import React from 'react'
import "./topbar.css"

function Topbar() {
    return (
        <div className="topbar fluid">
            <div className="topbar_data 1">
                <div><label>MARKET CAP</label><span>$2.52T</span></div>
                <div><label>EXCHANGE VOL</label><span>$203.99B</span></div>
                <div><label>ASSETS</label><span>2,124</span></div>
            </div>
            <div className="topbar_data 2">
                 <div><label>EXCHANGES</label><span>73</span></div>
                 <div><label>MARKETS</label><span>12,382</span></div>
                 <div><label>BTC DOM INDEX</label><span>44.1%</span></div>
            </div>
        </div>
    )
}

export default Topbar
