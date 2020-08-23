import React from 'react'

export default function Action({ type, id, onActionClick }) {
    const handleIconClick =()=>{
        onActionClick(type, id)
    };
    return <span className="material-icons" onClick={handleIconClick} style={{ cursor: 'pointer' }}>{type}</span>
}
