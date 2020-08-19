import React from 'react'
import Card from './Card'
import Position from './Position';
import Picture from './Picture';
import Info from './Info';
import Name from './Name';
import Votes from './Votes';
import Percentage from './Percentage';

export default function Cadidate({ candidate, position }) {
    const { id, name, votes, percentage } = candidate;
    const imageSource = `${id}.jpg`
    return (
        <div>
            <Position>{position}</Position>
            <Picture imageSource={imageSource} description={name} />
            <Info>
                <Name>{name}</Name>
                <Votes>{votes}</Votes>
                <Percentage>{percentage}</Percentage>
            </Info>

        </div>
    )
}
