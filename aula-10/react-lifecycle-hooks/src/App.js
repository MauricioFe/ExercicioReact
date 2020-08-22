import React, { Component, useState, useEffect } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';

export default function App() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://randomuser.me/api/?seed=rush&nat=br&results=10');
      const json = await res.json();
      setUsers(json.results)
    };
    fetchUsers();
  }, [])
  const handleShowUsers = (isChecked) => {
    this.setState({ showUsers: isChecked });
  }

  return (
    <div>
      <h3>React Life Cycle</h3>
      <Toggle description="Mostrar Usuarios" enabled={showUsers} onToggle={handleShowUsers} />
      <hr />
      {/*se showUsers for true ele mostra o conteudo na div*/}
      {showUsers && <Users users={users} />}
    </div>
  );
}
