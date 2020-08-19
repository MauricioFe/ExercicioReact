import React from 'react'

export default function Card({ children }) {
    return (
        <div>
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <span>{children}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
