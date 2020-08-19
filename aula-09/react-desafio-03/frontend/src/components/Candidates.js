import React from 'react'
import Card from './Card';
import Cadidate from './Cadidate';

export default function Candidates({ candidates }) {
    return (
        <div>
            {
                candidates.map((candidate, index) => {
                    const { id } = candidate;
                    return (
                        <div className="row">
                            <Card key={id}>
                                <Cadidate candidate={candidate} position={index +1}/>
                            </Card>
                        </div>
                    );
                })
            }
        </div>
    )
}
