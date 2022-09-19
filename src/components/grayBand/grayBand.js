import React from 'react'
import './style.css'
import backArrow from './back_arrow.png'
import dots from './three_dots.png'
function GrayBand() {
    return (
        <div style={{ padding: '0.75rem', backgroundColor: '#34495E', maxHeight: '3rem', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ color: '#fff' }}>
                <img src={backArrow} />
                <span style={{ marginLeft: '1rem' }}>back Nav</span>

            </div>
            <div style={{ color: '#fff', marginRight: '1.25rem' }}>
                <img src={dots} />
            </div>
        </div>
    )
}

export default GrayBand