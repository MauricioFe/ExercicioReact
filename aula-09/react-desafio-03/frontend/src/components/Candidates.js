import React from 'react'
import Card from './Card';

export default function Candidates({ candidates }) {
    return (
        <div>
            {
                candidates.map(({ id, name, votes }) => {
                    return (
                        <div className="row">
                            <Card key={id}>{name} - {votes}</Card>
                        </div>
                    );
                })
            }
        </div>
    )
}
