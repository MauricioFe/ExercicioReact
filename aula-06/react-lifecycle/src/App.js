import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showUsers: false
    }
  }
  async componentDidMount() {
    const res = await fetch('https://randomuser.me/api/?seed=rush&nat=br&results=10');
    const json = await res.json();

    this.setState({
      users: json.results
    });
  }
  componentDidUpdate() {
    console.log('componentDidUpdate de app.js');
  }
  componentDidWillMount() {
    console.log('componentDidWillMount de app.js');
  }
  render() {
    const { users, showUsers } = this.state;
    return (
      <div>
        <div className="switch">
          <label>
            Mostrar usuarios
          <input type="checkbox" />
            <span className="lever"></span>
          </label>
        </div>
        <hr />
        <div>Users</div>
        {/* {JSON.stringify(users)} */}
      </div>
    );
  }
}
