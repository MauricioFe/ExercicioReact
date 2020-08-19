import React from 'react'
import Card from './Card'
import Position from './Position';
import Picture from './Picture';

export default function Cadidate({candidate, position}) {
    const {id, name, votes} = candidate;
    const imageSource = `${id}.jpg`
    return (
        <div>
           <Position>{position}</Position>
           <Picture imageSource ={imageSource} description={name}/>
           {name} - {votes}
        </div>
    )
}
