import React from 'react'
import Card from './Card'
import Position from './Position';

export default function Cadidate({candidate, position}) {
    const {name, votes} = candidate;
    return (
        <div>
           <Position>{position}</Position>{name} - {votes}
        </div>
    )
}
