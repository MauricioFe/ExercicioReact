import React from 'react'
import Card from './Card'
import Position from './Position';
import Picture from './Picture';
import Info from './Info';

export default function Cadidate({candidate, position}) {
    const {id, name, votes} = candidate;
    const imageSource = `${id}.jpg`
    return (
        <div>
           <Position>{position}</Position>
           <Picture imageSource ={imageSource} description={name}/>
           <Info/>
           {name} - {votes}
        </div>
    )
}
