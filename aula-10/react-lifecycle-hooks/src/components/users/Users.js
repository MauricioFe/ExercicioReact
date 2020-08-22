import React, { Component, useState, useEffect } from 'react'
import User from './User';

export default function Users({ users }) {
    const [secondsVisisble, setSecondsVisible] = useState(0);
    useEffect(() => {
        const interval = setInterval(()=>{
            setSecondsVisible(secondsVisisble + 1);
        })
        return () => {
            clearInterval();
        }
    }, [secondsVisisble]);
    return (
        <div>
            <p>Componente Users visivel por {secondsVisisble}</p>
            <ul>
                {users.map((user) => {
                    const { login, name, picture } = user
                    return <li key={login.uuid}><User user={user} /></li>
                })}
            </ul>
        </div>
    )
}
