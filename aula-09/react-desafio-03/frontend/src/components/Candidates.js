import React from 'react'
import Card from './Card';
import Cadidate from './Cadidate';

export default function Candidates({ candidates }) {
    return (
        <div>
            {
                candidates.map(candidate => {
                    const { id } = candidate;
                    return (
                        <div className="row">
                            <Card key={id}>
                                <Cadidate candidate={candidate} />
                            </Card>
                        </div>
                    );
                })
            }
        </div>
    )
}
