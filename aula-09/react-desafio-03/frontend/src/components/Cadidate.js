import React from 'react'
import Card from './Card'

export default function Cadidate({candidate}) {
    const {name, votes} = candidate;
    return (
        <div>
            {name} - {votes}
        </div>
    )
}
