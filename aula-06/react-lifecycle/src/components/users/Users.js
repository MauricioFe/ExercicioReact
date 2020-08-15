import React, { Component } from 'react'

export default class Users extends Component {
    constructor(){
        super();
        this.state = {
            secondsVisisble:0
        };
        this.interval = null;
    }
    componentDidMount(){
        console.log('componentDidMount de users.js');
        this.interval = setInterval(()=>{
            const {secondsVisisble} = this.state;
            this.setState({
                secondsVisisble: secondsVisisble +1
            });
        },1000)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate de users.js');
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render() {
        const {users} =this.props;
        const {secondsVisisble} = this.state;
        return (
            <div>
                <p>Componente Users visivel por {secondsVisisble}</p>
               {users.map((user) =>{
                   const{ login, name, picture} = user
               return <p key={login.uuid}>{name.first}</p>
               })}
            </div>
        )
    }
}
