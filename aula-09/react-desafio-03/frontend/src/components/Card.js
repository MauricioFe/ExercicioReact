import React from 'react'

export default function Card({ children }) {
    return (
        <div >
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <p>{children}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
